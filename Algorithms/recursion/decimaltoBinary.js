function decimaltoBinary(number, binary) {
  if (number == 0) {
    return binary
  }
  const value = number % 2;
  binary = value + binary
  return decimaltoBinary(parseInt(number / 2), binary);
}

console.log(decimaltoBinary(6, ''));
