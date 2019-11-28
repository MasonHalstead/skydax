import * as constants from 'ducks/types';

// ------ USER ACTIONS ------ //
export const loginUser = user => ({
  type: constants.LOGIN_USER,
  payload: user,
});
export const updateUser = user => ({
  type: constants.UPDATE_USER,
  payload: user,
});
export const logoutUser = () => ({
  type: constants.LOGOUT_USER,
});

// ------ MODALS ACTIONS ------ //
export const setModal = modal => ({
  type: constants.SET_MODAL,
  payload: modal,
});

// ------ SETTINGS ACTIONS ------ //
export const setErrorMessage = message => ({
  type: constants.SET_ERROR_MESSAGE,
  payload: message,
});
export const setLoading = loading => ({
  type: constants.SET_LOADING,
  payload: loading,
});

// ------ STRATEGIES ACTIONS ------ //
export const setStrategies = strategies => ({
  type: constants.SET_STRATEGIES,
  payload: strategies,
});
export const clearStrategies = () => ({
  type: constants.CLEAR_STRATEGIES,
});

// ------ STRATEGY ACTIONS ------ //
export const setStrategy = strategy => ({
  type: constants.SET_STRATEGY,
  payload: strategy,
});
export const clearStrategy = () => ({
  type: constants.CLEAR_STRATEGY,
});

// ------ WALLET ACTIONS ------ //
export const setWallet = wallet => ({
  type: constants.SET_WALLET,
  payload: wallet,
});
export const clearWallet = () => ({
  type: constants.CLEAR_WALLET,
});

// ------ CANDLE ACTIONS ------ //
export const setCandle = candle => ({
  type: constants.SET_CANDLE,
  payload: candle,
});
export const clearCandle = () => ({
  type: constants.CLEAR_CANDLE,
});

// ------ FUNDING ACTIONS ------ //
export const setFunding = funding => ({
  type: constants.SET_FUNDING,
  payload: funding,
});
export const clearFunding = () => ({
  type: constants.CLEAR_FUNDING,
});

// ------ CANDLE ACTIONS ------ //
export const setBitmexCandles = candles => ({
  type: constants.SET_BITMEX_CANDLES,
  payload: candles,
});
export const clearBitmexCandles = () => ({
  type: constants.CLEAR_BITMEX_CANDLES,
});
export const setKrakenCandles = candles => ({
  type: constants.SET_KRAKEN_CANDLES,
  payload: candles,
});
export const clearKrakenCandles = () => ({
  type: constants.CLEAR_KRAKEN_CANDLES,
});
