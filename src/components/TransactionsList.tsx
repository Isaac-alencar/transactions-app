import { TransactionItem } from "./TransactionItem";
import type { Transaction as TransactionType } from "../shared/types";

import styles from "../styles/components/TransactionsList.module.scss";

type TransactionsListProps = {
  transactions: TransactionType[];
};

export const TransactionsList = ({ transactions }: TransactionsListProps) => {
  return (
    <ul className={styles.Transactions}>
      {transactions.length > 0 ? (
        transactions.map((transaction) => {
          console.log(transaction);
          return (
            <TransactionItem
              key={transaction.transaction_id}
              amount={transaction.amount}
              cardHolder={transaction.cardHolder}
              cardNumber={transaction.cardNumber}
              transaction_id={transaction.transaction_id}
            />
          );
        })
      ) : (
        <p>No transactions to show! :)</p>
      )}
    </ul>
  );
};
