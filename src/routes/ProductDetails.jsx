import ScrollToTop from "../components/ScrollToTop";
import DetailedProductCard from "../components/DetailedProductCard";
import pc from "../assets/pc.jpg";
import React, { useState } from "react";

function ProductDetails({ product }) {
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
						<div>
							<span>{product[resolution].minecraft}</span> FPS
						</div>
					</div>
					<div className="line">
						<div>Fortnite</div>
						<div>
							<span>{product[resolution].fortnite}</span> FPS
						</div>
					</div>
					<div className="line">
						<div>Elden Ring</div>
						<div>
							<span>{product[resolution].elden}</span> FPS
						</div>
					</div>
					<div className="line">
						<div>Cyberpunk 2077</div>
						<div>
							<span>{product[resolution].cyberpunk}</span> FPS
						</div>
					</div>
					<div className="line">
						<div>Clair Obscur: Expedition 33</div>
						<div>
							<span>{product[resolution].expedition}</span> FPS
						</div>
					</div>
					<div className="line">
						<div>Marvel Rivals</div>
						<div>
							<span>{product[resolution].rivals}</span> FPS
						</div>
					</div>
				</div>
				<div className="btn-group">
					<button onClick={() => setResolution("1080")}>1080p</button>
					<button onClick={() => setResolution("1440")}>1440p</button>
					<button onClick={() => setResolution("4k")}>4k</button>
				</div>
			</div>
			<div className="right-section">
				<DetailedProductCard {...product} />
			</div>
		</div>
	);
}

export default ProductDetails;
