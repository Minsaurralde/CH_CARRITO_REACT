import "./ItemDetail.css";
import { ItemCount } from "../card/ItemCount";

export const ItemDetail = ({
  id,
  category,
  description,
  image,
  price,
  rating,
  title,
}) => {
  return (    
    <div className="producto">
      <div className="caja-izquierda">
        <img className="imagen" src={image} alt="product image" />
        <ItemCount stock={5} inicial={1}/>
      </div>

      <div className="caja-derecha">

        <div className="seccion">
          <h2 className="titulo">{title}</h2>
          <span className="datos">
            <p className="precio">US${price}</p>
            <p className="raiting">{rating.rate}</p>
          </span>
        </div>

        <div className="seccion">
          <p className="condiciones">3 cuotas sin interes de US${Math.floor(price/3)} con tarjetas seleccionadas</p>
          <p className="condiciones">6 cuotas sin interes de US${Math.floor(price/6)} con tarjetas seleccionadas</p>
        </div>

        <div className="seccion">
          <h2 className="titulo">Descripcion del producto</h2>
          <p className="descripcion">{description}</p>
          <p className="categoria">Categoria: {category}</p>
        </div>
      </div>      
    </div>
  );
};