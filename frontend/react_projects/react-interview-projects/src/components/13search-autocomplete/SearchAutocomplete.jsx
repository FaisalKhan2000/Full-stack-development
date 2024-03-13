import { useEffect, useState } from "react";
import Suggestions from "./Suggestions";

/*
1. fetch all the users data and store them in users
2. add loading, error
3.  setUsers(data.users.map((userItem) => userItem.firstName)); since, we will search through users firstname
4. create searchParam , showDropdown, filteredData state
5. in input , value will be search param and onchange will be handleChange
6. handleChange(e) {
  const query = e.target.value
  setSearchParam(query)
  if (query.length >1) {
    const filteredData = users && users.length ? users.filter(item => item.toLowerCase().indexOf(query) > -1) : []

    setFilteredUsers(filteredData)
    setShowDropdown(true)
  } else {
    setShowDropdown(false)
  }

}

7.
*/

function SearchAutocomplete() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }

  function handleClick(event) {
    setShowDropdown(false);
    setSearchParam(event.target.innerText);
    setFilteredUsers([]);
    console.log(event.target.innerText);
  }

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  console.log(users, filteredUsers);

  return (
    <div className="search-autocomplete-container">
      {loading ? (
        <h1>Loading Data! Please wait</h1>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <input
          value={searchParam}
          name="search-users"
          placeholder="Search Users here..."
          onChange={handleChange}
        />
      )}

      {showDropdown && filteredUsers.length > 0 && (
        <Suggestions handleClick={handleClick} data={filteredUsers} />
      )}
      {showDropdown && filteredUsers.length === 0 && <div>No users found</div>}
    </div>
  );
}

export default SearchAutocomplete;
