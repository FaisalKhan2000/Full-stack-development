import PropTypes from "prop-types";
import "./recipe-item.css";
import { NavLink } from "react-router-dom";
function RecipeItem({ item }) {
  const { image_url, title, id } = item;

  return (
    <div className="recipe-item">
      <img src={image_url} alt={title} />
      <div className="recipe-title">{title}</div>
      <NavLink to={`/recipe/${id}`}>view recipe</NavLink>
    </div>
  );
}

RecipeItem.propTypes = {
  item: PropTypes.shape({
    image_url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipeItem;
