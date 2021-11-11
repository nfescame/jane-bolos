/* eslint-disable array-callback-return */
import React, { useState } from "react";
import "../style/accordion.css";
import "../style/card.css";
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
                className='btn-accordion'
                type='button'
                onClick={() => {
                  setIsOpen(isOpen ? false : true);
                }}
              >
                <p>{props.categories}</p>
              </button>
            </h2>

            {isOpen ? (
              <div className='main-card'>
                <div className='body'>
                  <div className='container-card'>
                    {props.data.map((p, i) => {
                      if (p.category === props.categories) {
                        return <Cards key={i} list={p} />;
                      }
                    })}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
