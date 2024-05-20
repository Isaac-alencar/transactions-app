import { useEffect, useState } from "react";

import { Transaction } from "../shared/types";
import { fetchTransactions } from "../infrastructure/fetchTransactions";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { TransactionsList } from "../components/TransactionsList";

import styles from "../styles/pages/home.module.scss";

export const HomePage = () => {
  const [transactions, setTransactions] = useState<Transaction[] | []>([]);

  useEffect(() => {
    (async () => {
      const res = await fetchTransactions();

      setTransactions(res);
    })();
  }, []);

  return (
    <main className={styles.Main}>
      <Header />
      <TransactionsList transactions={transactions} />
      <Footer />
    </main>
  );
};
