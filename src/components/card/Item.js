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
      <div className="image"><img src={image} alt={title} /></div>
      <div>
         <span className="data">
          <p className="price">US${price}</p>
        </span>
        <Link to={`/detail/${id}`}>
          <button>Ver detalle</button>
        </Link> 
      </div>
    </div>
  );
};