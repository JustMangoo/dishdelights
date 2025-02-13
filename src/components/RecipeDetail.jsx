import styles from "./RecipeDetail.module.css";

const RecipeDetail = ({ recipe, onClose }) => {
  return (
    <div className={styles.recipeDetail}>
      <div className={styles.recipeHeader}>
        <h2>{recipe.title}</h2>
        <button onClick={onClose}>+</button>
      </div>

      <img src={recipe.image} alt={recipe.title} />
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
