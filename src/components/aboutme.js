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
    <p className="aboutMeParagraph"> Hi! My name is Andrew Bumgarner! I'm a ten year professional in the SaaS space and I have almost completed a six month full stack engineering bootcamp. It's my hope to apply this technical knowledge to my next position that sits somewhere in between the revenue and engineering teams, ideally in: customer success, product management, or solutions engineering. While you're here please take a minute to view some of my earlier applications. </p>
 
 </Row>
</Container>

 )
} 

export default Aboutme