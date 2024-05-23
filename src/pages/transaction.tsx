import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { createTransaction } from "../infrastructure/createTransaction";

import styles from "../styles/pages/transaction.module.scss";

const initialValue = {
  amount: 0,
  cardHolder: "",
  cardNumber: "",
  expirationDate: "",
  securityCode: "",
};

type Transaction = typeof initialValue;

export const NewTransaction = () => {
  const [transaction, setTransaction] = useState<Transaction>(initialValue);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const isFormValid = Object.keys(transaction).some(
    (key) => !transaction[key as keyof Transaction]
  );

  const handleChange = <K extends keyof Transaction>(
    name: K,
    value: Transaction[K]
  ) => {
    setTransaction((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await createTransaction(transaction);
      if (response) {
        toast.success("Transaction created with successfully!", {
          theme: "colored",
        });
      }
    } catch (e) {
      toast.error((e as Error).message, {
        theme: "colored",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && (
        <div className={styles.LoadingState}>
          <div className={styles.Spinner}></div>
        </div>
      )}
      <main className={styles.Main} onSubmit={onSubmit}>
        <div className={styles.Navigation}>
          <Link className={styles.Link} to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="black"
                  d="M5 6a1 1 0 0 0-2 0v12a1 1 0 1 0 2 0zm7.703 10.95a1 1 0 0 0 0-1.415L10.167 13H20a1 1 0 1 0 0-2h-9.833l2.536-2.536a1 1 0 0 0-1.415-1.414l-4.242 4.243a1 1 0 0 0 0 1.414l4.242 4.243a1 1 0 0 0 1.415 0"
                />
              </g>
            </svg>
          </Link>
          <h2>New transaction</h2>
        </div>
        <form className={styles.Form}>
          <div className={styles.FormRow}>
            <label className={styles.Label}>Amount</label>
            <input
              value={transaction.amount}
              onChange={(e) => {
                handleChange("amount", Number(e.target.value));
              }}
              type="number"
              name="amount"
              placeholder="Amount"
              className={`${styles.Input} ${styles.AmountInput}`}
              required
            />
          </div>
          <h3>Card Information</h3>
          <div className={styles.CreditCardInfo}>
            <div className={styles.FormRow}>
              <label className={styles.Label}>Cardholder</label>
              <input
                value={transaction.cardHolder}
                onChange={(e) => {
                  handleChange("cardHolder", e.target.value);
                }}
                type="text"
                name="cardHolder"
                placeholder="Cardholder"
                className={styles.Input}
                required
              />
            </div>
            <div className={styles.FormRow}>
              <label className={styles.Label}>Card Number</label>
              <input
                value={transaction.cardNumber}
                onChange={(e) => {
                  handleChange("cardNumber", e.target.value);
                }}
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                className={styles.Input}
                required
              />
            </div>
            <div className={styles.FormRow}>
              <label className={styles.Label}>Expiration Date</label>
              <input
                value={transaction.expirationDate}
                onChange={(e) => {
                  handleChange("expirationDate", e.target.value);
                }}
                type="text"
                name="expirationDate"
                placeholder="Expiration Date"
                className={styles.Input}
                required
              />
            </div>
            <div className={styles.FormRow}>
              <label className={styles.Label}>Security Code</label>
              <input
                value={transaction.securityCode}
                max={3}
                maxLength={3}
                onChange={(e) => {
                  handleChange("securityCode", e.target.value);
                }}
                type="text"
                name="securityCode"
                placeholder="Security Code"
                className={styles.Input}
                required
              />
            </div>
          </div>
          <div className={styles.FormRow}>
            <button
              type="submit"
              className={styles.SubmitButton}
              disabled={isFormValid}
            >
              {isLoading ? "Creating..." : "Create Transaction"}
            </button>
          </div>
        </form>
      </main>
    </>
  );
};
