import React, { useEffect } from 'react';
import { io } from 'socket.io-client';
import { connect } from 'react-redux';
import * as actions from '../tickers.actions';
import Ticker from './Ticker';
import '../styles/tickersTable.css';

const socket = io('http://localhost:4000');

const TickersTable = ({ tickers, interval, tickersDataReceived }) => {
  const tickersInfo = {
    AAPL: { company: 'Apple', colour: '#666666' },
    GOOGL: { company: 'Alphabet', colour: '#d55e25' },
    MSFT: { company: 'Microsoft', colour: '#0288d1' },
    AMZN: { company: 'Amazon', colour: '#c26c03' },
    FB: { company: 'Facebook', colour: '#51912b' },
    TSLA: { company: 'Tesla', colour: '#e31937' },
  };

  useEffect(() => {
    socket.emit('start', interval);
    socket.on('ticker', data => {
      tickersDataReceived(data);
    });
  }, []);

  useEffect(() => {
    socket.emit('intervalUpdate', interval);
  }, [interval]);

  if (tickers.length < 1) {
    return null;
  }

  return (
    <table className="tickers-table">
      <thead>
        <tr className="tickers-table__row">
          <th className="tickers-table__element">Ticker</th>
          <th className="tickers-table__element">Company</th>
          <th className="tickers-table__element">Exchange</th>
          <th className="tickers-table__element">Price</th>
          <th className="tickers-table__element">Change</th>
          <th className="tickers-table__element">Change in percent</th>
          <th className="tickers-table__element">Dividend</th>
          <th className="tickers-table__element">Yield</th>
        </tr>
      </thead>
      <tbody>
        {tickers.map(ticker => (
          <Ticker key={ticker.ticker} tickerObj={ticker} tickersInfo={tickersInfo} />
        ))}
      </tbody>
    </table>
  );
};

const mapState = state => {
  return {
    tickers: state.tickersData,
    interval: state.interval,
  };
};

const mapDispatch = {
  tickersDataReceived: actions.tickersDataReceived,
};

export default connect(mapState, mapDispatch)(TickersTable);
