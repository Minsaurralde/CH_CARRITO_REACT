import "./Item.css";
import { ItemCount } from "../card/ItemCount";

export const Item = ({
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
      <button>Ver detalle del producto</button>
      <ItemCount stock={5} inicial={1}/>
    </div>
  );
};