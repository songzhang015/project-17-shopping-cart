import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import useCartItems from "./components/useCartItems";

function App() {
	const { cartItems, addToCart, removeFromCart } = useCartItems();

	return (
		<div className="app">
			<Navbar cartItems={cartItems} removeFromCart={removeFromCart} />
			<main className="content">
				<Outlet context={{ addToCart }} />
			</main>
			<Footer />
		</div>
	);
}

export default App;
