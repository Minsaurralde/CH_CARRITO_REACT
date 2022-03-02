import "./ItemDetail.css";
import { ItemCount } from "./ItemCount";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export const ItemDetail = (product) => {
  const {addItem} = useContext(CartContext);
  
  const [showButton, setShowButton] = useState(true);

  function onAdd(cantidad){
    setShowButton(false);
    addItem(product, cantidad);
    alert(`Agregaste ${cantidad} items al carrito \nPresioná Finalizar compra para terminar`);
  }

  return (    
    <div className="producto">
      <div className="caja-izquierda">
        <div className="imagen">
          <img src={product.image} alt={product.title} />
        </div>
        {product.stock > 0 ?(<span className="enstock">En Stock</span>)
        :(<span className="sinstock">Sin Stock</span>)}
      </div>

      <div className="caja-derecha">

        <div className="seccion">
          <h2 className="titulo">{product.title}</h2>
          <span className="datos">
            <p className="precio">US${product.price}</p>
            <p className="raiting">{product.rating.rate}</p>
          </span>
        </div>
        {showButton?(<ItemCount enstock={product.stock} stock={5} inicial={1} funcion={onAdd}/>)
        :(<Link to={`/cart`}>
            <button>Finalizar compra</button>
          </Link>)}

        <div className="seccion">
          <p className="condiciones">3 cuotas sin interes de US${Math.floor(product.price/3)} con tarjetas seleccionadas</p>
          <p className="condiciones">6 cuotas sin interes de US${Math.floor(product.price/6)} con tarjetas seleccionadas</p>
        </div>

        <div className="seccion">
          <h2 className="titulo">Descripcion del producto</h2>
          <p className="descripcion">{product.description}</p>
        </div>
      </div>      
    </div>
  );
};