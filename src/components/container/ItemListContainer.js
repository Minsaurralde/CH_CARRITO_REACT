import "./ItemListContainer.css";
import { ItemCount } from "../card/ItemCount";
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