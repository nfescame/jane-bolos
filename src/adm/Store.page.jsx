import React, { useState } from "react";
import "../style/store.css";
// import ButtonComponent from "../components/Button";
import api from "../apis/api";

export default function Store() {
  const [dataState, setDataState] = useState({
    category: "",
    title: "",
    value: 0,
    description: "",
    pictureUrl: "",
  });

  async function handleUpload(file) {
    const uploadData = new FormData();

    uploadData.append("productPicture", file);

    const response = await api.post("/image-upload", uploadData);

    return response.data.url;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const pictureUrl = await handleUpload(dataState.pictureUrl);

      const response = await api.post("/products", {
        ...dataState,
        pictureUrl,
      });
      console.log(response);
    } catch (err) {
      console.error(err.response);
    }
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const file = e.target.files;

    if (file) {
      return setDataState({ ...dataState, [name]: file[0] });
    }

    setDataState({ ...dataState, [name]: value });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='row g-0 needs-validation container-form'
        style={{ paddingTop: "5rem" }}
      >
        <div className='col-md-4'>
          <label htmlFor='validationCustom01' className='form-label'>
            Categoria
          </label>
          <input
            name='category'
            value={dataState.category}
            onChange={handleChange}
            type='text'
            className='form-control'
            required
          />
        </div>

        <div className='col-md-4'>
          <label htmlFor='validationCustom01' className='form-label'>
            Titulo do produto
          </label>
          <input
            name='title'
            value={dataState.title}
            onChange={handleChange}
            type='text'
            className='form-control'
            required
          />
        </div>

        <div className='col-md-4'>
          <label htmlFor='validationCustom01' className='form-label'>
            Valor
          </label>
          <input
            name='value'
            value={dataState.value}
            onChange={handleChange}
            type='number'
            className='form-control'
            min='1'
            required
          />
        </div>

        <div className='col-md-4'>
          <label htmlFor='validationCustom01' className='form-label'>
            Descrição do produto
          </label>
          <textarea
            value={dataState.description}
            onChange={handleChange}
            name='description'
            type='text'
            className='form-control'
            required
          />
        </div>

        <div className='col-md-4'>
          <label htmlFor='validationCustom01' className='form-label'>
            Imagem
          </label>
          <input
            name='pictureUrl'
            onChange={handleChange}
            type='file'
            className='form-control'
            required
          />
        </div>

        <div className='container-btn'>
          <button type='submit'>salvar</button>
          {/* <ButtonComponent handleSubmit={handleSubmit} text='Salvar' />
           */}
        </div>
      </form>
    </>
  );
}
