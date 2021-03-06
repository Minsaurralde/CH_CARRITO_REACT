import "./App.css";
import React from "react";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Home } from "./components/pages/home";
import { Catalogo } from "./components/pages/catalogo";
import { Detail } from "./components/pages/detail";
import { Category } from "./components/pages/category";
import { Cart } from "./components/pages/cart";
import { Error } from "./components/pages/error";

import { CartProvider } from "./components/context/CartContext";

import { NavBar } from "./components/header/NavBar";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className="App">

      <CartProvider>
        
        <Router>
          <header>
            <NavBar/>
          </header>    
          
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>

            <Route path="/catalogo">
              <Catalogo/>
            </Route>
                
            <Route path="/detail/:productId">
              <Detail/>
            </Route>

            <Route path="/category/:categoryId">
              <Category/>
            </Route>

            <Route path="/cart">
              <Cart/>
            </Route>
            
            <Route path="*">
              <Error/>
            </Route> 
          </Switch>

          <footer>
            <Footer></Footer>
          </footer>

        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
