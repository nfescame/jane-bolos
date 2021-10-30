import React from "react";
import "../style/store.css";
import ButtonComponent from "../components/Button";

export default function Store() {
  return (
    <>
      <form
        className='row g-0 needs-validation container-form'
        novalidate
        style={{ paddingTop: "5rem" }}
      >
        <div className='col-md-4'>
          <label for='validationCustom01' className='form-label'>
            Titulo do produto
          </label>
          <input type='text' className='form-control' value='Mark' required />
        </div>

        <div className='col-md-4'>
          <label for='validationCustom01' className='form-label'>
            Valor
          </label>
          <input type='number' className='form-control' min='1' required />
        </div>

        <div className='col-md-4'>
          <label for='validationCustom01' className='form-label'>
            Imagem
          </label>
          <input type='text' className='form-control' value='Mark' required />
        </div>

        <div className='col-md-4'>
          <label for='validationCustom01' className='form-label'>
            Descrição do produto
          </label>
          <textarea
            type='text'
            className='form-control'
            value='Mark'
            required
          />
        </div>

        <div className='container-btn'>
          <ButtonComponent text='Salvar' />
        </div>
      </form>
    </>
  );
}
