import "./ItemDetail.css";
import { ItemCount } from "./ItemCount";
import { ModalContainer } from "../container/ModalContainer";
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
    <div className="detail-container">
      <div className="caja-container row">

        <div className="caja-izquierda columns">                              
          <div className="image">
              <img src={product.image} alt={product.title} />
          </div>
        </div>

        <div className="caja-derecha columns">

          <div className="seccion columns flex-grow left-text">
            <h2 className="product-title">{product.title}</h2>
            <div className="product-description">
                <span>{product.description}</span>
            </div>             
          </div>

          <div className="seccion columns">
            <div className="row flex-center">
              <div className="product-price">
                  <span>US${product.price}</span>
              </div>

              <div className="product-rating">
                  <span className="avarage">★ {product.rating.rate}</span>
                  <span className="reviews">{product.rating.count} reviews</span>
              </div>                                
            </div>

            {showButton?(<ItemCount enstock={product.stock} stock={5} inicial={1} funcion={onAdd}/>)
            :(<div className="seccion row flex-center">
                <Link to={`/catalogo`}>
                  <button>Seguir comprando</button>
                </Link>
                <Link to={`/cart`}>
                  <button>Finalizar compra</button>
                </Link>
            </div>)}
          </div>

          <div className="seccion columns">
              <p className="condiciones">3 cuotas sin interes de US${Math.floor(product.price/3)} con tarjetas seleccionadas</p>
              <p className="condiciones">6 cuotas sin interes de US${Math.floor(product.price/6)} con tarjetas seleccionadas</p>
          </div>
        </div>
      </div>
    </div>  

  );
};