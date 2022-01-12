import React, { Fragment } from "react";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import Header from "./components/Header";
import "./App.css";
import { useSelector } from "react-redux";
import { AuthState } from "./store/authenticationSlice";
import UserProfile from "./components/UserProfile";

function App() {
  const authState: AuthState = useSelector(
    (state: any) => state.authentication
  );
  return (
    <Fragment>
      <Header isAuthenticated={authState.isAuthenticated}/>
      {!authState.isAuthenticated && <Auth />}
      {authState.isAuthenticated && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
