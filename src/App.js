import "./App.css";
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Home } from "./components/pages/home";
import { Detail } from "./components/pages/detail";
import { Category } from "./components/pages/category";
import { Error } from "./components/pages/error";
import { NavBar } from "./components/header/NavBar";

function App() {
  return (
    <div className="App">

      <Router>
        <header>
          <NavBar/>
        </header>    
        
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
              
          <Route path="/detail/:productId">
            <Detail/>
          </Route>

          <Route path="/category/:categoryId">
            <Category/>
          </Route>
          
          <Route path="*">
            <Error/>
          </Route> 
        </Switch>

        <footer></footer>
      </Router>
    </div>
  );
}

export default App;
