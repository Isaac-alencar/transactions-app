import styles from "../styles/components/TransactionsList.module.scss";
import { Transaction } from "./TransactionItem";

export const TransactionsList = () => {
  return (
    <ul className={styles.Transactions}>
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
    </ul>
  );
};
