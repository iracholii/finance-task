import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../tickers.actions';
import '../styles/settings.css';

const Settings = ({ interval, intervalUpdated }) => {
  const [value, setValue] = useState(interval / 1000);

  const changeHandler = event => {
    setValue(event.target.value);
  };

  const clickHandler = event => {
    event.preventDefault();
    intervalUpdated(value * 1000);
  };

  return (
    <form className="settings">
      Update every
      <input
        className="settings__input"
        type="number"
        min="1"
        max="30"
        value={value}
        placeholder="second"
        onChange={changeHandler}
      />
      seconds
      <button className="settings__button" type="submit" onClick={clickHandler}>
        Confirm
      </button>
    </form>
  );
};

const mapState = state => {
  return {
    interval: state.interval,
  };
};

const mapDispatch = {
  intervalUpdated: actions.intervalUpdated,
};

export default connect(mapState, mapDispatch)(Settings);
