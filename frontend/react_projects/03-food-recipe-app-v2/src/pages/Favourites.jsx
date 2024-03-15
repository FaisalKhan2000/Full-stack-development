import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import RecipeItem from "../components/RecipeItem";

function Favourites() {
  const { favouritesRecipeList } = useContext(GlobalContext);

  return (
    <div className="recipe-container">
      {favouritesRecipeList && favouritesRecipeList.length > 0 ? (
        favouritesRecipeList.map((item, index) => (
          <RecipeItem key={index} item={item} />
        ))
      ) : (
        <p>Nothing to show. Please add something in favourites</p>
      )}
    </div>
  );
}

export default Favourites;
