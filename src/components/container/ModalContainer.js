import "./ModalContainer.css";

export const ModalContainer = ( props ) => {

  return(
    <div className="contenedor-modal">
    {props.children}
    </div>
  );
};