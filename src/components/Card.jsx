import React from "react";
import ButtonComponent from "./Button";
import "../style/card.css";

export default function Cards(props) {
  return (
    <div className='container-card'>
      return (
      <div className='card'>
        <div className='product-img'>
          <img src={props.list.pictureUrl} alt='' />
        </div>
        <div className='product-info' style={{ color: "black" }}>
          <h4>{props.list.title}</h4>
          <h4>{props.list.value}</h4>
        </div>
        <div className='container-btn'>
          <ButtonComponent text='Add ao carrinho' />
        </div>
      </div>
      );
    </div>
  );
}
