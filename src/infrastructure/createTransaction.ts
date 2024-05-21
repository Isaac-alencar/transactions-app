import type { Transaction } from "../shared/types";

import { httpClient } from "../services/api/httpClient";

type ApiResponse = {
  id: number;
  transaction_id: string;
  cc_owner_name: string;
  cc_number: string;
  cc_expiration_date: string;
  cc_security_code: number;
  amount: number;
};

type ApiDataFormat = {
  transaction: {
    cc_owner_name: string;
    cc_number: string;
    cc_expiration_date: string;
    cc_security_code: number;
    amount: number;
  };
};

type CreateTransactionDTO = Omit<Transaction, "transaction_id">;

export const createTransaction = async (
  data: CreateTransactionDTO
): Promise<Transaction> => {
  try {
    const response = await httpClient.post<ApiResponse>("/transactions", {
      data: mapToApiFormat(data),
    });

    const { data: newTransaction } = response;

    return mapResponseToAppFormat(newTransaction);
  } catch (error: unknown) {
    throw new Error((error as Error).message);
  }
};

const mapResponseToAppFormat = (item: ApiResponse): Transaction => {
  return {
    amount: item.amount,
    cardHolder: item.cc_owner_name,
    cardNumber: item.cc_number,
    securityCode: String(item.cc_security_code),
    expirationDate: item.cc_expiration_date,
    transaction_id: item.transaction_id,
  };
};

const mapToApiFormat = (item: CreateTransactionDTO): ApiDataFormat => {
  return {
    transaction: {
      amount: item.amount,
      cc_owner_name: item.cardHolder,
      cc_security_code: Number(item.securityCode),
      cc_expiration_date: item.expirationDate,
      cc_number: item.cardNumber,
    },
  };
};
