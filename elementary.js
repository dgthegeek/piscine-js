function multiply(a, b) {
  let result = 0;
  for (let i = 0; i < b; i++) {
    result += a;
  }
  return result;
}

function divide(a, b) {
  let quotient = 0;
  let remaining = a;

  while (remaining >= b) {
    remaining -= b;
    quotient++;
  }

  return quotient;
}

function modulo(a, b) {
  let remaining = a;
  while (remaining >= b) {
    remaining -= b;
  }

  return remaining;
}
