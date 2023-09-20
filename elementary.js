const sign = (number) => {
  if (number > 0) {
    return 1;
  } else if (number < 0) {
    return -1;
  } else {
    return 0;
  }
};

const sameSign = (number1, number2) => {
  return sign(number1) == sign(number2) ? true : false;
};

const multiply = (a, b, sign = 1) => {
  if (!sameSign(a, b)) {
    sign = -sign;
  }
  if (b === 0 || a === 0) {
    return 0;
  }
  return sign == -1 ? -(Math.abs(a) + multiply(Math.abs(a), Math.abs(b) - 1)) : (Math.abs(a) + multiply(Math.abs(a), Math.abs(b) - 1));
};

const divide = (a, b, sign=1) => {
  if (!sameSign(a, b)) {
    sign = -sign;
  }
  if (Math.abs(a) < Math.abs(b)) {
    return 0;
  }
  return sign === -1 ? -(1 + divide(Math.abs(Math.abs(a) - Math.abs(b)), Math.abs(b))) : (1 + divide(Math.abs(Math.abs(a) - Math.abs(b)), Math.abs(b)));
};

const modulo = (a, b, sign=1) => {
  if (b === 0) {
    console.error("Modulo by zero");
    return undefined;
  }
  const _result = multiply(divide(a, b), b)
  const result = multiply(sign, (a - _result))
  return result
};