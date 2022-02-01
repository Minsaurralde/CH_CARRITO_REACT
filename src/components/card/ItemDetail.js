import "./ItemDetail.css";
import { ItemCount } from "./ItemCount";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export const ItemDetail = (product) => {
  const {addItem} = useContext(CartContext);

  const [quantity, setQuantity] = useState(0);
  const [showButton, setShowButton] = useState(true);

  function onAdd(cantidad){
    setQuantity(cantidad);
    setShowButton(false);
    alert(`Agregaste ${cantidad} items al carrito \nPresioná Finalizar compra para terminar`);
  }

  return (    
    <div className="producto">
      <div className="caja-izquierda">
        <img className="imagen" src={product.image} alt="product image" />
        {showButton?(<ItemCount stock={5} inicial={1} funcion={onAdd}/>)
        :(<Link to={`/cart`}>
            <button onClick={()=>addItem(product, quantity)}>Finalizar compra</button>
          </Link>)} 
      </div>

      <div className="caja-derecha">

        <div className="seccion">
          <h2 className="titulo">{product.title}</h2>
          <span className="datos">
            <p className="precio">US${product.price}</p>
            <p className="raiting">{product.rating.rate}</p>
          </span>
        </div>

        <div className="seccion">
          <p className="condiciones">3 cuotas sin interes de US${Math.floor(product.price/3)} con tarjetas seleccionadas</p>
          <p className="condiciones">6 cuotas sin interes de US${Math.floor(product.price/6)} con tarjetas seleccionadas</p>
        </div>

        <div className="seccion">
          <h2 className="titulo">Descripcion del producto</h2>
          <p className="descripcion">{product.description}</p>
          <p className="categoria">Categoria: {product.category}</p>
        </div>
      </div>      
    </div>
  );
};