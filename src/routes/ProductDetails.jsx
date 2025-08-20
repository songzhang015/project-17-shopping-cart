import { Link } from "react-router-dom";

function ProductDetails() {
	return (
		<div>
			<h1>Welcome to Product Details!</h1>
			<Link to="/">Visit Home</Link>
			<Link to="/products">Visit Products</Link>
		</div>
	);
}

export default ProductDetails;
