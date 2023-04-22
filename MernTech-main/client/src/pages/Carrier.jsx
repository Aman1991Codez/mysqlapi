import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

function Carrier() {
  return (
    <div className="d-flex justify-content-around">  <h1> Carrier</h1>
      <Card style={{ width: '18rem' }}> 
        <Card.Img variant="top"  src="https://picsum.photos/200" />
        
        <Card.Body>
          <Card.Title>CRM</Card.Title>
          <Card.Text>
           CRM Managements is a quickly portal is work on to do a lot of working environment.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://picsum.photos/seed/picsum/200" />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
      </Card>
    </div>
  );
}

export default Carrier;