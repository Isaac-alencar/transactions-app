export type Transaction = {
  transaction_id: string;
  amount: number;
  cardHolder: string;
  cardNumber: string;
  expirationDate: string;
  securityCode: string;
};
