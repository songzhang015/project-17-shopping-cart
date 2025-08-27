import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Cart({ setShowCart, isActive }) {
	return (
		<div className="cart">
			<div
				className={`left-section ${isActive ? "active" : ""}`}
				onClick={() => setShowCart(false)}
			></div>
			<div className={`right-section ${isActive ? "active" : ""}`}></div>
		</div>
	);
}

export default Cart;
