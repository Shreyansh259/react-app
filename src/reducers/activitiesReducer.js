import { LOAD_ACTIVITY, START_LOAD_ACTIVITY } from "../actions/activityActions";

const INITIAL_STATE = {
  loading: {},
  loaded: {}
};

const activitiesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_ACTIVITY:
      return Object.assign({}, state, {
        loaded: Object.assign({}, state.loaded, {
          [action.activity.type]: action.activity
        }),
        loading: Object.assign({}, state.loading, {
          [action.activity.type]: false
        })
      });
    case START_LOAD_ACTIVITY:
      return Object.assign({}, state, {
        loading: Object.assign({}, state.loading, {
          [action.activityType]: true
        })
      });
    default:
      return state;
  }
};

export default activitiesReducer;
