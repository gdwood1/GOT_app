import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('https://anapioficeandfire.com/api/books')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }, []);

  return (
    <>
    <Header />
    <div className="container">
      <h1>Books</h1>
      <ul>
        {books.map(book => {
          const splittedUrl = book.url.split('/');
          return (
          <li key={book.url}>
            <Link to={`/books/${splittedUrl[splittedUrl.length-1]}`}>
           
              {book.name}
            </Link>
          </li>
          )
        })}
      </ul>
    </div>
  </>
  );
};

export default Books;
