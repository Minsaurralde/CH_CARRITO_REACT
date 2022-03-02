import "./ItemCount.css";
import React, {useState} from "react";

export const ItemCount = (props) => {
	const agregar = props.funcion;
	const [countClick, setCountClick] = useState(props.inicial);

	let stock = props.stock
	if( props.enstock < props.stock ) { stock = props.enstock };

	function contador(e){
		const operacion = e.target.innerText;

		switch(operacion){
			case "+":
			if(countClick < stock){
				setCountClick(countClick + 1);}
			break;

			case "-":
			if(countClick > 1){
				setCountClick(countClick - 1);}
			break;
		}
	};

  	return(
	    <div className="card">
		    {props.enstock === 0 ?(<span className="sinstock">Unidades agotadas</span>)
	        :(<div>
		        <div className="card-count">
				    <button onClick={(e) => contador(e)}>-</button>
				    <span> {countClick} </span>
				    <button onClick={(e) => contador(e)}>+</button>
			    </div>
			    <div className="card-add">
			    	<button onClick={()=>agregar(countClick)}>Agregar al carrito</button>
			    </div>
	        </div>
	       	)}	    
	    </div>
  );
};