import "./ItemListContainer.css";
import React, { useState, useEffect } from "react";
import { ItemList} from "../invocacionAPI/ItemList";

export const ItemListContainer = ( props ) => {
  const [items, setItems] = useState();

  useEffect(() => {
    const getItems = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setItems(data);
    };
    getItems();
  }, []);

  return(
    <div className="catalogo-container">
    <h1>{props.greeting}</h1>
    {props.children}
    <ItemList coleccion={items}/>
    </div>
  );
};