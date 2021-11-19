import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "../components/NavBar";
import Contact from "../page/Contact";
import Home from "../page/Home.page";
import Store from "../page/adm/Store.page";
import Cart from "../page/Cart.page";
import Details from "../page/Details.page";
import Signup from "../routeComponents/auth/Signup";
import AuthRouter from "../routeComponents/auth/AuthRouter";
import Requests from "../page/adm/requests";
import { AuthContextComponent } from "../contexts/authContext";
import { AuthDataProviders } from "../providers/AuthData.jsx";
import { AuthCartProviders } from "../providers/AuthCart.jsx";
import { AuthRequestProviders } from "../providers/AuthRequest";

function Router() {
  return (
    <BrowserRouter>
      <AuthContextComponent>
        <AuthDataProviders>
          <AuthCartProviders>
            <NavBar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/auth' component={AuthRouter} />
              <Route path='/signup' component={Signup} />
              <Route path='/store' component={Store} />
              <Route path='/cart' component={Cart} />
              <Route path='/contact' component={Contact} />
              <AuthRequestProviders>
                <Route path='/details/:id' component={Details} />
                <Route path='/request' component={Requests} />
              </AuthRequestProviders>
            </Switch>
          </AuthCartProviders>
        </AuthDataProviders>
      </AuthContextComponent>
    </BrowserRouter>
  );
}

export default Router;
