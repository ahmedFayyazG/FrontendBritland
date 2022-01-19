import React, { Component } from "react";
import {
  Button,
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Dropdown,
  Container,
  input,
} from "react-bootstrap";
import { isAuthticated, Signout } from "../Auth";
import history from "./../helperMethod/history";

const Menu = () => {
  const { user } = isAuthticated();
  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Britland</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/tenet">Tenet</Nav.Link>
              <Nav.Link href="/landlord">Landlord</Nav.Link>
              <Nav.Link href="/mangement">Management</Nav.Link>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {`wellcome ${user.name}`}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Settings</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">about</Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-3"
                    onClick={() => {
                      Signout(() => {
                        history.push("/signin");
                      });
                    }}
                  >
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default Menu;
