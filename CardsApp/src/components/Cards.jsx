import React, { useContext, useState } from 'react';
import catlist from '../Features/catlist.js';
import './Cards.css';
import CartContext from '../context/CartContext.js';

const Cards = () => {
   const {addCats}= useContext(CartContext);
   const handleAddToCart=(cat)=>{
    addCats(cat)
   }
    return (
        <>

            <div  className='main'>
                {catlist.map((cat) => (
                    <div  id={cat.id} className="cats" key={cat.id}>
                        <h2>{cat.name}</h2>
                        <img src={cat.imageUrl} alt={cat.name} />
                        <button onClick={() => handleAddToCart(cat)}>Add Me</button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Cards;
 