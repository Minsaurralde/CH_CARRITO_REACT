import './Roadmap.css';
import { NavLink } from "react-router-dom";

export const Roadmap = ( props ) => {

  return (
    <span><NavLink to={props.ruta}> {props.texto} > </NavLink></span>
  );
};