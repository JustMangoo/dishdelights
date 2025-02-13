import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./views/Home";
import DishDelightsRecipes from "./views/DishDelightsRecipes";
import PersonalFavorites from "./views/PersonalFavorites";
import About from "./views/About";
import Contact from "./views/Contact";
import NotFound from "./views/NotFound";
import "./App.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "recipes",
          element: <DishDelightsRecipes />,
        },
        {
          path: "favorites",
          element: <PersonalFavorites />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ],
  {
    basename: "/dishdelights/", // Add the base URL here
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
