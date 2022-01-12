import "./NavBar.css";
import { CartWidget } from "../icons/ShoppingCart"

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
          <li><a href="#">Ofertas</a></li>
          <li><a href="#">Ingresar</a></li>
          <li><a href="#">Mis compras</a></li>
          <li id="carrito"><CartWidget/></li>
        </ul>
      </nav>
    </div>
  );
};