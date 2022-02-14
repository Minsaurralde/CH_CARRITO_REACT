import { useState, createContext } from "react";

export const CartContext = createContext([]);

export const CartProvider = ( {children} ) => {
	const [ cart, setCart ] = useState([]);
	console.log(cart);

	function isInCart(id){
		const busqueda = cart.find((item) => item.id === id);
		return busqueda === undefined ? false : true;
	}
	function addItem(obj, cantidad){
		if (isInCart(obj.id)){
			let cartN = [...cart];
			let idx = cartN.indexOf(cartN.find((item) => item.id === obj.id));
			cartN[idx].cantidad = cartN[idx].cantidad + cantidad;
			setCart(cartN);
		}
		else{setCart([...cart,{...obj, cantidad}]);}		
	}
	function removeItem(id){
	    // let indexBuscado = cart.indexOf(cart.find((item) => item.id === id));
	    // cart.splice(indexBuscado,1);
	    console.log('se elimino id: ' + id);
	    setCart(cart.filter(item=>item.id !== id));
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