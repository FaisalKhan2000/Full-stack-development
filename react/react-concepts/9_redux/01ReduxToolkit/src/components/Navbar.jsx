import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const items = useSelector((state) => state.cart);
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/cart">cart</Link>
            </li>

            {/* <li>
              <a>Item 3</a>
            </li> */}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          React Store
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">cart</Link>
          </li>

          <li>
            <span>Cart items: {items.length}</span>
          </li>

          {/* <li>
              <a>Item 3</a>
            </li> */}
        </ul>
      </div>
      {/* <div className="navbar-end">
        <a className="btn">Button</a>
      </div> */}
    </div>
  );
}

export default Navbar;
