import fetchBoredActivity from "../apis/fetchBoredActivity";

export const LOAD_ACTIVITY = "LOAD_ACTIVITY";
export const START_LOAD_ACTIVITY = "START_LOAD_ACTIVITY";

export const getActivity = activityType => {
  return async dispatch => {
    dispatch(startLoadActivity(activityType));
    const data = await fetchBoredActivity(activityType);
    dispatch(loadActivity(data));
  };
};

export const startLoadActivity = (activityType) => ({
  type: START_LOAD_ACTIVITY,
  activityType
});

export const loadActivity = (activity) => ({
  type: LOAD_ACTIVITY,
  activity
});
