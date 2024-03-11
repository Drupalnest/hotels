// middleware.js
import { setExchangeRates } from '../redux/actions';
 
const fetchExchangeRatesMiddleware = store => next => action => {
  if (action.type === 'FETCH_EXCHANGE_RATES') {
    // Fetch exchange rates here and dispatch the setExchangeRates action
    fetch('https://open.er-api.com/v6/latest/USD')
      .then(response => response.json())
      .then(data => {
        store.dispatch(setExchangeRates(data.rates));
      })
      .catch(error => console.error('Error fetching exchange rates:', error));
  }
 
  return next(action);
};
 
export default fetchExchangeRatesMiddleware;