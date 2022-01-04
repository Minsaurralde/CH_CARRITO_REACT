import "./menu.css";

export const NavBar = () => {
  return(
    <div className="nav-container">
      <img src="" alt="logotipo" />
      <nav>
        <ul className="lista">
          <li><a href="#">Categorias</a>
              <ul className="desplegable">
                <li><a href="#">Planes</a></li>
                <li><a href="#">Internet</a></li>
                <li><a href="#">Equipos</a></li>
              </ul>
          </li>
          <li><a href="#">Ofertas</a></li>
          <li><a href="#">Ingresar</a></li>
          <li><a href="#">Mis compras</a></li>
        </ul>
      </nav>
    </div>
  );
};