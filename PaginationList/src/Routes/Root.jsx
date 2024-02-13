import { Outlet, Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from "../components/ThemeContextData";

export default function Root() {
const [theme ,handleSwitchTheme] =useContext(ThemeContext)
  return (
    <>
      <div id="sidebar" 
      
      >
       <div
        id="search"
        className={` ${theme === 'dark' ? 'bg-black text-white' : 'text-black bg-white'}  shadow-xl`}
        >
          <button onClick={handleSwitchTheme} className="bg-white dark:bg-slate-800 shadow-xl"> Dark Mode</button>
        
        <form id="search-form" role="search">
          <input
            id="q"
            aria-label="Search contacts"
            placeholder="Search"
            type="search"
            name="q"
          />
          <div
            className="sr-only"
            aria-live="polite"
          ></div>
        </form>
        </div>
        <nav className={` ${theme === 'dark' ? 'bg-black text-white' : 'text-black bg-white'}  shadow-xl`}>
          <ul>
            <li>
              <Link to={`Myshop`}>My shop</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"
          className={` ${theme === 'dark' ? 'bg-black text-white' : 'text-black bg-white'}  shadow-xl`}
      >
        <Outlet/>
        
      </div>
      <div 
      id="footer"
      className={` ${theme === 'dark' ? 'bg-black text-white' : 'text-black bg-white'}  shadow-xl`}
      > 
      <h1>Stanley: Jack Of All Trades</h1>
      </div>
      
    </>
  );
}
