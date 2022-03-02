import "./Footer.css";
import { Facebook, Instagram, Twitter } from "../icons/Redes"
import { Link } from "react-router-dom";

import logotipo from '../header/logotipo.png';


export const Footer = () => {
  return(
    <div className="footer">
      <div className="nav-container">
        <Link to="/"><img src={logotipo} alt="logotipo" /></Link>
        <nav>
          <ul className="lista">
            <li><Link to="#"><Facebook/></Link></li>
            <li><Link to="#"><Instagram/></Link></li>
            <li><Link to="#"><Twitter/></Link></li>
          </ul>
        </nav>
      </div>
      <div className="copyright">
        <p>Diseñado por Mariela Insaurralde | Copyright © 2022</p>
      </div>   
    </div>
  );
};