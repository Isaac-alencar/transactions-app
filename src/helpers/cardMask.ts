export function maskCardNumber(cardNumber: string): string {
  if (cardNumber.length <= 4) {
    throw new Error(
      "Invalid card number. It must be a string with more than 4 characters."
    );
  }

  const maskedSection = "*".repeat(cardNumber.length - 4);
  const visibleSection = cardNumber.slice(-4);

  return `${maskedSection}${visibleSection}`;
}
