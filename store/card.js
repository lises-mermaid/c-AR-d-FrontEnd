import axios from "axios";

//ACTION TYPES

const GET_ALL_SENT_CARDS = "GET_ALL_SENT_CARDS";
const GET_ALL_RECEIVED_CARDS = "GET_ALL_RECEIVED_CARDS";

//INITIAL STATE

const initialState = {
  sentCards: [],
  receivedCards: []
};

//ACTION CREATORS

const getAllSentCards = cards => ({
  type: GET_ALL_SENT_CARDS,
  cards
});
const getAllReceivedCards = cards => ({
  type: GET_ALL_RECEIVED_CARDS,
  cards
});

//THUNKS

const server = "c-ar-d-server.herokuapp.com/api/cards";

export const getAllSentCardsThunk = () => async dispatch => {
  try {
    const { data } = await axios.get(`${server}`);
    dispatch(getAllSentCards(data));
  } catch (err) {
    console.error(err);
  }
};

export const getAllReceivedCardsThunk = () => async dispatch => {
  try {
    const { data } = await axios.get(`${server}/received`);
    dispatch(getAllReceivedCards(data));
  } catch (err) {
    console.error(err);
  }
};

//REDUCER

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_RECEIVED_CARDS:
      return {...state, sentCards: action.cards}
    case GET_ALL_SENT_CARDS:
      return {...state, receivedCards: action.cards}
    default:
      return state
  }
}
