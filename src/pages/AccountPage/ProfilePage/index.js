import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import "./ProfilePage.scss";

const selectAccount = state => state.account.accountSettings;

const ProfilePage = () => {
  const account = useSelector(selectAccount);
  const history = useHistory();
  if (!account) {
    history.push("/account/settings");
    return <> </>;
  }
  const { firstName, lastName, email } = account;
  const userName = `${firstName} ${lastName}`;

  return (
    <div className="profile-page page">
      <h1>Account Profile</h1>
      {/* <div className="user-title">{userName}</div>
      <div className="user-email">{email}</div> */}
      <ul className="profile-list">
        <li className="list-element">Firs Name: {firstName}</li>
        <li className="list-element">Last Name: {lastName}</li>
        <li className="list-element">Email: {email}</li>
      </ul>
    </div>
  );
};

export default ProfilePage;
