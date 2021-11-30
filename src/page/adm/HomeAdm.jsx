import React from "react";
import { useHistory } from "react-router";
import "../../style/homeAdm.css";

export default function HomeAdm() {
  const history = useHistory();

  function rotas(rota) {
    history.push(rota);
  }
  return (
    <div className='containerButtonHomeAdm'>
      <div className='containerButtonForm'>
        <button
          className=' btn btn-lg '
          type='submit'
          onClick={() => rotas("/store/0")}
        >
          Register
        </button>

        <button
          className=' btn btn-lg '
          type='submit'
          onClick={() => rotas("/edit")}
        >
          Edit
        </button>

        <button
          className=' btn btn-lg'
          type='submit'
          onClick={() => rotas("/request")}
        >
          Request
        </button>
      </div>
    </div>
  );
}
