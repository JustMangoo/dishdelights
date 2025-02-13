import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; 2023 DishDelights. All rights reserved.</p>
        <p>456 Culinary Avenue, Gourmet Town, 1010 Vienna, Austria</p>
      </div>
    </footer>
  );
};

export default Footer;
