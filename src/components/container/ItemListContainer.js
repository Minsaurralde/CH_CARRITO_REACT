import "./ItemListContainer.css";
import { ItemCount } from "../card/ItemCount";

export const ItemListContainer = ( props ) => {

  return(
    <div className="catalogo-container">
    <h1>{props.greeting}</h1>
    {props.children}
    <ItemCount stock={5} inicial={1}/>
    </div>
  );
};