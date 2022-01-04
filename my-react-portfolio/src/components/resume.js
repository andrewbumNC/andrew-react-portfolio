

import { Container, Card, ListGroup } from "react-bootstrap"

function Resume () {

return (
    <Container fluid>
  
  <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Resume</Card.Title>
    <Card.Text>
      Click the links below to download a copy of my resume or visit my linkedIn page.
    </Card.Text>
    <Card.Link href="https://docs.google.com/document/d/0B9S8lMbbBhFPczByeWJVOW5aYWl0UllIVV9ZdmExVXBsR2pr/edit?usp=sharing&ouid=101143160745006770620&resourcekey=0-UYUeNybpvg1wKtuH4xmfWQ&rtpof=true&sd=true">Resume</Card.Link>
    <Card.Link href="https://www.linkedin.com/in/andrew-bumgarner-6b204b90/">linkedIn</Card.Link>
  </Card.Body>
  <Card style={{ width: '18rem' }}>
  <Card.Header>Proficiencies</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>React</ListGroup.Item>
    <ListGroup.Item>Java Script</ListGroup.Item>
    <ListGroup.Item>Node.js</ListGroup.Item>
  </ListGroup>
</Card>
</Card>

</Container>

 )
} 

export default Resume