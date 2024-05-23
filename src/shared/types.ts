export type Transaction = {
  transaction_id: string;
  amount: number;
  cardHolder: string;
  cardNumber: string;
  expirationDate: string;
  securityCode: string;
};

export type ApiResponse = {
  id: number;
  transaction_id: string;
  cc_owner_name: string;
  cc_number: string;
  cc_expiration_date: string;
  cc_security_code: number;
  amount: number;
};

export type ApiDataFormat = {
  transaction: {
    user_id: 1;
    cc_owner_name: string;
    cc_number: string;
    cc_expiration_date: string;
    cc_security_code: number;
    amount: number;
  };
};

export type CreateTransactionDTO = Omit<Transaction, "transaction_id">;
