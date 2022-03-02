import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../card/ItemDetail";
import { Roadmap } from "../roadmap/Roadmap";
import { Spinner } from "../icons/Spinner";

import { getDoc, doc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [category, setCategory] = useState();

  useEffect(() => {
    const getProduct = async () => {
    const docRef = doc( collection(db, "items"), `${productId}` );
    const fotoQuery = await getDoc(docRef);
    const data = {
      id: fotoQuery.id,
      ...fotoQuery.data(),
    };
    setProduct(data);
    setCategory(data.category);
    };
    getProduct();
  }, [productId]);


  return (
    <div className="section-detail">
      <div className="rutaClente">
          <Roadmap ruta="/" texto="Inicio"></Roadmap>
          <Roadmap ruta="/catalogo" texto="Lista de productos"></Roadmap>
          <Roadmap ruta={`/category/${category}`} texto={category}></Roadmap>
       </div>
       <h1>Detale del producto</h1>
      {product ? (
        <ItemDetail {...product} />
      ) : (
        <Spinner/>
      )}
    </div>
  );
}