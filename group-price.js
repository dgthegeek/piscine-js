function groupPrice(str) {
  const pricePattern = /(([A-Z]{3})|\$)([0-9]+\.[0-9]+)/g;
  const prices = str.match(pricePattern) || [];
  const res = [];

  prices.forEach((price) => {
    const amountAndCurrency = price.match(/([0-9]+)\.([0-9]+)/);
    if (amountAndCurrency) {
      res.push([price, amountAndCurrency[1], amountAndCurrency[2]]);
    }
  });

  return res;
}
