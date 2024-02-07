import { Link } from "react-router-dom";

function Header() {
  return (
    <header className=" bg-zinc-800 text-zinc-50 px-4 py-3 uppercase sm:px-20">
      <Link to="/">Where in the world</Link>

      {/* <button>dark mode</button> */}
    </header>
  );
}

export default Header;
