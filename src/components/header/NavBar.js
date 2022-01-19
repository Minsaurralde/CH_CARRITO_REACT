import "./NavBar.css";
import { CartWidget } from "../icons/ShoppingCart"
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return(
    <div className="nav-container">
      <img src="" alt="logotipo" />
      <nav>
        <ul className="lista">
          <li><a href="#">Categorias</a>
              <ul className="desplegable">
                <li><a href="#">Categoria1</a></li>
                <li><a href="#">Categoria2</a></li>
                <li><a href="#">Categoria3</a></li>
              </ul>
          </li>
          <li><NavLink to="/"><a href="#">Ver catalogo</a></NavLink></li>
          <li id="carrito"><CartWidget/></li>
        </ul>
      </nav>
    </div>
  );
};