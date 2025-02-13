import { useState } from "react";
import RecipeList from "../components/RecipeList";
import RecipeDetail from "../components/RecipeDetail";
import Burger from "../assets/burger-4145977_640.jpg";
import Cake from "../assets/chocolate-cake-4446608_640.jpg";
import StirFry from "../assets/oriental-2092468_640.jpg";
import Pasta from "../assets/pasta-712664_640.jpg";
import Tikka from "../assets/tikka-masala-2244667_640.jpg";
import Styles from "./DishDelightsRecipes.module.css";

const DishDelightsRecipes = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("All");

  const recipes = [
    {
      id: 1,
      title: "Classic Spaghetti Carbonara",
      ingredients: [
        "200g spaghetti",
        "100g pancetta, diced",
        "2 large eggs",
        "50g grated Parmesan cheese",
        "2 cloves garlic, minced",
        "Salt and pepper to taste",
        "Fresh parsley for garnish",
      ],
      instructions: [
        "Cook the spaghetti in boiling salted water until al dente.",
        "In a pan, fry the pancetta and garlic until crispy.",
        "In a bowl, whisk the eggs and Parmesan cheese.",
        "Drain the spaghetti and add it to the pancetta pan.",
        "Remove from heat and quickly stir in the egg mixture.",
        "Season with salt and pepper, and garnish with parsley.",
      ],
      preparationTime: "10 minutes",
      cookingTime: "15 minutes",
      totalTime: "25 minutes",
      servings: 2,
      nutritionalInfo: "Calories: 600, Fat: 25g, Carbs: 65g, Protein: 25g",
      difficulty: "Easy",
      notes: "Use fresh eggs and high-quality Parmesan for the best flavor.",
      image: Pasta,
    },
    {
      id: 2,
      title: "Chicken Tikka Masala",
      ingredients: [
        "500g chicken breast, cubed",
        "1 cup plain yogurt",
        "2 tbsp tikka masala paste",
        "1 onion, finely chopped",
        "2 cloves garlic, minced",
        "1 can (400g) diced tomatoes",
        "1 cup heavy cream",
        "2 tbsp vegetable oil",
        "Salt and pepper to taste",
        "Fresh cilantro for garnish",
      ],
      instructions: [
        "Marinate the chicken in yogurt and tikka masala paste for 1 hour.",
        "Heat oil in a pan and sauté the onion and garlic until soft.",
        "Add the marinated chicken and cook until browned.",
        "Stir in the diced tomatoes and simmer for 15 minutes.",
        "Add the heavy cream and cook for another 5 minutes.",
        "Garnish with fresh cilantro and serve with rice or naan.",
      ],
      preparationTime: "15 minutes",
      cookingTime: "30 minutes",
      totalTime: "45 minutes",
      servings: 4,
      nutritionalInfo: "Calories: 450, Fat: 20g, Carbs: 15g, Protein: 40g",
      difficulty: "Medium",
      notes:
        "For extra flavor, grill the chicken before adding it to the sauce.",
      image: Tikka,
    },
    {
      id: 3,
      title: "Vegetable Stir-Fry",
      ingredients: [
        "1 cup broccoli florets",
        "1 red bell pepper, sliced",
        "1 carrot, julienned",
        "1 cup snap peas",
        "2 tbsp soy sauce",
        "1 tbsp sesame oil",
        "1 clove garlic, minced",
        "1 tsp ginger, minced",
        "1 tbsp sesame seeds",
        "2 cups cooked rice",
      ],
      instructions: [
        "Heat sesame oil in a wok or large pan.",
        "Add garlic and ginger, and sauté for 1 minute.",
        "Add all vegetables and stir-fry for 5-7 minutes.",
        "Pour in soy sauce and toss to coat.",
        "Serve over cooked rice and sprinkle with sesame seeds.",
      ],
      preparationTime: "10 minutes",
      cookingTime: "10 minutes",
      totalTime: "20 minutes",
      servings: 2,
      nutritionalInfo: "Calories: 300, Fat: 8g, Carbs: 45g, Protein: 10g",
      difficulty: "Easy",
      notes: "Add tofu or chicken for extra protein.",
      image: StirFry,
    },
    {
      id: 4,
      title: "Beef Burger with Caramelized Onions",
      ingredients: [
        "500g ground beef",
        "1 onion, sliced",
        "1 tbsp olive oil",
        "1 tsp sugar",
        "4 burger buns",
        "Lettuce, tomato, and cheese for topping",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Heat olive oil in a pan and caramelize the onions with sugar.",
        "Shape the ground beef into patties and season with salt and pepper.",
        "Grill the patties for 4-5 minutes on each side.",
        "Toast the burger buns and assemble with lettuce, tomato, cheese, and caramelized onions.",
      ],
      preparationTime: "15 minutes",
      cookingTime: "15 minutes",
      totalTime: "30 minutes",
      servings: 4,
      nutritionalInfo: "Calories: 500, Fat: 25g, Carbs: 35g, Protein: 30g",
      difficulty: "Easy",
      notes: "Use a mix of ground beef and pork for extra juiciness.",
      image: Burger,
    },
    {
      id: 5,
      title: "Chocolate Lava Cake",
      ingredients: [
        "100g dark chocolate",
        "100g butter",
        "100g sugar",
        "2 eggs",
        "50g flour",
        "1 tsp vanilla extract",
        "Powdered sugar for dusting",
      ],
      instructions: [
        "Preheat the oven to 180°C (350°F).",
        "Melt the chocolate and butter together.",
        "Whisk the eggs and sugar until fluffy, then add the melted chocolate mixture.",
        "Fold in the flour and vanilla extract.",
        "Pour the batter into greased ramekins and bake for 10-12 minutes.",
        "Dust with powdered sugar and serve warm.",
      ],
      preparationTime: "10 minutes",
      cookingTime: "12 minutes",
      totalTime: "22 minutes",
      servings: 4,
      nutritionalInfo: "Calories: 400, Fat: 25g, Carbs: 35g, Protein: 6g",
      difficulty: "Medium",
      notes: "Do not overbake to ensure a gooey center.",
      image: Cake,
    },
  ];

  // Filter recipes based on search query and difficulty level
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesDifficulty =
      difficultyFilter === "All" || recipe.difficulty === difficultyFilter;
    return matchesSearch && matchesDifficulty;
  });

  return (
    <div>
      <h1>DishDelights Recipes</h1>
      <div className={Styles.filters}>
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <select
          value={difficultyFilter}
          onChange={(e) => setDifficultyFilter(e.target.value)}
        >
          <option value="All">All Difficulties</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
        </select>
      </div>

      {/* Recipe List */}
      <RecipeList recipes={filteredRecipes} onRecipeClick={setSelectedRecipe} />

      {/* Recipe Detail */}
      {selectedRecipe && (
        <RecipeDetail
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      )}
    </div>
  );
};

export default DishDelightsRecipes;
