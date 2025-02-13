import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      {/* Burger Menu Button */}
      <button className={styles.burgerMenu} onClick={toggleMenu}>
        <div className={styles.burgerLine}></div>
        <div className={styles.burgerLine}></div>
        <div className={styles.burgerLine}></div>
      </button>

      {/* Navigation Links */}
      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
        <Link to="/" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/recipes" onClick={toggleMenu}>
          DishDelights Recipes
        </Link>
        <Link to="/favorites" onClick={toggleMenu}>
          Personal Favorites
        </Link>
        <Link to="/about" onClick={toggleMenu}>
          About
        </Link>
        <Link to="/contact" onClick={toggleMenu}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
