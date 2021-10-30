import React from "react";
import "../style/card.css";

export default function Cards(props) {
  return (
    <>
      {props.list.map((product, index) => {
        return (
          <div
            key={index}
            className='card mb-3 card-container'
            style={{ maxWidth: "540px" }}
          >
            <div className='row g-0  '>
              <div className='col-md-4'>
                <img
                  src={product.img}
                  className='img-fluid rounded-start img-card'
                  alt='cake'
                />
              </div>
              <div className='col-md-8'>
                <div className='card-body'>
                  <h5 className='card-title'>{product.title}</h5>
                  <p className='card-text'>{product.description}</p>
                  <p className='card-text'>
                    <small className='text-muted'>{product.value}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
