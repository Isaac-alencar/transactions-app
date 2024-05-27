import type { Transaction } from "../shared/types";
import { maskCardNumber } from "../helpers/cardMask";
import styles from "../styles/components/TransactionItem.module.scss";

type TransactionItemProps = Omit<
  Transaction,
  "expirationDate" | "securityCode"
>;

export const TransactionItem = ({
  transaction_id,
  amount,
  cardHolder,
  cardNumber,
}: TransactionItemProps) => (
  <li className={styles.Transaction}>
    <h3>Transaction</h3>
    <span>{transaction_id}</span>

    <div className={styles.CreditCardInfo}>
      <span>{cardHolder}</span>
      <span>{maskCardNumber(cardNumber)}</span>
    </div>

    <p>
      {new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "USD",
      }).format(amount)}
    </p>
  </li>
);
