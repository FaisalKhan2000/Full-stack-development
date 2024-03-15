import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import "./details.css"; // Import CSS file for styling

function Details() {
  const { id } = useParams();
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    handleFavourite,
    favouritesRecipeList,
  } = useContext(GlobalContext);

  async function fetchRecipe() {
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();

      if (!data || !data.data || !data.data.recipe) {
        throw new Error("No recipes found");
      }

      setRecipeDetailsData(data?.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchRecipe();
  }, []);

  // Check if recipeDetailsData.recipe is defined before destructuring its properties
  if (!recipeDetailsData || !recipeDetailsData.recipe) {
    return <div>Loading...</div>;
  }

  const { title, image_url, servings, ingredients } = recipeDetailsData.recipe;

  return (
    <div className="details-container">
      <div className="title">{title}</div>
      <img src={image_url} alt={title} className="image" />
      <div className="servings">Servings: {servings}</div>

      <button onClick={() => handleFavourite(recipeDetailsData?.recipe)}>
        {favouritesRecipeList &&
        favouritesRecipeList.length > 0 &&
        favouritesRecipeList.findIndex(
          (item) => item.id === recipeDetailsData.recipe.id
        ) !== -1
          ? "Remove from favourites"
          : "Add to favourites"}
      </button>

      <table className="ingredients-table">
        <thead>
          <tr>
            <th>Quantity</th>
            <th>Description</th>
            <th>Unit</th>
          </tr>
        </thead>
        <tbody>
          {ingredients.map((item, index) => (
            <tr key={index}>
              <td>{item.quantity}</td>
              <td>{item.description}</td>
              <td>{item.unit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Details;
