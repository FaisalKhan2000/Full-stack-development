import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useQuery } from "../context/queryContext";
function Search() {
  const [search, setSearch] = useState("");

  const { setQuery } = useQuery();
  function handleSubmit(e) {
    e.preventDefault();
    if (search.length === 0) return;

    setQuery(search);
    // console.log(search);

    setSearch("");
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center border-purple  border-2 bg-white-200 px-3 py-3 text-grey-200 rounded-xl w-full dark:bg-grey-300 "
    >
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Search for any word"
        className="bg-white-200 border-none outline-none text-grey-200 flex-1 dark:bg-grey-300"
      />
      <SearchIcon className="bg-white-200 text-purple border-none  dark:bg-grey-300" />
    </form>
  );
}

export default Search;
