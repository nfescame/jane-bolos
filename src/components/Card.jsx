import React from "react";
import { Link } from "react-router-dom";
import "../style/card.css";

export default function Cards(props) {
  const { list } = props;

  return (
    <div className='card'>
      <div className='imgBx'>
        <img src={list.pictureUrl} alt='img-item' />
        <ul className='action'>
          <li>
            <Link className='icon-link' to='#'>
              <i className='fa fa-heart' aria-hidden='true'></i>
              <span>Add to Wishlist</span>
            </Link>
          </li>
          <li>
            <Link className='icon-link' to={`/cart/${list._id}`}>
              <i className='fa fa-shopping-cart' aria-hidden='true'></i>
              <span>Add to Cart</span>
            </Link>
          </li>

          <li>
            <Link className='icon-link' to='#'>
              <i className='fa fa-eye' aria-hidden='true'></i>
              <span>View Details</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className='content' style={{ color: "black" }}>
        <div className='productName'>
          <h3>{list.title}</h3>
        </div>
        <div className='price-rating'>
          <h2>R$ {list.value},00</h2>
          <div className='rating'>
            <i className='yel fa fa-star' aria-hidden='true'></i>
            <i className='yel fa fa-star' aria-hidden='true'></i>
            <i className='yel fa fa-star' aria-hidden='true'></i>
            <i className='yel fa fa-star' aria-hidden='true'></i>
            <i className='yel fa fa-star' aria-hidden='true'></i>
          </div>
        </div>
      </div>
    </div>
  );
}
