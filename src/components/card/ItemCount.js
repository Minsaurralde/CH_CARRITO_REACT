import "./ItemCount.css";
import React, {useState} from "react";

export const ItemCount = (props) => {
	const [countClick, setCountClick] = useState(props.inicial);

	function contador(e){
		const operacion = e.target.innerText;

		switch(operacion){
			case "+":
			if(countClick < props.stock){
				setCountClick(countClick + 1);}
			break;

			case "-":
			if(countClick > 1){
				setCountClick(countClick - 1);}
			break;
		}
	};

	function onAdd(){
		alert(`agregando ${countClick} items al carrito`)
	};

  	return(
	    <div className="card">
		    <div className="card-count">
			    <button onClick={(e) => contador(e)}>-</button>
			    <span> {countClick} </span>
			    <button onClick={(e) => contador(e)}>+</button>
		    </div>
		    <div className="card-add">
		    	<button onClick={()=>onAdd()}>Agregar al carrito</button>
		    </div>		    
	    </div>
  );
};