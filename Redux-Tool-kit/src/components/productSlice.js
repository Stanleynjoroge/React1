import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartProducts:[],
  products: [],
  loading: false,
  error: null,
  
};

// Fetching data
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchProductsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess(state, action) {
      state.loading = false;
      state.products = action.payload;
    },
    fetchProductsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    // Adding and removing from cart
    addToCart(state ,action){
      state.loading=false
      const existingProduct= state.cartProducts.find((item)=> item.id=== action.payload.id)
      if (existingProduct)
      {state.cartProducts=state.cartProducts.map((item)=>{
           if (item.id ===action.payload.id){
            item.quantity=item.quantity +1
           }
           return item
      })}
      else{
        state.cartProducts=[... state.cartProducts,{...action.payload,quantity:1}]
      }
    
    },
      
    removeFromCart(state, action) {
      state.loading = false;
      const index = state.cartProducts.findIndex((product) => product._id === action.payload.id);
      if (index !== -1) {
        let newProductList=[ ...state.cartProducts.slice(0,index), ...state.cartProducts.slice(index+1)];
        state.cartProducts = [...newProductList];
      }
    },

  },
});


 
export const { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure, addToCart, removeFromCart } = productSlice.actions;

export default productSlice.reducer;



