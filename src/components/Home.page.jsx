import React, { useEffect, useState } from "react";

import Header from "./Header";
import Categorie from "./Categories";
import Accordion from "./Accordion";
// import products from "../data/bc.json";
import api from "../apis/api";

export default function Home() {
  const [data, setData] = useState([]);
  const categories = unique(data.map((i) => i.category));

  useEffect(() => {
    (async () => {
      try {
        const result = await api.get("products");
        setData(result.data.result);
      } catch (err) {}
    })();

    return () => {};
  }, []);

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
