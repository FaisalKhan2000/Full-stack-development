import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
function Navbar() {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);
  return (
    <nav className="navbar">
      <h2>
        <NavLink to={"/"}>FoodRecipe</NavLink>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Search Recipes"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
        />
      </form>

      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/favourites"}>Favourites</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
