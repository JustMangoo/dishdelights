import { useState, useEffect } from "react";

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
    setRecipes(storedRecipes);
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

    const newRecipe = {
      id: isEditing ? formData.id : Date.now(),
      title: formData.title,
      ingredients: formData.ingredients.split(",").map((item) => item.trim()),
      instructions: formData.instructions.split(".").map((step) => step.trim()),
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
        <input
          type="text"
          name="title"
          placeholder="Recipe Title"
          value={formData.title}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="ingredients"
          placeholder="Ingredients (comma-separated)"
          value={formData.ingredients}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="instructions"
          placeholder="Instructions (period-separated)"
          value={formData.instructions}
          onChange={handleInputChange}
          required
        />
        <button type="submit">
          {isEditing ? "Update Recipe" : "Add Recipe"}
        </button>
      </form>

      {/* Recipe List */}
      <div>
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <h3>{recipe.title}</h3>
            <p>
              <strong>Ingredients:</strong> {recipe.ingredients.join(", ")}
            </p>
            <p>
              <strong>Instructions:</strong> {recipe.instructions.join(". ")}
            </p>
            <button onClick={() => handleEdit(recipe)}>Edit</button>
            <button onClick={() => handleDelete(recipe.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalFavorites;
