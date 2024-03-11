// utils/currencyConverter.js
 
const API_ENDPOINT = 'https://open.er-api.com/v6/latest'; // exchangeratesapi.io endpoint
 
const fetchExchangeRates = async () => {
  try {
    const response = await fetch(API_ENDPOINT);
    const data = await response.json();
    return data.rates; // Exchange rates are available in the "rates" field
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    return null;
  }
};
 
const convertCurrency = async (amount, sourceCurrency, targetCurrency) => {
  const exchangeRates = await fetchExchangeRates();
 
  if (!exchangeRates) {
    console.error('Failed to fetch exchange rates.');
    return null;
  }
 
  // Ensure that source and target currencies are available in the exchange rates
  if (!(sourceCurrency in exchangeRates) || !(targetCurrency in exchangeRates)) {
    console.error('Invalid currency');
    return null;
  }
 
  // Convert amount to Indian Rupees (base currency)
  const inrAmount = amount / exchangeRates[sourceCurrency];
 
  // Convert Indian Rupees to the target currency
  const convertedAmount = inrAmount * exchangeRates[targetCurrency];
 
  return convertedAmount.toFixed(2); // Keep only two decimal places
};
 
export default convertCurrency;