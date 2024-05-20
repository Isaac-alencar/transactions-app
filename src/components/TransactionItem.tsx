import type { Transaction as TransactionType } from "../shared/types";
import styles from "../styles/components/TransactionItem.module.scss";

type TransactionCardProps = Omit<
  TransactionType,
  "expirationDate" | "securityCode"
>;

export const Transaction = ({
  transaction_id,
  amount,
  cardHolder,
  cardNumber,
}: TransactionCardProps) => (
  <li className={styles.Transaction}>
    <h3>Transaction</h3>
    <span>{transaction_id}</span>

    <div className={styles.CreditCardInfo}>
      <span>{cardHolder}</span>
      <span>{cardNumber}</span>
    </div>

    <p>
      {new Intl.NumberFormat("en-IN", {
        maximumSignificantDigits: 4,
      }).format(amount)}
    </p>
  </li>
);
