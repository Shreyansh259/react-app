import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { toast } from "react-toastify";

import "./ProfilePage.scss";

const selectAccount = state => state.account.accountSettings;

const ProfilePage = () => {
  const account = useSelector(selectAccount);
  const history = useHistory();
  if (!account) {
    history.push("/account/settings");
    toast.error("Account settings are not configured yet!");
    return null;
  }
  const { firstName, lastName, email } = account;

  return (
    <div className="profile-page page">
      <h1 className="header">Account Profile</h1>
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
