import { useContext, useState } from "react";
import "./cart.css";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

import { db } from "../../firebase/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore"

export const Cart = () => {
  const { cart, removeItem, calcTotal, clear } = useContext(CartContext);

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

  const crearOrden = async() => {
    if ( buyer.name ==="" || buyer.phone ==="" || buyer.email==="" ){
      alert("UPS... No olvides completar la informacion del comprador!")
    } else {
      const date = Timestamp.fromDate(new Date());
      const total = calcTotal();
      
      const newOrder = await addDoc(collection(db, "orders"), { buyer, cart, date, total });
      alert(`se genero la orden id: ${newOrder.id}`);
      clear();
    }
  }

  return(
    cart.length ? 
    (<main className="formulario_main">
      <h1>FINALIZAR COMPRA</h1>
      <div className="formulario_cart">
        <form onChange={handleChange}>
          <label htmlFor="">Nombre y Apellido: <input type="text" name="name" placeholder="Juan Perez" required/></label>
          <label htmlFor="">Telefono de contacto: <input type="tel" name="phone" placeholder="(011)11223344" required/></label>
          <label htmlFor="">Correo: <input type="email" name="email" placeholder="juanperez@gmail.com" required/></label>
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
                <td onClick={() => removeItem(item.id)}>✖</td>
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
    </main>)
    :(<main>
        <h1>No hay nada en tu carrito!</h1>
        <Link to={`/`}>
          <button>Buscar productos</button>
        </Link>
      </main>)

  );
};