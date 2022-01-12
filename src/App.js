import "./App.css";
import { NavBar } from "./components/header/NavBar";
import { ItemListContainer } from "./components/container/ItemListContainer";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <main>
        <ItemListContainer greeting="Hola! soy la propiedad de bienvenida">
          <p>Soy un children p</p>
        </ItemListContainer>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
