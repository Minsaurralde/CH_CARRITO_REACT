import { useContext, useState } from "react";
import "./cart.css";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { ModalContainer } from "../container/ModalContainer";

import { db, batch, commitear} from "../../firebase/firebase";
import { collection, doc, addDoc, Timestamp } from "firebase/firestore"

export const Cart = () => {
  const { cart, removeItem, calcTotal, clear, order, setOrder } = useContext(CartContext);

  const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    email: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    const newValues = {
      ...buyer,
      [name]: value,
    };
    setBuyer(newValues);
  }
  
  function close(){
    const modal = document.getElementById("modal");
    modal.style.display = "none";
    clear();
  }

  const crearOrden = async() => {
    const formulario = document.forms["formCheckout"];
    const validacion = formulario.checkValidity();

    if ( validacion === false ){
      formulario.reportValidity();
    } else {
      const date = Timestamp.fromDate(new Date());
      const total = calcTotal();
      
      const newOrder = await addDoc(collection(db, "orders"), { buyer, cart, date, total, status: "Iniciado" });

      try{
          cart.map((item) => {
            const docRef = doc( collection(db, "items"), `${item.id}` );
            batch.update(docRef, { stock : item.stock - item.cantidad });
            });

          const docRef2 = doc( collection(db, "orders"), `${newOrder.id}` );
          batch.update(docRef2, { status: "Exito" });

          // await batch.commit();
          commitear();
          setOrder(newOrder.id);
          const modal = document.getElementById("modal");
          modal.style.display = "flex";
          // clear();
      } catch(error) { console.log(error); }          
    }
  }

  return(
    cart.length ? 
    (<main className="formulario_main">
      <div className="formulario_container">
        <h1>FINALIZAR COMPRA</h1>
        <div className="formulario_cart columns">
          <form name="formCheckout" onChange={handleChange}>
            <label>
              <p>Nombre y Apellido: </p>
              <input type="text" pattern="[a-z/A-Z/\s]{4,50}" name="name" placeholder="Juan Perez" required/>
              <span/>
            </label>
            <label>
              <p>Telefono de contacto: </p>
              <input type="tel" minlength="10" inputmode="numeric" name="phone" placeholder="(011)4233-3455" required/>
              <span/>
            </label>
            <label>
              <p>Correo: </p>
              <input type="email" name="email" placeholder="juanperez@gmail.com" required/>
              <span/>
            </label>
          </form>
          <table>
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) =>
                <tr>
                  <td><img src={item.image} alt="" width="50px"></img></td>
                  <td>{item.title}</td>
                  <td>US${item.price}</td>
                  <td>{item.cantidad}</td>
                  <td>US${(item.cantidad * item.price).toFixed(2)}</td>
                  <td className="remove" onClick={() => removeItem(item.id)}>✖</td>
                </tr>
                )
              }
            </tbody>
            <tfoot>
              <tr>
                <th colSpan="6">TOTAL COMPRA: US$ {calcTotal()}</th>
              </tr>
            </tfoot>
          </table>   
        </div>
        <div className="button_section">
          <Link to={`/`}>
            <button>Seguir comprando</button>
          </Link>
          <button onClick={crearOrden}>Crear Orden</button>
        </div>
      </div>
      <ModalContainer title="Gracias por tu compra!" info={`Tu pedido se genero con el id: ${order}`} cta={close} />
    </main>)
    :(<main>
        <h1>No hay nada en tu carrito!</h1>
        <Link to={`/`}>
          <button>Buscar productos</button>
        </Link>
      </main>)

  );
};