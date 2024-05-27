import { AxiosError } from "axios";

import { httpClient } from "../services/api/httpClient";

import type {
  ApiDataFormat,
  ApiResponse,
  CreateTransactionDTO,
  Transaction,
} from "../shared/types";

export const createTransaction = async (
  data: CreateTransactionDTO
): Promise<Transaction> => {
  try {
    const response = await httpClient.post<ApiResponse>("/transactions", {
      data: mapToApiFormat(data),
    });

    const { data: newTransaction } = response;

    return mapResponseToAppFormat(newTransaction);
  } catch (error) {
    if ((error as AxiosError).code === "ERR_BAD_REQUEST") {
      throw new Error("Check the all the information!");
    }

    throw new Error(
      "Error while creating this transaction, please try it later!"
    );
  }
};

const mapResponseToAppFormat = (item: ApiResponse): Transaction => {
  return {
    amount: item.amount,
    status: item.status,
    cardHolder: item.card_holder,
    cardNumber: item.card_number,
    securityCode: item.card_number,
    expirationDate: item.card_expiration_date,
    transaction_id: item.transaction_id,
  };
};

const mapToApiFormat = (item: CreateTransactionDTO): ApiDataFormat => {
  return {
    transaction: {
      user_id: 1,
      amount: item.amount,
      card_holder: item.cardHolder,
      card_security_code: Number(item.securityCode),
      card_expiration_date: item.expirationDate,
      card_number: item.cardNumber,
    },
  };
};
