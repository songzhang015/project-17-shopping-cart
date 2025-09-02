import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import cart from "../assets/cart.svg";
import Cart from "./Cart.jsx";
import { useState, useEffect } from "react";

function Navbar({ cartItems, removeFromCart }) {
	const [showCart, setShowCart] = useState(false);

	useEffect(() => {
		if (showCart) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		return () => {
			document.body.style.overflow = "";
		};
	}, [showCart]);

	return (
		<div className="navbar">
			<div className="container">
				<Link to="/">Home</Link>
				<Link to="/products">Products</Link>
				<img src={cart} alt="Cart" onClick={() => setShowCart(true)} />
			</div>
			<Cart
				cartItems={cartItems}
				removeFromCart={removeFromCart}
				setShowCart={setShowCart}
				isActive={showCart}
			/>
		</div>
	);
}

export default Navbar;
