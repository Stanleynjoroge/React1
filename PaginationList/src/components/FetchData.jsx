import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./FetchData.css";

const FetchData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    try {
      let response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }
      let json = await response.json();
      console.log(json);
      setData(json);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div className="main">
      {data &&
        data.products.slice(0, 16).map((product) => (
          <div id={product.id} className="product" key={product.id}>
            <a href={`/Myshop/${product.id}`}>
              
              <img src={product.images[0]} alt={product.title} width={100} />
            </a>
            <p>{product.title}</p>
          </div>
        ))}
      {/* <NavLink
                    to={`/product/${product.id}`}>
                   
                  </NavLink> */}
    </div>
  );
};

export default FetchData;
