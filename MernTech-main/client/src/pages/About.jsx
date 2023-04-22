import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

function About() {
  return (
    <Card>
      <Card.Header>
        <Nav variant="pills" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link href="#first">Company </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link">Years</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link1">About Us </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <Card.Title>About Us Company Estd.</Card.Title>
        <Card.Text>
        Tech Solution believes that business applications of Internet are unlimited. <br></br>
        In order to explore new business opportunities and adapt to the fast changing environment,<hr></hr>
        ALL businesses need IT professionals to assist them. JSoft uses today’s increasingly <br></br>
        complex and sophisticated Information Technologies to provide professional IT services and<br></br>
         expertise that enables our clients to achieve their business growth.
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
  );
}

export default About;