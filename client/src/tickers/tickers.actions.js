export const TICKERS_DATA_RECEIVED = 'TICKERS_DATA_RECEIVED';
export const INTERVAL_UPDATED = 'INTERVAL_UPDATED';

export const tickersDataReceived = (tickersData) => {
  return {
    type: TICKERS_DATA_RECEIVED,
    payload: { tickersData },
  };
};

export const intervalUpdated = (interval) => {
  return {
    type: INTERVAL_UPDATED,
    payload: { interval },
  };
};
