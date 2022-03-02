import "./ItemList.css";
import { Item } from "../card/Item";
import { Spinner } from "../icons/Spinner";

export const ItemList = ({coleccion}) => {

  return (
    <div className="categoria-container">
      <section className="items">
        <div className="section-coleccion">
          {coleccion ? (
            coleccion.map((item) => <Item {...item} />)
          ) : (
            <Spinner/>
          )}
        </div>        
      </section>
    </div>
  );
}
