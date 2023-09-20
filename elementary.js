function multiply(a, b) {
  let result = 0;
  const isNegative = (a < 0) !== (b < 0); // Check if the result should be negative

  // Make both numbers positive for multiplication
  a = Math.abs(a);
  b = Math.abs(b);

  for (let i = 0; i < b; i++) {
    result += a;
  }

  return isNegative ? -result : result;
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

