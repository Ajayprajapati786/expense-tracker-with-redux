import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { useContext } from "react";
import AuthContext from "./AuthContext";
import { useHistory } from "react-router-dom";

const Header = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const logout = () => {
    authCtx.logout();
  };
  useEffect(() => {
    console.log(`Login hai ki nahi  ${authCtx.isLoggedIn}`);
  }, []);
  return (
    <Navbar bg="light" expand="sm">
      <Navbar.Brand href="#">My App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-5">
          {!authCtx.isLoggedIn && (
            <>
              <Nav.Link as={NavLink} activeClassName="active" to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={NavLink} activeClassName="active" to="/signup">
                Signup
              </Nav.Link>
            </>
          )}
          {authCtx.isLoggedIn && (
            <Nav.Link
              as={NavLink}
              activeClassName="active"
              to="/login"
              onClick={logout}
            >
              Logout
            </Nav.Link>
          )}

          {authCtx.isLoggedIn && (
            <Nav.Link as={NavLink} activeClassName="active" to="/DailyExpense">
              Daily expenses
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
