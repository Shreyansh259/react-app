import { combineReducers } from "redux";
import activitiesReducer from "./activitiesReducer";
import menuReducer from "./menuReducer";
import authReducer from "./authReducer";
import accountReducer from './accountReducer';

const rootReducer = combineReducers({
  activities: activitiesReducer,
  menu: menuReducer,
  auth: authReducer,
  account: accountReducer
});

export default rootReducer;
