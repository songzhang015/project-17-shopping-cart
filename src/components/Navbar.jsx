import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import cart from "../assets/cart.svg";

function Navbar() {
	return (
		<div className="navbar">
			<div className="container">
				<Link to="/products">Products</Link>
				<Link to="/">Home</Link>
				<img src={cart} alt="Cart" />
			</div>
		</div>
	);
}

export default Navbar;
