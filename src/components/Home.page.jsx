import React from "react";
import Header from "./Header";
import Categorie from "./Categories";
import Accordion from "./Accordion";
import NavBar from "./NavBar";

const categorias = ["Bolos", "Doces", "Decorações"];

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <Categorie categorias={categorias} />
      {categorias.map((categoria, index) => {
        return <Accordion key={`${index}&${categoria}`} name={categoria} />;
      })}
    </>
  );
}
