import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faHandHoldingUsd, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faCcVisa } from '@fortawesome/free-brands-svg-icons'

export const Credito = () => {
  return(
     <FontAwesomeIcon icon={faCcVisa} />
  );
};
export const Debito = () => {
  return(
     <FontAwesomeIcon icon={faCreditCard} />
  );
};
export const Mercadopago = () => {
  return(
     <FontAwesomeIcon icon={faHandHoldingUsd} />
  );
};
export const Efectivo = () => {
  return(
     <FontAwesomeIcon icon={faDollarSign} />
  );
};