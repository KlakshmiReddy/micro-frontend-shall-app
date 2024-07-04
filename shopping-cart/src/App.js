import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
function App({ cart, onCart }) {
  return (
    <Navbar className="fixed-top bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Cart Items: <button onClick={() => onCart()}>{cart?.length}</button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default App;
