import App from "./App";
import ErrorPage from "./routes/ErrorPage";
import Home from "./routes/Home";
import Products from "./routes/Products";
import ProductDetails from "./routes/ProductDetails";
import ProductsArray from "./components/ProductsArray";

const routes = [
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "products", element: <Products /> },
			{
				path: "products/chimera",
				element: <ProductDetails product={ProductsArray[0]} />,
			},
			{
				path: "products/kraken",
				element: <ProductDetails product={ProductsArray[1]} />,
			},
			{
				path: "products/phoenix",
				element: <ProductDetails product={ProductsArray[2]} />,
			},
			{
				path: "products/dragon",
				element: <ProductDetails product={ProductsArray[3]} />,
			},
			{
				path: "products/leviathan",
				element: <ProductDetails product={ProductsArray[4]} />,
			},
			{
				path: "products/titan",
				element: <ProductDetails product={ProductsArray[5]} />,
			},
		],
	},
];

export default routes;
