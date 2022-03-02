import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import { Roadmap } from "../roadmap/Roadmap";

import { query, where, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export const ItemCategoryContainer = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState();

  useEffect(() => {
    const getCategory = async () => {
    const itemCollection = collection(db, "items");
    const filtro = query( itemCollection, where("category", "==", `${categoryId}`) );
    const fotoQuery = await getDocs(filtro);
    const data = fotoQuery.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setCategory(data);
    };
    getCategory();
  }, [categoryId]);

  return (
    <div className="catalogo-container">
    <div className="rutaClente">
        <Roadmap ruta="/" texto="Inicio"></Roadmap>
        <Roadmap ruta="/catalogo" texto="Lista de productos"></Roadmap>
     </div>
     <h1>Seccion {categoryId}</h1>

    <ItemList coleccion={category}/>
    </div>
  );
}