import ScrollToTop from "../components/ScrollToTop";
import DetailedProductCard from "../components/DetailedProductCard";
import pc from "../assets/pc.jpg";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

function ProductDetails({ product }) {
	const { addToCart } = useOutletContext();
	const [resolution, setResolution] = useState("1080");

	return (
		<div className="product-details">
			<ScrollToTop />
			<div className="left-section">
				<img src={pc} alt="PC Photo" />
				<h1>Performance (High Graphics)</h1>
				<div className="performance-data">
					<div className="line">
						<div>Minecraft</div>
						<div key={resolution} className="fps">
							<span>{product[resolution].minecraft}</span> FPS
						</div>
					</div>
					<div className="line">
						<div>Fortnite</div>
						<div key={resolution} className="fps">
							<span>{product[resolution].fortnite}</span> FPS
						</div>
					</div>
					<div className="line">
						<div>Elden Ring</div>
						<div key={resolution} className="fps">
							<span>{product[resolution].elden}</span> FPS
						</div>
					</div>
					<div className="line">
						<div>Cyberpunk 2077</div>
						<div key={resolution} className="fps">
							<span>{product[resolution].cyberpunk}</span> FPS
						</div>
					</div>
					<div className="line">
						<div>Clair Obscur: Expedition 33</div>
						<div key={resolution} className="fps">
							<span>{product[resolution].expedition}</span> FPS
						</div>
					</div>
					<div className="line">
						<div>Marvel Rivals</div>
						<div key={resolution} className="fps">
							<span>{product[resolution].rivals}</span> FPS
						</div>
					</div>
				</div>
				<div className="btn-group">
					<button
						onClick={() => setResolution("1080")}
						className={resolution === "1080" ? "active" : ""}
					>
						1080p
					</button>
					<button
						onClick={() => setResolution("1440")}
						className={resolution === "1440" ? "active" : ""}
					>
						1440p
					</button>
					<button
						onClick={() => setResolution("4k")}
						className={resolution === "4k" ? "active" : ""}
					>
						4k
					</button>
				</div>
			</div>
			<div className="right-section">
				<div className="product-details-container">
					<DetailedProductCard {...product} />
				</div>

				<button className="add-cart-btn" onClick={() => addToCart(product)}>
					Add to Cart
				</button>
			</div>
		</div>
	);
}

export default ProductDetails;
