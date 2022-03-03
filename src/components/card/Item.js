import "./Item.css";
import { Link } from "react-router-dom";

export const Item = ({
  id,
  image,
  price,
  title,
}) => {

  return (
    <div class="card-container">
      <div class="card">

        <div class="card-head">
          <div><img src={image} alt={title}/></div> 
        </div>

        <div class="card-body">
          <div class="product-desc">
            <h2 class="card-title">{title}</h2>
          </div>
          <div class="product-properties">
            <span class="card-price">
              <h4>Precio</h4>
              <p>US${price}</p>
            </span> 
          </div>
          <Link to={`/detail/${id}`}>
              <span class="card-flag">
                <b>Lo quiero!</b>
              </span>
            </Link> 
        </div>
      </div>
    </div>
  );
};