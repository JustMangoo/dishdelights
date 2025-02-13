import styles from "./RecipeDetail.module.css";
import closeIcon from "../assets/icons/close_24dp_F8F8F8_FILL0_wght400_GRAD0_opsz24.svg";

const RecipeDetail = ({ recipe, onClose }) => {
  return (
    <div className={styles.recipeDetail}>
      <div className={styles.recipeHeader}>
        <h2>{recipe.title}</h2>
        <button className="icon-button" onClick={onClose}>
          <img src={closeIcon} alt="close recipe details button" />
        </button>
      </div>

      <img
        className={styles.detailImage}
        src={recipe.image}
        alt={recipe.title}
      />
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <ol>
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      <p>
        <b>Preparation Time: </b> {recipe.preparationTime}
      </p>
      <p>
        <b>Cooking Time:</b> {recipe.cookingTime}
      </p>
      <p>
        <b>Total Time:</b> {recipe.totalTime}
      </p>
      <p>
        <b>Servings:</b> {recipe.servings}
      </p>
      <p>
        <b>Nutritional Info:</b> {recipe.nutritionalInfo}
      </p>
      <p>
        <b>Difficulty:</b> {recipe.difficulty}
      </p>
      <p>
        <b>Notes:</b> {recipe.notes}
      </p>
    </div>
  );
};

export default RecipeDetail;
