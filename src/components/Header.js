import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { useContext } from "react";
import AuthContext from "./AuthContext";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import { useSelector } from "react-redux";
import auth from "../store/auth";

const Header = () => {
  const isPremium = useSelector((state) => state.expenses.showPremium);
  const dispatch = useDispatch();
  // const authCtx = useContext(AuthContext);
  const history = useHistory();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  //  const isAuthenticated = localStorage.getItem("isLoggedIn");

  const logout = () => {
    dispatch(authActions.logout());
  };
  useEffect(() => {
    console.log(`Login hai ki nahi  ${isAuthenticated}`);
  }, []);
  return (
    <Navbar bg="light" expand="sm">
      <Navbar.Brand href="#">My App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-5">
          {!isAuthenticated && (
            <>
              <Nav.Link as={NavLink} activeClassName="active" to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={NavLink} activeClassName="active" to="/signup">
                Signup
              </Nav.Link>
            </>
          )}
          

          {isAuthenticated && (
            <Nav.Link as={NavLink} activeClassName="active" to="/DailyExpense">
              Daily expenses
            </Nav.Link>
          )}

{isAuthenticated && (
            <Nav.Link
              as={NavLink}
              activeClassName="active"
              to="/login"
              onClick={logout}
            >
              Logout
            </Nav.Link>
          )}

{isPremium && (
            <Nav.Link
              as={NavLink}
              activeClassName="active"
              to="/premium"
            >
              Activate Premium
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
