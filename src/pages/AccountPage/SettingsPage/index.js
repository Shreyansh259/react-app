import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setAccount } from "../../../actions/accountActions";
import { toast } from "react-toastify";

import "./SettingsPage.scss";

const SettingsPage = props => {
  const [accountDetails, setAccountDetails] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });
  const [error, setError] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const onSaveHandler = () => {
    if (
      !accountDetails.firstName ||
      !accountDetails.lastName ||
      !accountDetails.email
    ) {
      setError("Please enter all required fields!");
      return;
    }
    dispatch(setAccount(accountDetails));
    toast.success("Account details added successfully");
    history.push('/account/profile');
  };

  const onSettingChange = ({ target }) => {
    setAccountDetails({
      ...accountDetails,
      [target.name]: target.value
    });
  };

  return (
    <div className="settings-page">
      <h1 className="header">Account Settings</h1>
      <form>
        <div className="first-name">
          <input
          className="settings-input"
            placeholder="First Name"
            name="firstName"
            onChange={onSettingChange}
          ></input>
        </div>
        <div className="last-name">
          <input
            className="settings-input"
            placeholder="Last Name"
            name="lastName"
            onChange={onSettingChange}
          ></input>
        </div>
        <div className="email">
          <input
            className="settings-input"
            placeholder="Email"
            name="email"
            type="email"
            onChange={onSettingChange}
          ></input>
        </div>
        <div className="save-button">
          <button type="button" className="settings-button" onClick={onSaveHandler}>
            SAVE
          </button>
        </div>
      </form>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default SettingsPage;
