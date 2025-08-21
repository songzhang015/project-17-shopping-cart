import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div className="navbar">
			<div className="container">
				<Link to="/products">Products</Link>
				<Link to="/">Home</Link>
				<h1>Cart</h1>
			</div>
		</div>
	);
}

export default Navbar;
