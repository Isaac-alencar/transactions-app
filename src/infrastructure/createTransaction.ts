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
      user_id: 1,
      amount: item.amount,
      cc_owner_name: item.cardHolder,
      cc_security_code: Number(item.securityCode),
      cc_expiration_date: item.expirationDate,
      cc_number: item.cardNumber,
    },
  };
};
