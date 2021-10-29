import React from "react";
import "../style/categories.css";
import { NavLink } from "react-router-dom";

export default function Categorie(props) {
  const { categorias } = props;
  return (
    <section id='section-categories'>
      <div className='container' style={{ position: "relative" }}>
        <ul className=' nav-pills nav-categorias'>
          {categorias.map((categoria, index) => {
            return (
              <li key={index} className='active'>
                <NavLink to='#'>{categoria}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
