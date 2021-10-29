import React, { useState } from "react";
import "../style/accordeon.css";
import Cards from "./Card";
import products from "../bcFake/bc.json";

export default function Accordion(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section>
        <div className=' accordion' id='accordionPanelsStayOpenExample'>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='panelsStayOpen-headingOne'>
              <button
                className='accordion-button btn-accordeon'
                type='button'
                onClick={() => {
                  setIsOpen(isOpen ? false : true);
                }}
              >
                <p>{props.name}</p>
              </button>
            </h2>
            {isOpen ? <Cards products={products} /> : null}
          </div>
        </div>
      </section>
    </>
  );
}
