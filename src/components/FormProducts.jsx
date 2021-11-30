import React, { useState, useEffect } from "react";

import Spinner from "../components/Spinner";
import api from "../apis/api";

import "../style/formProducts.css";
import { useParams } from "react-router-dom";

export default function FormProducts(props) {
  const parans = useParams();

  const [loading, setLoading] = useState(false);
  const [id, seId] = useState("");

  const [dataState, setDataState] = useState({
    category: "",
    title: "",
    value: 0,
    unity: "",
    description: "",
    pictureUrl: "",
  });

  useEffect(() => {
    seId(parans);
    if (id !== 0) {
      async function getProductsId() {
        try {
          const result = await api.get(`/products/filter/${Object.values(id)}`);
          console.log(result);
          setDataState(result.data);
        } catch (err) {
          console.error(err);
        }
      }
      getProductsId();
    }
  }, [id]);

  // upload de imagem da cloudnary
  async function handleUpload(file) {
    const uploadData = new FormData();

    uploadData.append("productPicture", file);

    const response = await api.post("/image-upload", uploadData);

    return response.data.url;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(dataState);
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

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const file = e.target.files;

    if (file) {
      return setDataState({ ...dataState, [name]: file[0] });
    }

    if (name === "value") {
      console.log(name);
      setDataState({ ...dataState, [name]: parseInt(value) });
    } else {
      setDataState({ ...dataState, [name]: value });
    }
  };

  async function updateItem() {
    console.log(id);
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

  return (
    <>
      <form onSubmit={handleSubmit}>
        {loading ? <Spinner /> : null}
        <div className='containerTitle'>
          <i className='fas fa-cash-register'></i>
          <h1 className='fw-normal'>Product registration</h1>
        </div>

        {/* category */}
        <div className='form-floating mb-3'>
          <input
            type='text'
            className='form-control'
            id='floatingInput'
            name='category'
            value={dataState.category}
            onChange={handleChange}
          />
          <label htmlFor='floatingInput'>Category</label>
        </div>

        {/* Title */}
        <div className='form-floating mb-3'>
          <input
            type='text'
            className='form-control'
            id='floatingInput'
            placeholder='Title'
            name='title'
            value={dataState.title}
            onChange={handleChange}
          />
          <label htmlFor='floatingInput'>Title</label>
        </div>

        {/* price */}
        <div className='form-floating mb-3'>
          <input
            type='number'
            className='form-control'
            id='floatingInput'
            placeholder='Price'
            name='value'
            value={dataState.value}
            onChange={handleChange}
          />
          <label htmlFor='floatingInput'>Price</label>
        </div>

        {/* select */}
        <div className='form-floating mb-3'>
          <select
            className='form-select'
            id='floatingSelect'
            aria-label='Floating label select example'
            name='unity'
            value={dataState.unity}
            onChange={handleChange}
          >
            <option selected>Select unit of measure</option>
            <option defaultValue='Kg'>Kg</option>
            <option defaultValue='Cento'>Cento</option>
            <option defaultValue='Unidade'>Unidade</option>
          </select>
          <label htmlFor='floatingSelect'>Select unit of measure</label>
        </div>

        {/* description */}
        <div className='form-floating mb-3'>
          <textarea
            className='form-control'
            placeholder='Leave a comment here'
            id='floatingTextarea'
            value={dataState.description}
            onChange={handleChange}
            name='description'
          ></textarea>
          <label htmlFor='floatingTextarea'>Description</label>
        </div>

        {/* arquivo */}
        <div className='mb-3'>
          <label htmlFor='validationCustom01' className='form-label'>
            Choose image file
          </label>
          <input
            className='form-control'
            type='file'
            name='pictureUrl'
            onChange={handleChange}
          />
        </div>

        <button className='w-100 btn btn-lg btn-primary' type='submit'>
          Save
        </button>
      </form>
    </>
  );
}
