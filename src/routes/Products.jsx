import "../styles/products.css";
import ProductList from "../components/ProductList";
import ScrollToTop from "../components/ScrollToTop";

function Products() {
	return (
		<div className="products">
			<ScrollToTop />
			<h1>Select a Model</h1>
			<ProductList />
		</div>
	);
}

export default Products;
