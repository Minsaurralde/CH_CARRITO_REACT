import "./menu.css";

export const navMenu = () => {
  return(
    <header>
      <img src="" alt="logotipo" />
      <nav className="menu-container">
        <ul className="menu-lista">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">categorias</a></li>
          <li><a href="#">Ingresar</a></li>
          <li><a href="#">Carrito</a></li>
        </ul>
      </nav>
    </header>
  );
};