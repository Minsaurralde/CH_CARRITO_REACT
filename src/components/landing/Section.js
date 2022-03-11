import "./Section.css";
import { Link } from "react-router-dom";

export const Section = ( props ) => {

  return(
    <Link to={props.link}>
      <div className="category-card">
        <img src={props.imagen} alt={props.title} />
        <div className="title">
          <div>
            <h2>Categoria</h2>
            <h4>{props.title}</h4>
          </div>
        </div>
        <figcaption>
          <p>{props.descripcion}</p>
        </figcaption>
      </div>
    </Link>
  );
};