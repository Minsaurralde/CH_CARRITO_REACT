import { useContext, useState } from "react";
import "./cart.css";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export const Cart = () => {
  const {cart, removeItem} = useContext(CartContext);

  const calcTotal = () => {
    let nTotal = 0;
    cart.map((item) =>{
      let nSubtotal = item.cantidad * item.price;
      nTotal = nTotal + nSubtotal;
      }
    )
    return(nTotal.toFixed(2));
  }

  return(
    cart.length ? 
    (<main className="formulario_main">
      <h1>FINALIZAR COMPRA</h1>
      <div className="formulario_cart">
        <form>
          <label htmlFor="">Nombre y Apellido: <input type="text"/></label>
          <label htmlFor="">Telefono de contacto: <input type="phone"/></label>
          <label htmlFor="">Correo: <input type="E-mail"/></label>
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
        <button>Crear Orden</button>
      </div>
    </main>)
    :(<main>
        <h1>UPS! olvidaste agregar los productos al carrito</h1>
        <Link to={`/`}>
          <button>Ir a buscar productos</button>
        </Link>
      </main>)

  );
};