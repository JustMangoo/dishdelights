import styles from "./RecipeList.module.css";

const RecipeList = ({ recipes, onRecipeClick }) => {
  return (
    <div className={styles.recipeList}>
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className={styles.recipeCard}
          onClick={() => onRecipeClick(recipe)}
        >
          <img src={recipe.image} alt={recipe.title} />
          <h3>{recipe.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
