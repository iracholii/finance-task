import React from 'react';

function Ticker({ tickerObj, tickersInfo }) {
  const { ticker, exchange, price, change, change_percent, dividend } = tickerObj;

  return (
    <tr className="tickers-table__row">
      <td className="tickers-table__element">
        <div
          className="tickers-table__ticker"
          style={{ backgroundColor: tickersInfo[ticker].colour }}
        >
          {ticker}
        </div>
      </td>
      <td className="tickers-table__element">{tickersInfo[ticker].company}</td>
      <td className="tickers-table__element">{exchange}</td>
      <td className="tickers-table__element">{price}$</td>
      <td className="tickers-table__element">{change}$</td>
      <td className="tickers-table__element">{change_percent}%</td>
      <td className="tickers-table__element">{dividend}</td>
      <td className="tickers-table__element">{tickerObj.yield}</td>
    </tr>
  );
}

export default Ticker;
