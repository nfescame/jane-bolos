import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "../components/NavBar";
import Home from "../page/Home.page";
import Store from "../page/adm/Store.page";
import Cart from "../page/Cart";
import Details from "../page/Details";

import AuthRouter from "../routeComponents/auth/AuthRouter";
import { AuthContextComponent } from "../contexts/authContext";
import { AuthDataProviders } from "../providers/AuthData.jsx";

function Router() {
  return (
    <BrowserRouter>
      <AuthContextComponent>
        <AuthDataProviders>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/auth' component={AuthRouter} />
            <Route path='/store' component={Store} />
            <Route path='/cart/:id' component={Cart} />
            <Route path='/details' component={Details} />
          </Switch>
        </AuthDataProviders>
      </AuthContextComponent>
    </BrowserRouter>
  );
}

export default Router;
