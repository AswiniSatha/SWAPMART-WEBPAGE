import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from'../Assets/logo_1.png';
import './navbar.css';
import Badge from "react-bootstrap/Badge";
import {
  BrowserRouter as Router, Link
} from "react-router-dom";

function CollapsibleExample({cartList}) {
  return (
    <div className='header'>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
           <img src={logo} width="100px" height="60px" alt="Logo"></img> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
             
             
          <Link className='nav-link'  to="/">Home</Link>
          <Link className='nav-link' to='/about'>About</Link>
          <Link className='nav-link' to='/contact'>Contact</Link> 
           
          
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
              <NavDropdown.Item href="#action/3.2">Books</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Furnitures</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Bags</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <Nav>
            <Link className='nav-link' to='/signup'>Signup</Link>
            <Link className='nav-link' to='/signin'>Login</Link>
            <Link className='nav-link' to="/cart">
            <svg  className='cart_symbol' fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path>
            </svg>
            <Badge pill>{cartList.length}</Badge>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default CollapsibleExample;