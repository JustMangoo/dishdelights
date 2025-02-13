import { useState, useEffect } from "react";
import editIcon from "../assets/icons/edit_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import addIcon from "../assets/icons/add_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import deleteIcon from "../assets/icons/delete_24dp_F8F8F8_FILL0_wght400_GRAD0_opsz24.svg";
import styles from "./PersonalFavorites.module.css";

const PersonalFavorites = () => {
  const [recipes, setRecipes] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    title: "",
    ingredients: "",
    instructions: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  // Load recipes from localStorage on component mount
  useEffect(() => {
    console.log("Loading recipes from localStorage");
    const storedRecipes =
      JSON.parse(localStorage.getItem("favoriteRecipes")) || [];
    console.log("Loaded recipes:", storedRecipes);

    // Only set recipes if the state is empty (to avoid overwriting during double mount)
    if (recipes.length === 0) {
      setRecipes(storedRecipes);
    }
  }, []);

  // Save recipes to localStorage whenever the recipes state changes
  useEffect(() => {
    localStorage.setItem("favoriteRecipes", JSON.stringify(recipes));
  }, [recipes]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Filter out empty ingredients and instructions
    const filteredIngredients = formData.ingredients
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item !== ""); // Remove empty strings

    const filteredInstructions = formData.instructions
      .split(".")
      .map((step) => step.trim())
      .filter((step) => step !== ""); // Remove empty strings

    // Prevent saving if all ingredients or instructions are empty
    if (filteredIngredients.length === 0 || filteredInstructions.length === 0) {
      alert("Please provide at least one ingredient and one instruction.");
      return;
    }

    const newRecipe = {
      id: isEditing ? formData.id : Date.now(),
      title: formData.title.trim(), // Trim the title as well
      ingredients: filteredIngredients,
      instructions: filteredInstructions,
    };

    if (isEditing) {
      // Update existing recipe
      const updatedRecipes = recipes.map((recipe) =>
        recipe.id === newRecipe.id ? newRecipe : recipe
      );
      setRecipes(updatedRecipes);
    } else {
      // Add new recipe
      setRecipes([...recipes, newRecipe]);
    }

    // Reset form
    setFormData({
      id: null,
      title: "",
      ingredients: "",
      instructions: "",
    });
    setIsEditing(false);
  };

  const handleEdit = (recipe) => {
    setFormData({
      id: recipe.id,
      title: recipe.title,
      ingredients: recipe.ingredients.join(", "),
      instructions: recipe.instructions.join(". "),
    });
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updatedRecipes);
  };

  return (
    <div>
      <h1>Personal Favorite Recipes</h1>

      {/* Recipe Form */}
      <form onSubmit={handleSubmit}>
        <div className={styles.formHeader}>
          <input
            type="text"
            name="title"
            placeholder="Recipe Title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
          <button className="icon-button" type="submit">
            {isEditing ? <img src={editIcon}></img> : <img src={addIcon}></img>}
          </button>
        </div>
        <div className={styles.formRow}>
          <textarea
            name="ingredients"
            placeholder="Ingredients (comma-separated)"
            value={formData.ingredients}
            onChange={handleInputChange}
            required
            rows="10"
            maxLength={500}
          />
          <textarea
            name="instructions"
            placeholder="Instructions (period-separated)"
            value={formData.instructions}
            onChange={handleInputChange}
            required
            rows="10"
            maxLength={500}
          />
        </div>
      </form>
      <div className={styles.rowDivider}></div>
      {/* Recipe List */}
      <div>
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <div className={styles.recipeCard}>
              <div className={styles.recipeInfo}>
                <h3>{recipe.title}</h3>
                <p>
                  <strong className={styles.listLabel}>Ingredients:</strong>
                  <ul>
                    {recipe.ingredients.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </p>
                <p>
                  <strong className={styles.listLabel}>Instructions:</strong>
                  <ol>
                    {recipe.instructions.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ol>
                </p>
              </div>
              <div className={styles.recipeActions}>
                <button
                  className="icon-button"
                  onClick={() => handleEdit(recipe)}
                >
                  <img src={editIcon}></img>
                </button>
                <button
                  className="icon-button"
                  onClick={() => handleDelete(recipe.id)}
                >
                  <img src={deleteIcon}></img>
                </button>
              </div>
            </div>
            <div className={styles.rowDivider}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalFavorites;
