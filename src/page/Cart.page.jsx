import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { ContextCart } from "../providers/AuthCart";

import "../style/cart.css";

export default function Cart() {
  const [valueTotal, setValueTotal] = useState(0);
  const { cart, setCart } = React.useContext(ContextCart);
  const history = useHistory();

  useEffect(() => {
    const total = cart.products.reduce(getTotal, 0);

    function getTotal(total, item) {
      return total + item.value * item.qtt;
    }
    setValueTotal(total);
  });

  const deleteItemCart = (id) => {
    const result = cart.products.filter(function (el) {
      return el._id !== id;
    });
    setCart({ products: result });
  };

  const addQtt = (id, op) => {
    for (let i = 0; i < cart.products.length; i++) {
      if (cart.products[i]._id === id) {
        if (op === "+") {
          cart.products[i].qtt += 1;
        } else {
          cart.products[i].qtt -= 1;
        }
        cart.products[i].valueQtt =
          cart.products[i].value * cart.products[i].qtt;
      }
    }
  };

  return (
    <>
      <section className='container-details' style={{ paddingTop: "5rem" }}>
        <div onClick={() => history.goBack()} className='btn-back'>
          <i className='fa fa-chevron-left' aria-hidden='true'></i>
          <h5>Voltar</h5>
        </div>
        {cart.products.map((product, i) => {
          return (
            <div key={i} className='card mb-3 '>
              <div className='row g-0 container-img-info'>
                <div className='content-details'>
                  <div className='img-details'>
                    <img
                      src={product.pictureUrl}
                      className='img-fluid rounded-start'
                      alt='...'
                    />
                  </div>
                  <div className='cart-body'>
                    <h5 className='cart-title'>{product.title}</h5>
                    <p className='cart-text'>
                      <small className='text-muted'>
                        R$ {product.valueQtt.toFixed(2)}
                      </small>
                    </p>
                    <div className='icon-read-detete '>
                      <Link to='#' className='container-add-qtt'>
                        <button onClick={() => addQtt(product._id, "-")}>
                          <i class='fas fa-chevron-down'></i>
                        </button>
                        <span>{product.qtt}</span>
                        <button onClick={() => addQtt(product._id, "+")}>
                          <i class='fas fa-chevron-up'></i>
                        </button>
                      </Link>
                      <div
                        className='icon'
                        name={product._id}
                        onClick={() => deleteItemCart(product._id)}
                      >
                        <i className='fas fa-trash-alt'></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className='container-valorTotal'>
          <h2>Valor Total </h2>
          <h2>R${valueTotal.toFixed(2)} </h2>
        </div>
      </section>
    </>
  );
}
