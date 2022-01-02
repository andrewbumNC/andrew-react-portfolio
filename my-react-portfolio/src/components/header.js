import React, {useState} from 'react';
import { Navbar, Container, NavDropdown, Nav, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aboutme from './aboutme';
import Contactme from './contact';


function Headerex() {


const [changeBody, setChangeBody] = useState([<Aboutme/>])

const handleAboutMeClick = () => {
  setChangeBody(<Aboutme/>)
}

const handleContactClick = () => {
  setChangeBody(<Contactme/>)
}

  return (
    <div className="App">
      <header className="App-header">
      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home" onClick={handleContactClick}>Home</Nav.Link>
        <Nav.Link href="#link" onClick={handleAboutMeClick}>About me</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      </header>
 
 {changeBody}
    </div>

   
  );

}

export default Headerex