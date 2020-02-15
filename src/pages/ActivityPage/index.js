import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getActivity } from "../../actions/activityActions";
import LoadingIndicator from "../../components/LoadingIndicator";
import "./ActivityPage.scss";

const selectIsLoadingActivity = activityType => state =>
  state.activities.loading[activityType];

const selectLoadedActivity = activityType => state =>
  state.activities.loaded[activityType];

const ActivityPage = props => {
  const dispatch = useDispatch();
  const { activityType } = useParams();
  useEffect(() => {
    dispatch(getActivity(activityType));
  }, [activityType]);
  const isLoading = useSelector(selectIsLoadingActivity(activityType));
  const activity = useSelector(selectLoadedActivity(activityType));
  if (isLoading || !activity) {
    return <LoadingIndicator />;
  }

  const { activity: activityTitle, type, participants } = activity;
  const activityHeader = type === "recreational" ? "Recreational Activity" : "Cooking Activity";

  return (
    <div className="activity-page page">
      <h1 className="header">{activityHeader}</h1>
      <div className="activity-title">{activityTitle}</div>
      <div className="activity-type">{type}</div>
      <div className="activity-participant">{participants} participants</div>
    </div>
  );
};

export default ActivityPage;
