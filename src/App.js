import React from 'react';
import "./css/index.css";
import { Switch, Route } from "react-router-dom";
import Home from './components/Home.js';
import Sign from './components/Sign.js';
import Packagedfood from "./product/Packagedfood.js";
import BodyCare from "./product/BodyCare.js";
import Cart from "./components/Cart.js";
import Signup from "./components/Signup.js";
import { CartProvider, useCart } from 'react-use-cart';

import Contact from './components/Contact.js';

const App = () => {
  return (
    <>
      <CartProvider>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/sign" component={Sign}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/organicproduct/Packagedfood" component={Packagedfood}></Route>
          <Route exact path="/organicproduct/BodyCare" component={BodyCare}></Route>
          <Route exact path="/Cart" component={Cart}></Route>
          <Route exact path="/Signup" component={Signup}></Route>
        </Switch>
      </CartProvider>
    </>
  )
}

export default App;


