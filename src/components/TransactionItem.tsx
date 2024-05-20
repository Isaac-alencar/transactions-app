import styles from "../styles/components/TransactionItem.module.scss";

export const Transaction = () => (
  <li className={styles.Transaction}>
    <h3>Transaction</h3>
    <span>78d80091-5748-4000-b9f7-7ab506133679</span>

    <div className={styles.CreditCardInfo}>
      <span>John Doe</span>
      <span>4456 **** **** **49</span>
    </div>

    <p>
      {new Intl.NumberFormat("en-IN", {
        maximumSignificantDigits: 4,
      }).format(20.99)}
    </p>
  </li>
);
