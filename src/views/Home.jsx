import styles from "./Home.module.css";
import heroImage from "../assets/hero-image.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className={styles.home}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1>Welcome to DishDelights</h1>
      <p>Discover and create delicious meals from around the globe.</p>
      <div className={styles.linkGroup}>
        <Link className="primary-button" to="/dishdelights/recipes">
          DishDelights Recipes
        </Link>
        <Link className="secondary-button" to="/dishdelights/favorites">
          Personal Favorites
        </Link>
      </div>
    </div>
  );
};

export default Home;
