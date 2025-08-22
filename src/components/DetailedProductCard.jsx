import "../styles/products.css";

function DetailedProductCard({ name, price, cpu, gpu, ram, ssd, mb, psu }) {
	return (
		<div className="detailed-product-card">
			<div className="line">
				<h3>{name}</h3>
				<h3>${price}</h3>
			</div>
			<div className="line">
				<h3>Processor</h3>
				<h3>{cpu}</h3>
			</div>
			<div className="line">
				<h3>Graphics Card</h3>
				<h3>{gpu}</h3>
			</div>
			<div className="line">
				<h3>Memory</h3>
				<h3>{ram}</h3>
			</div>
			<div className="line">
				<h3>Storage</h3>
				<h3>{ssd}</h3>
			</div>
			<div className="line">
				<h3>Motherboard</h3>
				<h3>{mb}</h3>
			</div>
			<div className="line">
				<h3>Power Supply</h3>
				<h3>{psu}</h3>
			</div>
			<div className="line">
				<h3>Operating System</h3>
				<h3>Windows 11 Home</h3>
			</div>
		</div>
	);
}

export default DetailedProductCard;
