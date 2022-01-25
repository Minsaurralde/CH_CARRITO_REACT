import { ItemListContainer } from "../container/ItemListContainer";

export const Home = () => {

  return(
    <main>
	    <ItemListContainer greeting="Hola! soy la propiedad de bienvenida">
	      <p>Soy un children p</p>
	    </ItemListContainer>
		</main>
  );
};