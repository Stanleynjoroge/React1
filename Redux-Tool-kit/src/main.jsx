import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import store from './app/store'
import { Provider } from 'react-redux'
import Root from "./Routes/Root";
import FetchData from "./components/FetchData.jsx";
import Cart from "./components/Cart.jsx";
import SingleProduct,{ productLoader } from "./components/SingleProduct.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/Myshop",
        element: <FetchData />,
        
      
      },
      {
        path: "/Myshop/:productId",
        element: <SingleProduct/>,
        loader: productLoader
    
      },
      {
        path:"/Myshop/Cart/:product.Id",
        element:<SingleProduct/>,
        loader: productLoader
      },
      {
        path:"/Cart",
        element:<Cart/>,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
     <RouterProvider router={router} />
     </Provider>
    
  </React.StrictMode>,
)
