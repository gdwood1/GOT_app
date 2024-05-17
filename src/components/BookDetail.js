import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Header from './Header';

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://anapioficeandfire.com/api/books/${id}`)
      .then(response => {
        setBook(response.data);
      })
      .catch(error => {
        console.error('Error fetching book details:', error);
      });
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
    <div className="container">
      <h1>{book.name}</h1>
      <p><strong>ISBN:</strong> {book.isbn}</p>
      <p><strong>Authors:</strong> {book.authors.join(', ')}</p>
      <p><strong>Number of Pages:</strong> {book.numberOfPages}</p>
      <p><strong>Country:</strong> {book.country}</p>
      <p><strong>Released:</strong> {book.released}</p>

      <button onClick={() => navigate(-1)} className='btn btn-dark'>Back</button>
    </div>
    </>
  );
};

export default BookDetail;
