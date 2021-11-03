import React, { useEffect, useState } from "react";
import { AuthContextData } from "../providers/AuthData";
import Header from "../components/Header";
import Categorie from "../components/Categories";
import Accordion from "../components/Accordion";

export default function Home() {
  const dataProvider = React.useContext(AuthContextData);

  const [data, setData] = useState([]);
  const categories = unique(data.map((i) => i.category));

  useEffect(() => {
    (async () => {
      try {
        setData(dataProvider.provider);
      } catch (err) {}
    })();
  }, [dataProvider]);

  function unique(arr) {
    return arr.filter((elem, pos, arr) => {
      return arr.indexOf(elem) === pos;
    });
  }

  return (
    <>
      <Header />
      <Categorie categorias={categories} />

      {categories.map((category, index) => {
        return <Accordion key={index} categories={category} data={data} />;
      })}
    </>
  );
}
