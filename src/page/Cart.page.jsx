import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { ContextCart } from "../providers/AuthCart";
import api from "../apis/api";
import Button from "../components/Button";
import "../style/cart.css";

export default function Cart() {
  const [request, setRequest] = useState({
    products: [
      {
        id: "",
        qtt: 0,
      },
    ],
    totalValue: 0,
    clientName: "",
  });
  const [currentClielt, setCurrentClient] = useState("");
  const [valueTotal, setValueTotal] = useState(0);
  const { cart, setCart } = React.useContext(ContextCart);
  const history = useHistory();

  useEffect(() => {
    const total = cart.products.reduce(getTotal, 0);

    function getTotal(total, item) {
      return total + item.value * item.qtt;
    }
    setValueTotal(total);
  }, [setValueTotal]);

  const deleteItemCart = (id) => {
    const result = cart.products.filter(function (el) {
      return el._id !== id;
    });
    setCart({ products: result });
  };

  const updateValueTotal = () => {
    const total = cart.products.reduce(getTotal, 0);

    function getTotal(total, item) {
      return total + item.value * item.qtt;
    }
    setValueTotal(total);
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
    updateValueTotal();
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const productsRequest = [];
    if (setCurrentClient) {
      // eslint-disable-next-line array-callback-return
      cart.products.map((product) => {
        productsRequest.push({ id: product._id, qtt: product.qtt });
        return product;
      });

      setRequest(
        (request.products = productsRequest),
        (request.clientName = currentClielt),
        (request.totalValue = valueTotal)
      );
      try {
        const response = await api.post("/request", {
          ...request,
        });
        gotowhatsapp(response);
        console.log(response);
      } catch (err) {
        console.error(err);
      }
    }
  }
  function gotowhatsapp(pedido) {
    const name = currentClielt;
    const valorDoPedido = valueTotal;
    const idPedido = pedido.data._id;

    const url =
      "https://wa.me/5511991833956?text=" +
      "Name: " +
      name +
      "%0a" +
      "Valor: " +
      valorDoPedido +
      "%0a" +
      "Id do pedido:" +
      idPedido;

    window.open(url, "_blank").focus();
  }

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
                          <i className='fas fa-chevron-down'></i>
                        </button>
                        <span>
                          {product.qtt} {product.unity}
                        </span>
                        <button onClick={() => addQtt(product._id, "+")}>
                          <i className='fas fa-chevron-up'></i>
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

        <div className='container-form'>
          <form className='col-md-4 button-submit'>
            <label htmlFor='validationCustom01'>Digite seu nome</label>
            <input
              value={currentClielt}
              type='text'
              onChange={(e) => setCurrentClient(e.target.value)}
              required
            />
            <Button text={"enviar"} handleSubmit={handleSubmit}></Button>
          </form>
        </div>
      </section>
    </>
  );
}
