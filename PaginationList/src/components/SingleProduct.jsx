import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";

export const productLoader = async ({ params }) => {
  const response = await fetch(`https://dummyjson.com/products/${params.productId}`);
  const data = await response.json();
  if (!data) {
    return null;
  }
  return data;
};

const SingleProduct = () => {
  const product = useLoaderData();

  console.log(product);
  return (
    <>
      <div id={product.id} className="product" key={product.id}>
        <img src={product.images[0]} alt={product.title} width={100} />
        <p>{product.title}</p>
      </div>
    </>
  );
};

export default SingleProduct;
