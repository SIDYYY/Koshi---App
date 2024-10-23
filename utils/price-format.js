export const formatPrice = (priceString) => {
  // Function to format individual price
  const formatSinglePrice = (price) => {
    const numericPrice = parseInt(price.replace(/[^0-9]/g, ""), 10);
    if (numericPrice >= 1000000) {
      return `P${(numericPrice / 1000000).toFixed(1)}M`;
    }
    return `P${(numericPrice / 1000).toFixed(1)}K`;
  };

  // If the price contains a range (e.g., "P1,829,000 - P2,570,000")
  if (priceString.includes("-")) {
    const [lowPrice, highPrice] = priceString
      .split(" - ")
      .map(formatSinglePrice);
    return `${lowPrice} - ${highPrice}`;
  }

  // Otherwise, it's a single price
  return formatSinglePrice(priceString);
};
