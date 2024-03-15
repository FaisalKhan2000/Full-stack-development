import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const GlobalContext = createContext(null);

function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState("");
  const [favouritesRecipeList, setFavouriteRecipeList] = useState([]);

  console.log(recipeList);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(searchParam);
    setLoading(true);
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();

      if (!data || !data.data || !data.data.recipes) {
        throw new Error("No recipes found");
      }

      setLoading(false);
      setRecipeList(data.data.recipes);
      setError(null);
      setSearchParam("");
    } catch (error) {
      console.error(error.message);
      setError(error);
      setLoading(false);
    }
  }

  function handleFavourite(getCurrentItem) {
    console.log(getCurrentItem);

    let copyFavouriteList = [...favouritesRecipeList];

    const index = copyFavouriteList.findIndex(
      (item) => item.id === getCurrentItem.id
    );

    if (index === -1) {
      copyFavouriteList.push(getCurrentItem);
    } else {
      copyFavouriteList.splice(index);
    }

    setFavouriteRecipeList(copyFavouriteList);
  }

  console.log(favouritesRecipeList);

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        loading,
        error,
        recipeList,
        recipeDetailsData,
        setRecipeDetailsData,
        favouritesRecipeList,

        handleFavourite,
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
