import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import api from "../apis/api";

import "../style/cart.css";

export default function Cart() {
  const history = useHistory();
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  useEffect(() => {
    if (id !== 0) {
      async function getById() {
        try {
          const result = await api.get(`/products/filter/${id}`);
          setDetail(result.data);
        } catch (err) {
          console.log(err);
        }
      }
      getById();
    }
    return () => {};
  }, [id]);
  return (
    <>
      <section className='container-details' style={{ paddingTop: "5rem" }}>
        <div className='card mb-3 '>
          <div className='row g-0 container-img-info'>
            <div className='content-details'>
              <div className='img-details'>
                <img
                  src={detail.pictureUrl}
                  className='img-fluid rounded-start'
                  alt='...'
                />
              </div>
              <div className='card-body'>
                <h5 className='card-title'>{detail.title}</h5>
                <p className='card-text'>{detail.description}</p>
                <p className='card-text'>
                  <small className='text-muted'>R$ {detail.value},00 kg</small>
                </p>
                <div onClick={() => history.goBack()}>
                  <i className='fa fa-chevron-left' aria-hidden='true'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
