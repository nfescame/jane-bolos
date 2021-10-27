import React from "react";
import "../style/categories.css";

export default function Categorie() {
  return (
    <section id='section-categories'>
      <div className='container' style={{ position: "relative" }}>
        <ul className=' nav-pills nav-categorias'>
          <li className='active'>
            <a href='#'>Bolos</a>
          </li>
          <li className='active'>
            <a href='#'>Doces</a>
          </li>
          <li className='active'>
            <a href='#'>Decorações</a>
          </li>
          <li className='active'>
            <a href='#'>Bebidas</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
