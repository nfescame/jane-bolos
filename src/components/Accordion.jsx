import React, { useState } from "react";
import "../style/accordeon.css";
import Cards from "./Card";

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
                <p>{props.categories}</p>
              </button>
            </h2>

            {isOpen
              ? props.data.map((p, i) => {
                  if (p.category === props.categories) {
                    return <Cards key={i} list={p.product} />;
                  }
                })
              : null}
          </div>
        </div>
      </section>
    </>
  );
}
