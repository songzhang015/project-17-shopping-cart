import { Link } from "react-router-dom";

function Home() {
	return (
		<div>
			<h1>Welcome to Homepage!</h1>
			<Link to="/products">Visit Products</Link>
			<Link to="/products/1">Visit Product Details</Link>
		</div>
	);
}

export default Home;
