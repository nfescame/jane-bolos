import React from "react";
import { useHistory } from "react-router-dom";
import { ContextCart } from "../providers/AuthCart";

import "../style/cart.css";

export default function Cart() {
  const { cart } = React.useContext(ContextCart);
  const history = useHistory();

  return (
    <>
      <section className='container-details' style={{ paddingTop: "5rem" }}>
        <div onClick={() => history.goBack()} className='btn-back'>
          <i className='fa fa-chevron-left' aria-hidden='true'></i>
          <h5>Voltar</h5>
        </div>
        {cart.products.map((product, i) => {
          return (
            <div className='card mb-3 '>
              <div className='row g-0 container-img-info'>
                <div className='content-details'>
                  <div className='img-details'>
                    <img
                      src={product.pictureUrl}
                      className='img-fluid rounded-start'
                      alt='...'
                    />
                  </div>
                  <div className='card-body'>
                    <h5 className='card-title'>{product.title}</h5>
                    <p className='card-text'>
                      <small className='text-muted'>
                        R$ {product.value},00 kg
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
