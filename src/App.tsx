import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Navbar, Nav, Button } from "react-bootstrap";

function App() {
  const [isHome, setHome] = useState<Boolean>(false);
  const [isAbout, setAbout] = useState<Boolean>(false);
  const [isContact, setContact] = useState<Boolean>(false);
  const setAllFalse = () => {
    setHome(false);
    setAbout(false);
    setContact(false);
  };
  const Header = () => {
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-SPA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Button
                variant="outline-success"
                onClick={() => {
                  setAllFalse();
                  setHome(true);
                }}
              >
                Home
              </Button>
              <Button
                variant="outline-success"
                onClick={() => {
                  setAllFalse();
                  setAbout(true);
                }}
              >
                About
              </Button>
              <Button
                variant="outline-success"
                onClick={() => {
                  setAllFalse();
                  setContact(true);
                }}
              >
                Conact
              </Button>
            </Nav>
            <Button
              variant="outline-success"
              onClick={() => {
                window.open("https://github.com/ShahrozTanveer", "_blank");
              }}
            >
              Github
            </Button>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  };
  if (isHome) {
    return (
      <div className="App">
        <Header />
        <Home />
      </div>
    );
  } else if (isAbout) {
    return (
      <div className="App">
        <Header />
        <About />
      </div>
    );
  } else if (isContact) {
    return (
      <div className="App">
        <Header />
        <Contact />
      </div>
    );
  }
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
