import "../styles/Navbar.css";
import pc from "../assets/pc.jpg";
import { Link } from "react-router-dom";

function Cart({ cartItems, removeFromCart, setShowCart, isActive }) {
	const itemsArray = Object.values(cartItems);

	const total = itemsArray.reduce((sum, item) => {
		const price = parseFloat(item.price.replace(/,/g, ""));
		return sum + price * item.count;
	}, 0);

	const roundedTotal = Math.round(total * 100) / 100;

	return (
		<div className="cart">
			<div
				className={`left-section ${isActive ? "active" : ""}`}
				onClick={() => setShowCart(false)}
			></div>
			<div className={`right-section ${isActive ? "active" : ""}`}>
				{itemsArray.length === 0 ? (
					<h1>Cart Empty</h1>
				) : (
					<>
						<h1>Cart</h1>
						<div className="divider"></div>
						{itemsArray.map((item, index) => (
							<div key={index} className="item-container">
								<div className="item-img">
									<Link to={`/products/${item.id}`}>
										<img src={pc} alt="PC Photo" />
									</Link>
								</div>
								<div className="item-details">
									<p>{item.name}</p>
									<p>${item.price}</p>
									<div className="line">
										<p>x{item.count}</p>
										<button
											className="remove-btn"
											onClick={() => removeFromCart(item.id)}
										>
											Remove
										</button>
									</div>
								</div>
							</div>
						))}
						<h1>
							Total: $
							{roundedTotal.toLocaleString("en-US", {
								minimumFractionDigits: 2,
								maximumFractionDigits: 2,
							})}
						</h1>
						<button className="checkout-btn">Checkout</button>
					</>
				)}
			</div>
		</div>
	);
}

export default Cart;
