import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { Button, Card, Col, Row } from 'react-bootstrap';
import booksImg from '../assets/books.jpg'
import houseImg from '../assets/housegot.jpg'
import characterImg from '../assets/gotcharacters.jpg'

const Home = () => {
  return (
    <>
    <Header />
    <div className="container">
      <h1>Welcome GoT App</h1>
      <p>The man who passes the sentence should swing the sword. If you would take a man’s life, you owe it to him to look into his eyes and hear his final words. And if you cannot bear to do that, then perhaps the man does not deserve to die.” — Ned Stark</p>
      <p>Click on the following links to explore:</p>
   
      <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={booksImg} />
          <Card.Body>
            <Card.Title>Books</Card.Title>
            <Card.Text>
              Get more details on your favorite book of the series
            </Card.Text>
            <Link to="/Books"><Button variant="primary">Go</Button></Link>
          </Card.Body>
        </Card>
        </Col>

        <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={houseImg} />
          <Card.Body>
            <Card.Title>Houses</Card.Title>
            <Card.Text>
              Explore the Houses of the Fire and Ice Universe
            </Card.Text>
            <Link to="/Houses"><Button variant="primary">Go</Button></Link>
          </Card.Body>
        </Card>
        </Col>

        <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={characterImg} />
          <Card.Body>
            <Card.Title>Character</Card.Title>
            <Card.Text>
              Learn about your favorite Characters 
            </Card.Text>
            <Link to="/Characters"><Button variant="primary">Go</Button></Link>
          </Card.Body>
        </Card>
        </Col>
      </Row>
    </div>
    </>
  );
};

export default Home;
