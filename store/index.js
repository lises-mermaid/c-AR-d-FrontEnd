import { createStore, applyMiddleware, combineReducers } from 'redux';
import user from './user'
import card from './card'
import generateCard from './generateCard'
import thunkMiddleware from 'redux-thunk';

const reducer = combineReducers({user, card, generateCard});

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
export * from './user'
export * from './card'
export * from './generateCard'
