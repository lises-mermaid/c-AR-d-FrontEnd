import axios from 'axios';

/**
 * ACTION TYPES
 */

const GET_USER = 'GET_USER';
const REMOVE_USER = 'REMOVE_USER';

/**
 * INITIAL STATE
 */
const defaultUser = {};

/**
 * ACTION CREATORS
 */
const getUser = user => ({ type: GET_USER, user });
const removeUser = () => ({ type: REMOVE_USER });

/**
 * THUNK CREATORS
 */
const server = 'https://c-ar-d-server.herokuapp.com';
export const me = () => async dispatch => {
  try {
    const res = await axios.get(`${server}/auth/me`);
    dispatch(getUser(res.data || defaultUser));
  } catch (err) {
    console.error(err);
  }
};

export const signup = (email, username, password, history) => async dispatch => {
  let res;
  try {
    res = await axios.post(`${server}/auth/signup`, {
      email,
      username,
      password
    });
  } catch (authError) {
    return dispatch(getUser({ error: authError }));
  }

  try {
    dispatch(getUser(res.data));
    history.push('/');
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr);
  }
};

export const login = (email, password, history) => async dispatch => {
  let res;
  try {
    res = await axios.post(`${server}/auth/login`, { email, password });
  } catch (authError) {
    return dispatch(getUser({ error: authError }));
  }

  try {
    dispatch(getUser(res.data));
    history.push('/');
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr);
  }
};

export const logout = history => async dispatch => {
  try {
    await axios.post(`${server}/auth/logout`);
    dispatch(removeUser());
    history.push('/login');
  } catch (err) {
    console.error(err);
  }
};

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user;
    case REMOVE_USER:
      return defaultUser;
    default:
      return state;
  }
}
