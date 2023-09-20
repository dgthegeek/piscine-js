// Function to mimic the * (multiply) operator
function multiply(a, b) {
  let result = 0;
  for (let i = 0; i < b; i++) {
    result += a;
  }
  return result;
}

// Function to mimic the / (integer division) operator
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }

  let quotient = 0;
  let remaining = a;

  while (remaining >= b) {
    remaining -= b;
    quotient++;
  }

  return quotient;
}

// Function to mimic the % (modulo) operator
function modulo(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }

  let remaining = a;
  while (remaining >= b) {
    remaining -= b;
  }

  return remaining;
}

// Example usages:
const product = multiply(5, 3);
const quotient = divide(15, 5);
const remainder = modulo(15, 7);

console.log("Product:", product); // Output: Product: 15
console.log("Quotient:", quotient); // Output: Quotient: 3
console.log("Remainder:", remainder); // Output: Remainder: 1