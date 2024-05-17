import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card, Col, Modal, Row } from 'react-bootstrap';
import Header from './Header';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [expandedCharacter, setExpandedCharacter] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(() => {
    axios.get('https://anapioficeandfire.com/api/characters')
      .then(response => {
        setCharacters(response.data);
      })
      .catch(error => {
        console.error('Error fetching characters:', error);
      });
  }, []);

  const handleCharacterClick = (character) => {
    if (expandedCharacter === character) {
      setExpandedCharacter(null);
    } else {
      setExpandedCharacter(character);
      handleShow(true)
    }
  };

  return (
    <>
      <Header />
    <div className="container">
      <h1>Characters</h1>
      <Row>
        {characters.map(character => (
          <Col key={character.url}  onClick={() => handleCharacterClick(character)} data-toggle="modal" data-target="#exampleModal">
                <Card className='py-10 h-75 w-100'>
                  <Card.Body>
                  <strong className=''>Name :</strong> {character.aliases?.length > 0 ? character.aliases[0] : 'N/A'}
                  </Card.Body>
                </Card>
          </Col>
        ))}
      </Row>

      {/* <button className='btn btn-primary' data-toggle="modal" data-target="#exampleModal">Click on me!</button> */}

      {/* Modal that displays Character's meta info on clicking on any card */}
      {expandedCharacter && <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{expandedCharacter.aliases?.length > 0 ? expandedCharacter.aliases[0] : 'N/A'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
            <p><strong>Gender:</strong> {expandedCharacter.gender}</p>
            <p><strong>Culture:</strong> {expandedCharacter.culture}</p>
            <p><strong>Born:</strong> {expandedCharacter.born}</p>
            <p><strong>Died:</strong> {expandedCharacter.died}</p>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>}
    </div>
    </>
  );
};

export default Characters;
