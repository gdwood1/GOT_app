import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card, Col, Modal, Row } from 'react-bootstrap';
import Header from './Header';

const Houses = () => {
  const [houses, setHouses] = useState([]);
  const [expandedHouse, setExpandedHouses] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios.get('https://anapioficeandfire.com/api/houses')
      .then(response => {
        setHouses(response.data);
      })
      .catch(error => {
        console.error('Error fetching houses:', error);
      });
  }, []);

  const handleHouseClick = (house) => {
    if (expandedHouse === house) {
      setExpandedHouses(null);
    } else {
      setExpandedHouses(house);
      handleShow(true)
    }
  };
  return (
    <>
      <Header />
      <div className="container">
      <h1>Houses</h1>
      <Row>
        {houses.map(house => (
          <Col key={house.url} onClick={() => handleHouseClick(house)} data-toggle="modal" data-target="#expandModal">
            <Card className= 'py-10 h-75 w-100'>
              <Card.Body>
                <strong className=''>Name :</strong> {house.name?.length > 0 ? house.name : 'N/A'}
              </Card.Body> 
            </Card>
          </Col> 
        ))}
      </Row>


    {expandedHouse && <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
       <Modal.Title>{expandedHouse.name?. length > 0 ? expandedHouse.name : 'N/A'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <ul className='list'>
        <li><strong> Region:</strong> {expandedHouse.region}</li>
        <li><strong> Coat of Arms:</strong> {expandedHouse.coatOfArms}</li>
        {expandedHouse.words && <li><strong> Words:</strong> {expandedHouse.words}</li>}
      </ul>   
</Modal.Body>
<Modal.Footer>
  <Button variant= "secondary" onClick={handleClose}>
    Close
  </Button>
</Modal.Footer>
      </Modal>}      

      </div>
    </>

  );
};





export default Houses;