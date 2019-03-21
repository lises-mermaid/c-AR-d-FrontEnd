import axios from "axios";

//ACTION TYPES

const CREATE_CARD = "CREATE_CARD";
const SAVE_VIDEO = "SAVE_VIDEO";
const SAVE_MESSAGE = "SAVE_MESSAGE";
const SAVE_CARD_TEMPLATE = "SAVE_CARD_TEMPLATE";

//INITIAL STATE

const initialState = {
  cardTemplate: 0,
  video: {},
  message: ""
};

//ACTION CREATORS

export const saveVideo = video => ({
  type: SAVE_VIDEO,
  video
});

export const saveMessage = message => ({
  type: SAVE_MESSAGE,
  message
});

export const saveCardTemplate = cardTemplate => ({
  type: SAVE_CARD_TEMPLATE,
  cardTemplate
});

// generate QR picture, generate Card PDF (CardTemplate, QR Code, message),

//THUNKS

const server = "c-ar-d-server.herokuapp.com/api/cards";

export const generateCard = (
  video,
  message,
  cardTemplate
) => async dispatch => {
  try {
    const { data } = await axios.post(`${server}/create`, {
      video,
      message,
      cardTemplate
    });
    // dispatch(createCard(data));
  } catch (err) {
    console.error(err);
  }
};

//REDUCER

export default function(state = initialState, action) {
  switch (action.type) {
    case SAVE_VIDEO:
      return { ...state, video: action.video };
    case SAVE_MESSAGE:
      return { ...state, message: action.message };
    case SAVE_CARD_TEMPLATE:
      return { ...state, cardTemplate: action.cardTemplate };
    default:
      return state;
  }
}
