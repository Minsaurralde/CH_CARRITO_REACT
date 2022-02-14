import "./NavBar.css";
import { CartWidget } from "../icons/ShoppingCart"
import { Link, NavLink } from "react-router-dom";

import logotipo from './logotipo.png';


export const NavBar = () => {
  return(
    <div className="nav-container">
      <Link to="/"><img src={logotipo} alt="logotipo" /></Link>
      <nav>
        <ul className="lista">
          <li className="hover"><a href="#">Categorias</a>
              <ul className="desplegable">
                <li><NavLink to="/category/jewelery">Joyeria</NavLink></li>
                <li><NavLink to="/category/women's clothing">Mujer</NavLink></li>
                <li><NavLink to="/category/men's clothing">Hombre</NavLink></li>
                <li><NavLink to="/category/electronics">Electronica</NavLink></li>
              </ul>
          </li>
          <li className="hover"><NavLink to="/">Ver catalogo</NavLink></li>
          <li id="carrito"><CartWidget/></li>
        </ul>
      </nav>
    </div>
  );
};