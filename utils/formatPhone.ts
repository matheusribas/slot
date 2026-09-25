export function formatPhone(phone: number) {
  const digits = String(phone).replace(/\D/g, "");
  const areaCode = digits.slice(0, 2);
  const number = digits.slice(2);

  if (number.length === 9) {
    return `(${areaCode}) ${number[0]} ${number.slice(1, 5)}-${number.slice(5)}`;
  }

  if (number.length === 8) {
    return `(${areaCode}) ${number.slice(0, 4)}-${number.slice(4)}`;
  }

  return digits;
}
