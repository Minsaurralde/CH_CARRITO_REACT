import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookSquare, faTwitter } from '@fortawesome/free-brands-svg-icons'

import { Link} from "react-router-dom";

export const Instagram = () => {
  return(
     <Link to="#"><FontAwesomeIcon icon={faInstagram} /></Link>
  );
};
export const Facebook = () => {
  return(
     <Link to="#"><FontAwesomeIcon icon={faFacebookSquare} /></Link>
  );
};
export const Twitter = () => {
  return(
     <Link to="#"><FontAwesomeIcon icon={faTwitter} /></Link>
  );
};