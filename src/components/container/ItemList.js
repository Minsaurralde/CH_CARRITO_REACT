import "./ItemList.css";
import { Item } from "../card/Item";

export const ItemList = ({coleccion}) => {

  return (
    <div className="categoria-container">
      <section className="items">
        <h1 className="titleSection">Lista de items</h1>
        <div className="section-coleccion">
          {coleccion ? (
            coleccion.map((item) => <Item {...item} />)
          ) : (
            <p>Cargando items...</p>
          )}
        </div>        
      </section>
    </div>
  );
}
