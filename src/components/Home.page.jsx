import React from "react";
import Header from "./Header";
import Categorie from "./Categories";
import Accordion from "./Accordion";
import NavBar from "./NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <Categorie />
      <Accordion name={"Bolos"} />
      <Accordion name={"Doces"} />
      <Accordion name={"Decorações"} />
      <Accordion name={"Bedidas"} />
    </>
  );
}
