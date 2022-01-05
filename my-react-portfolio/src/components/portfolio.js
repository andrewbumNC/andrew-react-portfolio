
import { Row, Col, Card } from "react-bootstrap"

function Portfolio () {

return (
    <div type="container"> 
    <Row xs={1} md={2} className="g-4">
  
    <Col>
      <Card className="portfolio-card">
        <Card.Img variant="top" class="portfolio-sample-picture" src={require("../styles/images/fast-food.png")}/>
        <Card.Body>
          <Card.Title>My Unhealthy Friend</Card.Title>
          <Card.Text>
          The best anti - my fitness pal app of all time. Get unfit! 
          </Card.Text>
          <p><a href="https://murmuring-depths-69285.herokuapp.com/"> My Unhealthy Friend</a></p>
          <p><a href="https://github.com/aliciachen10/my-unhealthy-friend">GitHub</a></p>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card className="portfolio-card">
      <Card.Img variant="top" class="portfolio-sample-picture" src={require("../styles/images/weather.jpg")}/>
        <Card.Body>
          <Card.Title>Weather Dashboard</Card.Title>
          <Card.Text>
           An application to easily view today's weather and the next few days! 
          </Card.Text>
          <p><a href="https://andrewbumnc.github.io/weather-dashboard/"> Weather Dashboard</a></p>
          <p><a href="https://andrewbumnc.github.io/weather-dashboard/"> GitHub</a></p>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card className="portfolio-card">
      <Card.Img variant="top" class="portfolio-sample-picture" src={require("../styles/images/scheduler.jpg")}/>
        <Card.Body>
          <Card.Title>Day Planner</Card.Title>
          <Card.Text>
            An app to easily plan your day and take notes as you go about your business! 
          </Card.Text>
          <p><a href="https://andrewbumnc.github.io/day-planner/"> Day Planner</a></p>
          <p><a href="https://github.com/andrewbumNC/day-planner"> GitHub</a></p>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card className="portfolio-card">
      <Card.Img variant="top" class="portfolio-sample-picture" src={require("../styles/images/to-do-list-template.jpg")}/>
        <Card.Body>
          <Card.Title>Express Note Taker!</Card.Title>
          <Card.Text>
            Easy way of taking notes or creating to do lists throughout the day! 
          </Card.Text>
          <p><a href="https://dashboard.heroku.com/apps/andrewbumnc-express-note-taker">Express Note Taker </a></p>
          <p><a href="https://github.com/andrewbumNC/express-note-taker"> GitHub</a></p>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card className="portfolio-card">
      <Card.Img variant="top" class="portfolio-sample-picture" src={require("../styles/images/password.png")}/>
        <Card.Body>
          <Card.Title>Password Generator</Card.Title>
          <Card.Text>
            Easily generate strong passwords!
          </Card.Text>
          <p><a href="https://andrewbumnc.github.io/password-generator/"> Password Generator</a></p>
          <p><a href="hhttps://github.com/andrewbumNC/password-generator"> GitHub </a></p>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card className="portfolio-card">
      <Card.Img variant="top" class="portfolio-sample-picture" src={require("../styles/images/wine-and-food.jpg")}/>
        <Card.Body>
          <Card.Title>Random Meal and Drink Generator</Card.Title>
          <Card.Text>
            Find your next meal and drink easily and randomly! 
          </Card.Text>
          <p><a href="https://terrence-me.github.io/project1/"> Randome Meal and Drink Generator</a></p>
          <p><a href="https://github.com/Terrence-Me/project1"> GitHub </a></p>
        </Card.Body>
      </Card>
    </Col>
    

</Row>
</div>
  
 )
} 

export default Portfolio