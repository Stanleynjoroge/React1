import React, { useState } from "react";


const ItemsContextProvider = ({ children }) => {
    {
      children;
    }
  
    return <CartContext.Provider>
      {children}
      </CartContext.Provider>;
  };

export default ItemsContextProvider
