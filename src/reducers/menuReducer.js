import { OPEN_MENU, CLOSE_MENU } from "../actions/menuActions";

const INITIAL_STATE = {
  open: false
};

const menuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_MENU:
      return Object.assign({}, state, {
        open: true
      });
    case CLOSE_MENU:
      return Object.assign({}, state, {
        open: false
      });
    default:
      return state;
  }
};

export default menuReducer;
