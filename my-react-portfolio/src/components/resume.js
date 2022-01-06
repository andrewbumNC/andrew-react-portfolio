

import { Container, Card, ListGroup, Row } from "react-bootstrap"

function Resume () {

return (
    <Container fluid>
  

<Row>
<h1 className="aboutMeHeader"> <a href="https://docs.google.com/document/d/0B9S8lMbbBhFPczByeWJVOW5aYWl0UllIVV9ZdmExVXBsR2pr/edit?usp=sharing&ouid=101143160745006770620&resourcekey=0-UYUeNybpvg1wKtuH4xmfWQ&rtpof=true&sd=true">Resume</a> </h1>  
          
<div className="proficency-container"> 

<ListGroup className="proficencies">
  <ListGroup.Item>Java Script</ListGroup.Item>
  <ListGroup.Item>Node.js</ListGroup.Item>
  <ListGroup.Item>Express.js</ListGroup.Item>
  <ListGroup.Item>HTML</ListGroup.Item>

</ListGroup>

<ListGroup className="proficencies">
  <ListGroup.Item>Jquery</ListGroup.Item>
  <ListGroup.Item>NoSQL</ListGroup.Item>
  <ListGroup.Item>MongoDB</ListGroup.Item>
  <ListGroup.Item>CSS</ListGroup.Item>
 
</ListGroup>

 </div> 

 
 </Row>

</Container>

 )
} 

export default Resume