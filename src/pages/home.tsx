import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { TransactionsList } from "../components/TransactionsList";

import styles from "../styles/pages/home.module.scss";

export const HomePage = () => {
  return (
    <main className={styles.Main}>
      <Header />
      <TransactionsList />
      <Footer />
    </main>
  );
};
