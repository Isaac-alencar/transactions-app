import { httpClient } from "../services/api/httpClient";

import type { Transaction } from "../shared/types";

type ApiResponse = {
  id: number;
  transaction_id: string;
  cc_owner_name: string;
  cc_number: string;
  cc_expiration_date: string;
  cc_security_code: number;
  amount: number;
};

export const fetchTransactions = async (): Promise<Transaction[]> => {
  const response = await httpClient.get<ApiResponse[]>("/transactions");
  const { data } = response;

  return data.map(mapResponseToAppFormat);
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
