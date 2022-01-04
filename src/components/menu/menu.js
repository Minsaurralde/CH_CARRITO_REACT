import "./menu.css";

export const NavBar = () => {
  return(
    <header className="nav-container">
      <img src="" alt="logotipo" />
      <nav>
        <ul className="lista">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">categorias</a></li>
          <li><a href="#">Ingresar</a></li>
          <li><a href="#">Carrito</a></li>
        </ul>
      </nav>
    </header>
  );
};