import React, { useState, useEffect } from "react";
import "./ItemList.css";
import { Item } from "./Item";

export const ItemList = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    const getItems = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setItems(data);
    };
    getItems();
  }, []);

  return (
    <div className="categoria-container">
      <section className="items">
        <h1 className="titleSection">Lista de items</h1>
        <div className="section-coleccion">
          {items ? (
            items.map((item) => <Item {...item} />)
          ) : (
            <p>Cargando items...</p>
          )}
        </div>        
      </section>
    </div>
  );
}
