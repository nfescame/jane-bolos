import React, { useEffect, useState } from "react";
import { AuthContextRequest } from "../../providers/AuthRequest";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import api from "../../apis/api";

export default function Requests() {
  const dataProvider = React.useContext(AuthContextRequest);
  const [request, setRequest] = useState([]);
  const history = useHistory();

  function goBack() {
    history.goBack();
  }

  useEffect(() => {
    (async () => {
      try {
        setRequest(dataProvider.provider);
      } catch (err) {}
    })();
  }, [dataProvider]);

  async function deleteItem(event) {
    const id = await event;
    try {
      const result = await api.delete(`/request/delete/${id}`);
      console.log(result.data);
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className='container' style={{ paddingTop: "5rem" }}>
      <div className='container-btn'>
        <button onClick={goBack}>Voltar</button>
      </div>

      {request.map((req) => {
        return (
          <div
            key={req._id}
            className='card text-center '
            style={{
              width: "100%",
              color: "#000",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className='card-body'>
              <p>
                Feito:
                <input
                  className='form-check-input m-1'
                  type='checkbox'
                  defaultChecked={req.done}
                  aria-label='Checkbox for following text input'
                />
              </p>

              <h5 className='card-title'>{req.clientName}</h5>
              <p className='card-text'>{req._id}</p>
              <p className='card-text'>{req.totalValue}</p>

              <Link to={`/details/${req._id}`} className='btn btn-primary'>
                Detalhar pedido
              </Link>
              <div className=''>
                <div onClick={() => deleteItem(req._id)}>
                  <i className='fas fa-trash-alt'></i>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
