import { TICKERS_DATA_RECEIVED, INTERVAL_UPDATED } from './tickers.actions';

const initialState = {
  tickersData: [],
  interval: 5000,
};

const tickersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TICKERS_DATA_RECEIVED: {
      return {
        ...state,
        tickersData: action.payload.tickersData,
      };
    }

    case INTERVAL_UPDATED: {
      return {
        ...state,
        interval: action.payload.interval,
      };
    }

    default:
      return state;
  }
};

export default tickersReducer;
