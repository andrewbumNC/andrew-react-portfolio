import { Container, Row, Carousel } from "react-bootstrap"
import '../styles/aboutme.css';



function Aboutme () {

return (
    <Container fluid className="aboutMeContainer">
      <Carousel className="carousel-inner">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {require('../styles/images/landscape-4.jpeg')}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>React.js</h3>
   
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../styles/images/landscape-6.jpeg')}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>node.js</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../styles/images/landscape-5.jpeg')}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Java Script</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  <Row>
      <h1 className="aboutMeHeader"> About Me</h1>
      <div className="meImageContainer"> 
      <img className="meimage" alt="picofme" src={require('../styles/images/me.jpg')} />
      
      </div>
    <p className="aboutMeParagraph"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
 
 
 </Row>
</Container>

 )
} 

export default Aboutme