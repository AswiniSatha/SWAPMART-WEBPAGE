import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from'../Assets/logo_1.png';

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function CollapsibleExample() {
  return (
    <div className='header'>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
           <img src={logo} width="100px" height="60px"></img> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
             {/* <Link  to="/">Home</Link> */}
             <Nav.Link href="./">Home</Nav.Link>
            <Nav.Link href="./About">About</Nav.Link>
            <Nav.Link href="./Contact">Contact</Nav.Link>
          
            <NavDropdown title="Places" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Delhi</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Chennai</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Hyderabad</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mumbai</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Bangalore
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav><NavDropdown title="Category" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Electronics</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Hyderabad</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mumbai</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Bangalore
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Sign Up</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default CollapsibleExample;