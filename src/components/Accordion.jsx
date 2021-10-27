import React from "react";
import Cards from "./Card";
import products from "../bcFake/bc.json";

export default function Accordion(props) {
  return (
    <>
      <section>
        <div className=' accordion' id='accordionPanelsStayOpenExample'>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='panelsStayOpen-headingOne'>
              <button
                className='accordion-button'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#panelsStayOpen-collapseOne'
                aria-expanded='true'
                aria-controls='panelsStayOpen-collapseOne'
              >
                {props.name}
              </button>
            </h2>
            <Cards products={products} />
          </div>
        </div>
      </section>
    </>
  );
}
