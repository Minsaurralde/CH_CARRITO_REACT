import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";

export const ItemCategoryContainer = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState();

  useEffect(() => {
    const getCategory = async () => {
      try{
        const response = await fetch(`https://fakestoreapi.com/products/category/${categoryId}`);
        const data = await response.json();
        setCategory(data); 
      } catch (error) {
        console.log(error);
      }  
    };
    getCategory();
  }, [categoryId]);

  return (
    <div className="catalogo-container">
    <h1>Categoria</h1>
    <ItemList coleccion={category}/>
    </div>
  );
}