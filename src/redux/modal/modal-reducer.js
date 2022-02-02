import { modalActiontype } from "./modal-Actiontype";

const INITIALSTATE = {
  modal: null,
};

export const modalReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case modalActiontype.SHOW_MODAL:
      return {
        ...state,
        modal:action.payload
      };
    default:
      return state;
  }
};
