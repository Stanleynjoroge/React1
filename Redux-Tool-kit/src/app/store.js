// In your root file, e.g., "index.js"
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../components/productSlice'; // Import your slice
import themeReducer from '../components/themeSlice';


export default configureStore({
  reducer: {
    product: productReducer,
     theme: themeReducer,
  },
});

