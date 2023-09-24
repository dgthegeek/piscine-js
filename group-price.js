function groupPrice(str) {
  const pricePattern = /([A-Z]{3}|\$)([0-9]+\.[0-9]+)/g;
  const prices = str.match(pricePattern) || [];
  
  const groupedPrices = prices.map((price) => {
    const [symbol, amount] = price.match(/[A-Z]{3}|\$|\d+\.\d+/g);
    return [price, amount, symbol];
  });
  
  return groupedPrices;
}
