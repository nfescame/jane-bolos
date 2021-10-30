import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "../components/NavBar";
import Home from "../components/Home.page";
import Store from "../adm/Store.page";

import AuthRouter from "../routeComponents/auth/AuthRouter";
import { AuthContextComponent } from "../contexts/authContext";
// import PrivateRoute from "../routeComponents/auth/PrivateRoute";

function Router() {
  return (
    <BrowserRouter>
      <AuthContextComponent>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/auth' component={AuthRouter} />
          <Route path='/store' component={Store} />
        </Switch>
      </AuthContextComponent>
    </BrowserRouter>
  );
}

export default Router;
