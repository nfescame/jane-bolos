import React from "react";
import "../../style/listAdm.css";
import api from "../../apis/api";
import { AuthContextData } from "../../providers/AuthData";

export default function ListAdm(props) {
  const dataProvider = React.useContext(AuthContextData);
  const { provider } = dataProvider;

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
          <button
            onClick={() => props.setIsOpen(props.isOpen ? false : true)}
            type='button'
          >
            voltar
          </button>
        </div>
        <ol className='list-group list-group-flush '>
          {provider.map((p, i) => {
            return (
              <li key={i} className='list-group-item list-products'>
                <div className='container-data-list'>
                  <p>Categoria: {p.category}</p>
                  <p>Titulo: {p.title}</p>
                  <p>Valor: R${p.value},00</p>

                  <div className='icon-read-detete col-md-12'>
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

                    <img
                      src={p.pictureUrl}
                      style={{ width: "6rem" }}
                      alt='img-item'
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
}
