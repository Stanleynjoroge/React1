import React, { useState } from 'react'
import CartContext from './CartContext'

const CartContextProvider = (
    {children}
) => {

    const [catsInTheCart, setCatsInTheCart] = useState({ open: false ,cats:[]})

    const addCats = (cat) => setCatsInTheCart((prevData)=>{
        return{...prevData, cats :[...prevData.cats, cat]}
    })
    const openSideBar=()=>setCatsInTheCart((prevData) => {
        return{...prevData ,open:true}
    })
    const removeCats=(id)=>setCatsInTheCart((prevData) => {
      return {
        ...prevData,
        cats:  prevData.cats.filter(cat => cat.id !== id)
      }
    })

    const closeSideBar=()=>setCatsInTheCart((prevData) => {
        return{...prevData ,open:false}
    })
  return (
    <>
    <CartContext.Provider value={{catsInTheCart ,addCats  ,openSideBar ,closeSideBar, removeCats}}>
      {children}
    </CartContext.Provider>
    </>
  )
}

export default CartContextProvider