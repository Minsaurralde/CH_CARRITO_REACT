import "./ItemListContainer.css";
import { ItemList} from "../invocacionAPI/ItemList";

export const ItemListContainer = ( props ) => {

  return(
    <div className="catalogo-container">
    <h1>{props.greeting}</h1>
    {props.children}
    <ItemList/>
    </div>
  );
};