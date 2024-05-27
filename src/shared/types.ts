export type Transaction = {
  transaction_id: string;
  amount: number;
  cardHolder: string;
  cardNumber: string;
  expirationDate: string;
  securityCode: string;
  status: string;
};

export type ApiResponse = {
  id: number;
  transaction_id: string;
  card_holder: string;
  card_number: string;
  card_expiration_date: string;
  card_security_code: number;
  amount: number;
  status: string;
};

export type ApiDataFormat = {
  transaction: {
    user_id: 1;
    card_holder: string;
    card_number: string;
    card_expiration_date: string;
    card_security_code: number;
    amount: number;
  };
};

export type CreateTransactionDTO = Omit<Transaction, "transaction_id">;
