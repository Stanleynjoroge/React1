import { createSlice } from '@reduxjs/toolkit';


const initialState={
    isDarkMode:
    localStorage.getItem("isDarkMode") != undefined
      ? JSON.parse(localStorage.getItem("isDarkMode"))
      : false,
}
export const themeSlice=createSlice({
name:"theme",
initialState,
reducers:{
    toggleDarkLight: (state) => {
        state.isDarkMode = !state.isDarkMode;
        localStorage.setItem("isDarkMode", state.isDarkMode);
    },
},})

  export const {toggleDarkLight} = themeSlice.actions
  export default themeSlice.reducer;