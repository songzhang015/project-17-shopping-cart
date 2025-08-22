import ScrollToTop from "../components/ScrollToTop";
import DetailedProductCard from "../components/DetailedProductCard";
import pc from "../assets/pc.jpg";

function ProductDetails({ product }) {
	return (
		<div className="product-details">
			<ScrollToTop />

			<div className="left-section">
				<img src={pc} alt="PC Photo" />
				<h1>Performance (High Graphics)</h1>
				<div className="performance-data"></div>
				<div className="btn-group">
					<button>1080p</button>
					<button>1440p</button>
					<button>4k</button>
				</div>
			</div>

			<div className="right-section">
				<DetailedProductCard {...product} />
			</div>
		</div>
	);
}

export default ProductDetails;
