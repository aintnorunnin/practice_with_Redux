import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/authenticationSlice";
import classes from "./Header.module.css";

interface HeaderProps {
  isAuthenticated: boolean;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {props.isAuthenticated && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
