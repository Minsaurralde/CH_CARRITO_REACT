import { useState, createContext } from "react";

export const CartContext = createContext([]);

export const CartProvider = ( {children} ) => {
	const [ cart, setCart ] = useState([]);

	function isInCart(id){
		const busqueda = cart.find((item) => item.id === id);
		return busqueda === undefined ? false : true;
	}
	function addItem(obj, cantidad){
		if (isInCart(obj.id)){
			console.log("no se puede agregar, ya existe en el carrito")
		}
		else{setCart([...cart,{...obj, cantidad}]);}		
	}
	console.log(cart);
	function removeItem(id){
	    let indexBuscado = cart.indexOf(cart.find((item) => item.id === id));
	    cart.splice(indexBuscado,1);
	}
	function clear(){
		setCart([]);
	}

	return (
		<CartContext.Provider value={{cart, addItem, removeItem, clear}}>
		{children}
		</CartContext.Provider>
		);
};