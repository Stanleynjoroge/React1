import React, { useContext } from "react";
import CartContext from "../context/CartContext";

const Navbar = () => {
    const {catsInTheCart,openSideBar}=useContext(CartContext)
    console.log(catsInTheCart)
  return (
    <div className="cartbtn">
      <button onClick={() => openSideBar()}>Cart {catsInTheCart.cats.length}</button>
    </div>
  );
};

export default Navbar;
