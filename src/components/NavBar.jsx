import React, { useState } from "react";

import Modal from "./Modal.jsx";
import "../style/navbar.css";

export default function NavBar() {
  const [isOpen, SetIsOpen] = useState(false);
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-color-gradiente'>
        <div className='container-fluid'>
          <h4>Jane Doces</h4>

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
              <div className='navbar-nav'>
                <p>Contatos</p>
                <p>Album</p>
              </div>
            </div>
          ) : null}
        </div>
      </nav>
      <Modal />
    </>
  );
}
