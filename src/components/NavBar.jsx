import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ContextCart } from "../providers/AuthCart";
import "../style/navbar.css";

export default function NavBar() {
  const { cart } = React.useContext(ContextCart);

  const [isOpen, SetIsOpen] = useState(false);
  return (
    <>
      <nav className='navbar navbar-dark bg-color-gradiente'>
        <div className='container-fluid'>
          <Link className='icon-nav ' to='/'>
            <i className='fas fa-birthday-cake'></i>
          </Link>

          <Link className='link' to='/cart' style={{ padding: ".5rem 1rem" }}>
            <i className='fa fa-shopping-cart' aria-hidden='true'></i>
            <span className='icon-cart-couter'> {cart.products.length}</span>
          </Link>

          <div className='contaner-cart-link'>
            <button
              className='navbar-toggler'
              type='button'
              onClick={() => {
                SetIsOpen(isOpen ? false : true);
              }}
            >
              <span className='navbar-toggler-icon'></span>
            </button>
          </div>

          {isOpen ? (
            <div className=' navbar-collapse' id='navbarNavAltMarkup'>
              <div className='navbar-nav container-link'>
                <Link onClick={() => SetIsOpen(false)} className='link' to='#'>
                  Contatos
                </Link>
                <Link onClick={() => SetIsOpen(false)} className='link' to='#'>
                  Album
                </Link>
                <Link
                  onClick={() => SetIsOpen(false)}
                  className='link'
                  to='/auth/login'
                >
                  Login ADM
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </nav>
    </>
  );
}
