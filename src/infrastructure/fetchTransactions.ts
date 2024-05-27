import { httpClient } from "../services/api/httpClient";

import type { Transaction, ApiResponse } from "../shared/types";

export const fetchTransactions = async (): Promise<Transaction[]> => {
  const response = await httpClient.get<ApiResponse[]>("/transactions");
  const { data } = response;

  return data.map(mapResponseToAppFormat);
};

const mapResponseToAppFormat = (item: ApiResponse): Transaction => {
  return {
    amount: item.amount,
    cardHolder: item.card_holder,
    cardNumber: item.card_number,
    securityCode: String(item.card_security_code),
    expirationDate: item.card_expiration_date,
    status: item.status,
    transaction_id: item.transaction_id,
  };
};
