import { Outlet, Link } from "react-router-dom";
import React, { useEffect } from "react";

import { toggleDarkLight } from "../components/themeSlice.js";
import { useSelector, useDispatch } from "react-redux";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "/src/App.css";

export default function Root() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const dispatch = useDispatch();

  const toggleDarkMode = () => {
    dispatch(toggleDarkLight());
  };

  return (
    <>
      <div
        className={` ${
          isDarkMode === true ? "bg-black text-white" : "text-black bg-white"
        }  shadow-xl`}
      >
        <div
          id="sidebar"
          className={` ${
            isDarkMode === true ? "bg-black text-white" : "text-black bg-white"
          }  shadow-xl`}
        >
          <div
            id="search"
            className={` ${
              isDarkMode === true
                ? "bg-black text-white"
                : "text-black bg-white"
            }  shadow-xl`}
          >
            
            <div id="darkmode" onClick={toggleDarkMode}>
              <input type="checkbox" className="checkbox" id="checkbox" onClick={toggleDarkMode}/>
              <label htmlFor="checkbox" className="label" onClick={toggleDarkMode}>
                <BsMoonStarsFill color="blue" onClick={toggleDarkMode}/>
                <BsFillSunFill color="yellow" onClick={toggleDarkMode}/>
                <div id="ball" onClick={toggleDarkMode}
             
                ></div>
              </label>
            </div>
          <br />
          
          
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search"
                placeholder="Search"
                type="search"
                name="q"
              />

              {/* <div className="sr-only" aria-live="polite"></div> */}
            </form>
          </div>
          <nav
            className={` ${
              isDarkMode === true
                ? "bg-black text-white"
                : "text-black bg-white"
            }  shadow-xl`}
          >
            <Link to={`Myshop`}>My shop</Link>
            <Link to={`Cart`}>Cart</Link>
          </nav>
        </div>
        <div
          id="detail"
          // className={` ${isDarkMode === true ? 'bg-black text-white' : 'text-black bg-white'}  shadow-xl`}
        >
          <Outlet />
        </div>
        <div
          id="footer"
          // className={` ${isDarkMode === true ? 'bg-black text-white' : 'text-black bg-white'}  shadow-xl`}
        >
          <hr />

          <h1>Stanley: Jack Of All Trades {new Date().getFullYear()}</h1>
        </div>
      </div>
    </>
  );
}
