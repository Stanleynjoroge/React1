import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Routes/Root";
import ErrorPage from "./Routes/errorpage";
import FetchData from "./components/FetchData.jsx";
import App from "./App.jsx";
import SingleProduct, { productLoader} from "./components/SingleProduct.jsx";
import ThemeContextProvider from "./components/ThemeContextData.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/Myshop",
        element: <FetchData />,
      
      },
      {
        path: "/Myshop/:productId",
        element: <SingleProduct/>,
        loader: productLoader,
      },
      {
        path: "/signup",
        element: <App />,
      },
    ],
  },
  {},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
    <RouterProvider router={router} />
    </ThemeContextProvider>
    
  </React.StrictMode>
);
