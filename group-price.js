function groupPrice(str) {
  const pricePattern = /([A-Z]{3}|\$)([0-9]+\.[0-9]+)/g;
  const prices = str.match(pricePattern);

  if (!prices) return [];

  return prices.map((price) => {
    const [_, currency, amount] = price.match(/([A-Z]{3}|\$)([0-9]+\.[0-9]+)/);
    return [price, amount, currency];
  });
}
