import "./ItemListContainer.css";
import React, { useState, useEffect } from "react";
import { ItemList } from "./ItemList";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export const ItemListContainer = ( props ) => {
  const [items, setItems] = useState();

  useEffect(() => {
    const getItems = async () => {
    const itemCollection = collection(db, "items");
    const fotoQuery = await getDocs(itemCollection);
    const data = fotoQuery.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setItems(data);
    };
    getItems();
  }, []);

  return(
    <div className="catalogo-container">
    {props.children}
    <h1>{props.greeting}</h1>
    <ItemList coleccion={items}/>
    </div>
  );
};