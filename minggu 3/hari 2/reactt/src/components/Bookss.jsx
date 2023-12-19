import React, { useState, useEffect } from 'react';
import booksData from '../data/books.json';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setBooks(booksData.Books);
      } catch (err) {
        console.error('Error fetching books:', err);
      }
    };

    fetchBooks();
  }, []);

  console.log(books);

  return <div>This is Books</div>;
};

export default Books;
