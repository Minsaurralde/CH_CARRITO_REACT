import { useState, createContext } from "react";

export const CartContext = createContext([]);

export const CartProvider = ( {children} ) => {
	const [ cart, setCart ] = useState([]);
	// console.log(cart);
	const [ order, setOrder ] = useState("");
	// console.log(order);

	function isInCart(id){
		const busqueda = cart.find((item) => item.id === id);
		return busqueda === undefined ? false : true;
	}
	function calcTotal(){
	    let nTotal = 0;
	    cart.map((item) =>{
	      let nSubtotal = item.cantidad * item.price;
	      nTotal = nTotal + nSubtotal;
	      }
	    )
	    return(nTotal.toFixed(2));
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
	    console.log('se elimino del carrito id: ' + id);
	    setCart(cart.filter(item=>item.id !== id));
	}
	function clear(){
		setCart([]);
	}

	return (
		<CartContext.Provider value={{cart, calcTotal, addItem, removeItem, clear, order, setOrder}}>
		{children}
		</CartContext.Provider>
		);
};