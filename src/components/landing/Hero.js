import "./Hero.css";
import { Link } from "react-router-dom";
import friday_sale from "../../img/friday_sale.jpg";

export const Hero = () => {

  return(
    <div className="hero">
    <img src={friday_sale} alt=""/>
    <Link to="/catalogo">
      <button>Ver ofertas</button>
    </Link> 
		</div>
  );
};