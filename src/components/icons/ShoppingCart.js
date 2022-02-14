import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link} from "react-router-dom";

export const CartWidget = () => {
  const {cart} = useContext(CartContext);

  const contItems = () => {
    let nTotal = 0;
    cart.map((item) =>{
      let nSubtotal = item.cantidad;
      nTotal = nTotal + nSubtotal;
      }
    )
    return(nTotal);
  }

  return(
      cart.length ?
        (<div>
            <span>{contItems()}</span>
            <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart}/></Link>
          </div>    
        )
        :(<div><Link to="/cart"><FontAwesomeIcon icon={faShoppingCart}/></Link></div>)
  );
};