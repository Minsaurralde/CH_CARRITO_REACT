import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ItemDetail } from "../card/ItemDetail";

export const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const getProduct = async () => {
      try{
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const data = await response.json();
        setProduct(data); 
      } catch (error) {
        console.log(error);
      }  
    };
    getProduct();
  }, [productId]);

  return (
    <div className="section-detail">
      <Link to={`/`}>
        <button>Volver a catalogo</button>
      </Link>
      {product ? (
        <ItemDetail {...product} />
      ) : (
        <p>Cargando producto...</p>
      )}
    </div>
  );
}