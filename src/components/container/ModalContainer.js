import "./ModalContainer.css";

export const ModalContainer = ( props ) => {

  return(
    <div className="contenedor-modal" id="modal">
      <div className="modal">
        <h2 className="title-modal">{props.title}</h2>
        <div className="info-modal">
          <p>{props.info}</p>
          {props.child}        
        </div>
        <div className="close-modal">
          <button onClick={props.cta}>Entendido!</button>
        </div>
      </div>
    </div>
  );
};