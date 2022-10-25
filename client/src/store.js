import { createStore } from 'redux';
import tickersReducer from './tickers/tickers.reducer';

const store = createStore(
  tickersReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
