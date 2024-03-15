import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [receipeList, setReceipeList] = useState([]);
  const [receipeDetailsData, setReceipeDetailsData] = useState(null);
  const [favouritesList, setfavouritesList] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );

      const data = await res.json();
      if (data?.data?.recipes) {
        setReceipeList(data?.data?.recipes);
        setLoading(false);
        setSearchParam("");
      }
      console.log(receipeList);
    } catch (error) {
      setError(error);
      console.log(error);
      setLoading(false);
    }
  }

  function handleAddToFavourites(getCurrentItem) {
    console.log(getCurrentItem);
    let cpyFavoritesList = [...favouritesList];
    const index = cpyFavoritesList.findIndex(
      (item) => item.id === getCurrentItem.id
    );

    if (index === -1) {
      cpyFavoritesList.push(getCurrentItem);
    } else {
      cpyFavoritesList.splice(index);
    }

    setfavouritesList(cpyFavoritesList);
  }

  // console.log(loading, receipeList);

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        loading,
        error,
        receipeList,
        receipeDetailsData,
        setReceipeDetailsData,
        handleAddToFavourites,
        favouritesList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

GlobalState.propTypes = {
  children: PropTypes.any.isRequired,
};

export default GlobalState;
