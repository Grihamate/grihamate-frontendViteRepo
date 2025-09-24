export const formatPrice = (price) => {
  if (!price) return "N/A"; // agar price missing hai

  if (price >= 10000000) {
    return (price / 10000000).toFixed(2) + " Cr";  // crore
  } else if (price >= 100000) {
    return (price / 100000).toFixed(2) + " Lakh"; // lakh
  } else {
    return price.toLocaleString("en-IN"); // thousand ya normal number
  }
};