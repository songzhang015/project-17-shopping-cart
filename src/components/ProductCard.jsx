import "../styles/products.css";
import pc from "../assets/pc.jpg";
import { Link } from "react-router-dom";

function ProductCard({ name, phrase, cpu, gpu, ram, ssd, price }) {
	return (
		<div className="product-card">
			<Link to={name.toLowerCase()}>
				<img src={pc} alt="PC Photo" />
			</Link>
			<h1>{name}</h1>
			<i>{phrase}</i>
			<p>{cpu}</p>
			<p>{gpu}</p>
			<p>{ram}</p>
			<p>{ssd}</p>
			<strong>${price}</strong>
			<Link to={name.toLowerCase()} className="btn">
				Select
			</Link>
		</div>
	);
}

export default ProductCard;
