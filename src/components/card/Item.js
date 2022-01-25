import "./Item.css";
import { Link } from "react-router-dom";

export const Item = ({
  id,
  image,
  price,
  title,
}) => {

  return (
    <div className="product">
      <h2 className="title">{title}</h2>  
      <img className="image" src={image} alt="product image" />
      <span className="data">
        <p className="price">US${price}</p>
      </span>
      <Link to={`/detail/${id}`}>
        <button>Ver Detalle del producto</button>
      </Link>
    </div>
  );
};