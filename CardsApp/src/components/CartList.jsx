import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import'./Cartlist.css'

const Cart = () => {
  const {catsInTheCart, closeSideBar,removeCats} = useContext(CartContext);

const RemoveFromCart=(id)=>{
  removeCats(id);

}
  return (
    <div className="cart">
      {catsInTheCart.open ? (
        <div>
         
          {catsInTheCart.cats.map((cat) => {
            return <div id={cat.id} className="cats" key={cat.id}>
            <h2>{cat.name}</h2>
            <img src={cat.imageUrl} alt={cat.name} />
            <button onClick={() =>RemoveFromCart(cat.id) /*removeCats(cat.id)*/}>Remove</button>
            </div>
             
          })}
          <button onClick={closeSideBar}>X</button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Cart;
