import React, { useState, useEffect } from "react";

import InputForm from "../../components/InputForm";
import Spinner from "../../components/Spinner";
import ListAdm from "./List.adm";
import api from "../../apis/api";
import "../../style/store.css";

export default function Store() {
  const [isOpen, setIsOpen] = useState(true);

  const [loading, setLoading] = useState(false);
  const [id, setId] = useState(0);
  const [dataState, setDataState] = useState({
    category: "",
    title: "",
    value: 0,
    unity: "",
    description: "",
    pictureUrl: "",
  });

  // upload de imagem da cloudnary
  async function handleUpload(file) {
    const uploadData = new FormData();

    uploadData.append("productPicture", file);

    const response = await api.post("/image-upload", uploadData);

    return response.data.url;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (id !== 0) {
      updateItem();
    } else {
      try {
        setLoading(true);
        const pictureUrl = await handleUpload(dataState.pictureUrl);

        const response = await api.post("/products", {
          ...dataState,
          pictureUrl,
        });
        console.log(response);
        setLoading(false);
        // eslint-disable-next-line no-restricted-globals
        location.reload();
      } catch (err) {
        console.error(err.response);
        setLoading(false);
      }
    }
  }
  useEffect(() => {
    if (id !== 0) {
      async function getById() {
        try {
          const result = await api.get(`/products/filter/${id}`);
          console.log(result);
          setDataState(result.data);
        } catch (err) {
          console.log(err);
        }
      }
      getById();
    }
    return () => {};
  }, [id]);

  async function updateItem() {
    try {
      const pictureUrl = await handleUpload(dataState.pictureUrl);

      const result = await api.patch(`/products/update/${id}`, {
        ...dataState,
        pictureUrl,
      });
      console.log(result.data);
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    } catch (err) {
      console.log(err);
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
    <div className=' container-store'>
      {isOpen ? (
        <form
          onSubmit={handleSubmit}
          className='row g-0 needs-validation container-form'
          style={{ paddingTop: "5rem" }}
        >
          {loading ? <Spinner /> : null}

          <InputForm
            type='text'
            label={"Categoria"}
            name='category'
            value={dataState.category}
            onChange={handleChange}
          />

          <InputForm
            type='text'
            label={"Titulo do produto"}
            name='title'
            value={dataState.title}
            onChange={handleChange}
          />

          <InputForm
            type='number'
            label={"Valor"}
            name='value'
            value={dataState.value}
            onChange={handleChange}
          />

          <div className='container-select col-md-4'>
            <label htmlFor='validationCustom01' className='form-label'>
              Unidade
            </label>
            <select
              className='form-control'
              type='text'
              required
              name='unity'
              value={dataState.unity}
              onChange={handleChange}
            >
              <option value='Kg'>kg</option>
              <option value='cento'>cento</option>
              <option value='unidade'>unidade</option>
            </select>
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
            <button
              type='button'
              onClick={() => setIsOpen(isOpen ? false : true)}
            >
              Editar
            </button>
          </div>
        </form>
      ) : (
        <section className='sessao-list'>
          <ListAdm
            id={id}
            setId={setId}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            // dataProvider={dataProvider}
          />
        </section>
      )}
    </div>
  );
}
