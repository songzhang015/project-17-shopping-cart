import "../styles/products.css";
import ProductCard from "./ProductCard";
import ProductsArray from "./ProductsArray";

function ProductList() {
	return (
		<div className="productlist">
			{ProductsArray.map((product) => (
				<ProductCard key={product.id} {...product} />
			))}
		</div>
	);
}

export default ProductList;
