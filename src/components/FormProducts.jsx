import React, { useState } from "react";

import "../style/formProducts.css";

export default function FormProducts(props) {
  return (
    <>
      <form>
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
            placeholder='Category'
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
          />
          <label htmlFor='floatingInput'>Title</label>
        </div>

        {/* price */}
        <div className='form-floating mb-3'>
          <input
            type='text'
            className='form-control'
            id='floatingInput'
            placeholder='Price'
          />
          <label htmlFor='floatingInput'>Price</label>
        </div>

        {/* select */}
        <div className='form-floating mb-3'>
          <select
            className='form-select'
            id='floatingSelect'
            aria-label='Floating label select example'
          >
            <option selected>Select unit of measure</option>
            <option value='1'>Kg</option>
            <option value='2'>Cento</option>
            <option value='3'>Unidade</option>
          </select>
          <label htmlFor='floatingSelect'>Select unit of measure</label>
        </div>

        {/* description */}
        <div className='form-floating mb-3'>
          <textarea
            className='form-control'
            placeholder='Leave a comment here'
            id='floatingTextarea'
          ></textarea>
          <label htmlFor='floatingTextarea'>Description</label>
        </div>

        {/* arquivo */}
        <div className='mb-3'>
          <label htmlFor='formFile' className='form-label'>
            Choose image file
          </label>
          <input className='form-control' type='file' id='formFile' />
        </div>

        <button className='w-100 btn btn-lg btn-primary' type='submit'>
          Save
        </button>
      </form>
    </>
  );
}
