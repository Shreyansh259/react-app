import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ActivityPage from "./pages/ActivityPage";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SettingsPage from "./pages/AccountPage/SettingsPage";
import ProfilePage from "./pages/AccountPage/ProfilePage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.scss";

const selectUser = state => state.auth.user;
const menuPosition = state => state.menu.open;

const App = () => {
  const user = useSelector(selectUser);
  const isOpen = useSelector(menuPosition);
  const history = useHistory();
  if (!user) {
    history.push("/login");
  }
  return (
    <div>
      <ToastContainer autoClose={3000} hideProgressBar />
      <Navbar userName={user} />
      <Sidebar />
      <main className={`main-content ${isOpen ? "open" : ""}`}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route
            path="/activity/:activityType"
            exact
            component={ActivityPage}
          />
          <Route path="/account/profile" exact component={ProfilePage} />
          <Route path="/account/settings" exact component={SettingsPage} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
