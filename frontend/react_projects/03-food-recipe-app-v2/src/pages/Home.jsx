import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import RecipeItem from "../components/RecipeItem";

function Home() {
  const { recipeList, loading, error } = useContext(GlobalContext);

  if (loading) {
    return <div>Loading... Please wait!</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="recipe-container">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item, index) => <RecipeItem key={index} item={item} />)
      ) : (
        <p>Nothing to show. Please search something</p>
      )}
    </div>
  );
}

export default Home;
