import React, {useState} from 'react';
import { Navbar, Container, NavDropdown, Nav, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aboutme from './aboutme';
import Contactme from './contact';
import Resume from './resume';
import Portfolio from './portfolio';
import FooterPage from './footer';
import '../styles/header.css';

function Primary() {


const [changeBody, setChangeBody] = useState([<Aboutme/>])

const handleAboutMeClick = () => {
  setChangeBody(<Aboutme/>)
}

const handleContactClick = () => {
  setChangeBody(<Contactme/>)
}

const handleResumeClick = () => {
  setChangeBody(<Resume/>)
}

const handlePortfolioClick = () => {
  setChangeBody(<Portfolio/>)
}

  return (
    <div className="App">
      <header className="App-header">
      <Navbar bg="light" expand="lg">
  <Container className="seeBlue">
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#link" onClick={handleAboutMeClick}>About me</Nav.Link>
        <Nav.Link href="#home" onClick={handlePortfolioClick}>Portfolio</Nav.Link>
        <Nav.Link href="#home" onClick={handleContactClick}>Contact me</Nav.Link>
        <Nav.Link href="#home" onClick={handleResumeClick}>Resume</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      </header>
 
 {changeBody}

 <FooterPage/>
    </div>

 
  );

}

export default Primary