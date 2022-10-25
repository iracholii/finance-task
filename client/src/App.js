import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Settings from './tickers/components/Settings';
import TickersTable from './tickers/components/TickersTable';

function App() {
  return (
    <Provider store={store}>
      <Settings />
      <TickersTable />
    </Provider>
  );
}

export default App;
