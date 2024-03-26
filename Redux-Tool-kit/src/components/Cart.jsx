import React from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { removeFromCart} from '../components/productSlice';
import '../index.css'
import Button from '../common/Button'
import {Link} from "react-router-dom"

const Cart = () => {
    const dispatch= useDispatch()
    const product = useSelector((state) => state.product);

    
  return (
    
    <>
    
       {/* <p>Hi there welcome to the cart. Click add me to add cart items.</p>  */}

    
        {
            product.cartProducts.map((productInCart, product) => (
                <div className='product' id={product.id} key={productInCart.id}>
                    <Link to={`/Myshop/${productInCart.id}`}> 
                    <img src={productInCart.images[0]} alt={product.title} width={80} />
                    </Link>
                   
                    <span>{productInCart.title}</span>
                    
                    <Button onClick={() => dispatch(removeFromCart(product))} text= 'Remove from Cart'/>
                    </div>
            ))
        }
    
    </>
  )
}

export default Cart