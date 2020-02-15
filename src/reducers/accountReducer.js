import { SET_ACCOUNT } from "../actions/accountActions";

const INITIAL_STATE = {
  accountSettings: null
};

const accountReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ACCOUNT:
      return Object.assign({}, state, {
        accountSettings: action.accountSettings
      });
    default:
      return state;
  }
};

export default accountReducer;
