import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/recipes">DishDelights Recipes</Link>
        <Link to="/favorites">Personal Favorites</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
