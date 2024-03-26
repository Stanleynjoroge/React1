import React, { useContext,useState} from "react";
import { useLoaderData } from "react-router-dom";
import  {useSelector} from "react-redux";
import './productSlice'

export const productLoader = async ({ params }) => {
  
  const response = await fetch(`https://dummyjson.com/products/${params.productId}`);
  const data = await response.json();
  if (!data) {
    return null;
  }
  return data;
};

const SingleProduct = () => {
  const { products, loading, error } = useSelector((state) => state.product);
  
 
  const product = useLoaderData();

  console.log(product);
  return (
    <>
      {loading && <p id="search-spinner"></p>}
      {error && <p>Error: {error}</p>}
   
          
            <div id={product.id} className="product" key={product.id}>
        <img src={product.images[0]} alt={product.title} width={100} />
        <p>{product.title}</p>
        <p>{product.description}</p>
      </div>
   
  
    </>
  );
};

export default SingleProduct;
