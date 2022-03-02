import { ItemListContainer } from "../container/ItemListContainer";
import { Roadmap } from "../roadmap/Roadmap";

export const Catalogo = () => {

  return(
    <main>
	    <ItemListContainer greeting="Tenemos los mejores precios para vos!">
	    	<div className="rutaClente">
			    <Roadmap ruta="/" texto="Volver al inicio"></Roadmap>
			  </div>
	    </ItemListContainer>
		</main>
  );
};