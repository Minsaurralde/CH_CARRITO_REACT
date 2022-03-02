import "./Paymentgroup.css";
import { Credito, Debito, Mercadopago, Efectivo } from "../icons/Payment"

export const Paymentgroup = () => {

  return(
    <div className="payment-container">
      <div className="payment-data">
        <div className="data">
            <div><Credito/></div>
            <h2>Tarjeta de credito</h2>          
        </div>

        <div className="data">
          <div><Debito/></div>
          <h2>Tarjeta de debito</h2>
        </div>

        <div className="data">
          <div><Mercadopago/></div>
          <h2>Mercado pago</h2>
        </div>

        <div className="data">
          <div><Efectivo/></div>
          <h2>Efectivo</h2>
        </div>

      </div>   
		</div>
  );
};