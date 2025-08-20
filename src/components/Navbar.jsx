import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div className="navbar">
			<Link to="/products">Products</Link>
			<Link to="/">Home</Link>
			<h1>Cart</h1>
		</div>
	);
}

export default Navbar;
