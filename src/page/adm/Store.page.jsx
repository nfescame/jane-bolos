import React from "react";
import { useHistory } from "react-router";

import FormProducts from "../../components/FormProducts";

import "../../style/store.css";
import "../../style/formProducts.css";

export default function Store() {
  const history = useHistory();

  function goBack() {
    history.goBack();
  }

  return (
    <main className='formProduct'>
      <div className='container-btn'>
        <button onClick={goBack}>
          Voltar <i className='fas fa-hand-point-left'></i>
        </button>
      </div>
      <FormProducts />
    </main>
  );
}
