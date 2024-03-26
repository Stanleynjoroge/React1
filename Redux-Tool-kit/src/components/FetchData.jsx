import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
  addToCart,
} from "../components/productSlice";
import Button from "../common/Button.jsx";

const FetchData = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);


  useEffect(() => {
    dispatch(fetchProductsStart());
    fetch("https://dummyjson.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        return response.json();
      })
      .then((json) => {
        dispatch(fetchProductsSuccess(json.products.slice(0, 16)));
      })
      .catch((error) => {
        dispatch(fetchProductsFailure(error.message));
      });
  }, [dispatch]);

  return (
    <>
      {loading && <p id="search-spinner"></p>}
      {error && <p>Error: {error}</p>}
      {products.map((product) => (
        <div id={product.id} className="product" key={product.id}>
       <Link to={`/Myshop/${product.id}`}>
            <img src={product.images[0]} alt={product.title} width={80} /></Link>
          

          <div>
            <p>{product.title}</p>

            <p>Price : $ {product.price}</p>
          </div>

          <Button onClick={() => dispatch(addToCart(product))} text='Add me' />

        </div>
      ))}
    </>
  );
};

export default FetchData;
