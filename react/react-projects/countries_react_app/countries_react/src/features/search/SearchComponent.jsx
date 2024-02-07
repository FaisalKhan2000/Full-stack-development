import { useState, useId } from "react";
import SearchIcon from "@mui/icons-material/Search";

function SearchComponent() {
  const [search, setSearch] = useState("");
  const searchId = useId();

  function handleSearch(e) {
    e.preventDefault();
    console.log(e.target.value);
    setSearch(e.target.value);
  }

  return (
    <div className="w-96 bg-zinc-800 text-zinc-50 flex relative rounded-lg ">
      <SearchIcon htmlFor={searchId} className="absolute top-3 left-2 w-4" />

      <input
        type="text"
        id={searchId}
        value={search}
        onChange={handleSearch}
        placeholder="Search countries..."
        className="bg-zinc-800 h-5 w-full py-6 px-10  text-sm  placeholder:text-zinc-200 focus:outline-none rounded-lg shadow-md"
      />
    </div>
  );
}

export default SearchComponent;
