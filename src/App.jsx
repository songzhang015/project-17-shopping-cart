import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="app">
			<Navbar />
			<main className="content">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}

export default App;
