import React from "react";
import { useHistory } from "react-router";

import "../../style/listAdm.css";

import api from "../../apis/api";
import { AuthContextData } from "../../providers/AuthData";

export default function ListAdm(props) {
  const dataProvider = React.useContext(AuthContextData);
  const { provider } = dataProvider;
  const history = useHistory();

  function goBack() {
    history.goBack();
  }

  async function deleteItem(event) {
    const id = await event;
    try {
      const result = await api.delete(`/products/delete/${id}`);
      console.log(result.data);
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <section className='sessao-list-adm '>
        <div className='container-btn'>
          <button onClick={goBack}>Voltar</button>
        </div>

        <ol className='list-group list-group-flush '>
          {provider.map((p, i) => {
            return (
              <li key={i} className='list-group-item list-products'>
                <div className='container-data-list'>
                  <div>
                    <p>Categoria: {p.category}</p>
                    <p>Titulo: {p.title}</p>
                    <p>Valor: R${p.value},00</p>
                  </div>

                  <div className='icon-read-detete'>
                    <div onClick={() => deleteItem(p._id)}>
                      <i className='fas fa-trash-alt'></i>
                    </div>

                    <div
                      onClick={() => {
                        props.setId(p._id);
                        props.setIsOpen(props.isOpen ? false : true);
                      }}
                    >
                      <i className='fas fa-pen-alt'></i>
                    </div>
                  </div>
                  <img
                    src={p.pictureUrl}
                    style={{ width: "6rem" }}
                    alt='img-item'
                  />
                </div>
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
}
