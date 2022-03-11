import "./Item.css";
import { Link } from "react-router-dom";

export const Item = ({
  id,
  image,
  price,
  title,
}) => {

  return (
    <div className="card-container">
      <div className="card">

        <div className="card-head">
          <div><img src={image} alt={title}/></div> 
        </div>

        <div className="card-body">
          <div className="product-desc">
            <h2 className="card-title">{title}</h2>
          </div>
          <div className="product-properties">
            <span className="card-price">
              <h4>Precio</h4>
              <p>US${price}</p>
            </span> 
          </div>
          <Link to={`/detail/${id}`}>
            <span className="card-flag">
              <b>Lo quiero!</b>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};