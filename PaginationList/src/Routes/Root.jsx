import { Outlet, Link,NavLink } from "react-router-dom";
export default function Root() {
    return (
      <>
      
        <div id="sidebar">
      
          <h1>Stanley: Jack Of All Trades</h1>
          <div>
            <div> <button>DarkMode</button></div>
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
          <nav>
            <ul>
              <li>
                
              </li>
              <li>
                
              </li>
              <li>
              <Link to={`Myshop`}> My shop</Link>
            </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
          <Outlet/>
        </div>
      </>
    );
  }