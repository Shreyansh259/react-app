import { SET_USER } from "../actions/authActions";

const INITIAL_STATE = {
  user: null
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, {
        user: action.user
      });
    default:
      return state;
  }
};

export default authReducer;
