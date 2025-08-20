import App from "./App";
import ErrorPage from "./routes/ErrorPage";
import Home from "./routes/Home";
import Products from "./routes/Products";
import ProductDetails from "./routes/ProductDetails";

const routes = [
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "products", element: <Products /> },
			{ path: "products/:id", element: <ProductDetails /> },
		],
	},
];

export default routes;
