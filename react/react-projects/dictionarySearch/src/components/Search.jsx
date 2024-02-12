import SearchIcon from "@mui/icons-material/Search";
function Search() {
  return (
    <div className="flex items-center border-none  border-2 bg-white-200 px-3 py-3 text-grey-200 rounded-xl w-full ">
      <input
        type="text"
        placeholder="Search for any word"
        className="bg-white-200 border-none outline-none text-grey-200 flex-1"
      />
      <SearchIcon className="bg-white-200 text-purple border-none  " />
    </div>
  );
}

export default Search;
