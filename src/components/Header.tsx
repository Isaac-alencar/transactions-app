import { Link } from "react-router-dom";

import styles from "../styles/components/Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.Header}>
      <span>Hello, John Doe!</span>
      <Link className={styles.Link} to="/transaction/new">
        New Transaction
      </Link>
    </header>
  );
};
