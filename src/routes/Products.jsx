import { Link } from "react-router-dom";

function Products() {
	return (
		<div>
			<h1>Welcome to Products!</h1>
			<Link to="/products/1">Visit Product Details</Link>
		</div>
	);
}

export default Products;
