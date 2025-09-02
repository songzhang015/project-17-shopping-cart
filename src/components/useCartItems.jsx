import { useState } from "react";

function useCartItems() {
	const [cartItems, setCartItems] = useState({});

	function addToCart(product) {
		const key = product.id;

		setCartItems((prev) => {
			const newCart = { ...prev };
			if (newCart[key]) {
				newCart[key] = { ...newCart[key], count: newCart[key].count + 1 };
			} else {
				newCart[key] = { ...product, count: 1 };
			}
			return newCart;
		});
	}

	function removeFromCart(id) {
		setCartItems((prev) => {
			const newCart = { ...prev };
			delete newCart[id];
			return newCart;
		});
	}

	return { cartItems, addToCart, removeFromCart };
}

export default useCartItems;
