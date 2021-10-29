import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "../components/Home.page";

const Router = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path={"/"} />
    </BrowserRouter>
  );
};

export default Router;
