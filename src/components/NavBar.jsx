import React, { useState } from "react";
import { Link } from "react-router-dom";

import Modal from "./Modal.jsx";
import "../style/navbar.css";

export default function NavBar() {
  const [isOpen, SetIsOpen] = useState(false);
  return (
    <>
      <nav className='navbar navbar-dark bg-color-gradiente'>
        <div className='container-fluid'>
          <Link className='icon-nav ' to='/'>
            <i className='fas fa-birthday-cake'></i>
          </Link>

          <button
            className='navbar-toggler'
            type='button'
            onClick={() => {
              SetIsOpen(isOpen ? false : true);
            }}
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          {isOpen ? (
            <div className=' navbar-collapse' id='navbarNavAltMarkup'>
              <div className='navbar-nav container-link'>
                <Link className='link' to='#'>
                  Contatos
                </Link>
                <Link className='link' to='#'>
                  Album
                </Link>
                <Link className='link' to='/auth/login'>
                  Login ADM
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </nav>
      <Modal />
    </>
  );
}
