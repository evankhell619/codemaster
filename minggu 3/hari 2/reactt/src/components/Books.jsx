import React, { useState, useEffect } from 'react'
// import booksData from "../data/books.json"
import bookData from '@/data/books.json'


const Books = () => {
  const [Books, setBooks] = useState ([])

  useEffect(() => {
    const fecthBooks = async () => {
      try {
        const response = await import(bookData)
        console.log(response);
        setBooks(response.bookData)
      } catch (err) {
        throw new Error("Error")
      }
      // try {
      //   setBooks(booksData.Books);
      // } catch (err) {
      //   console.error('Error fetching books:', err);
      // }
    }
    return () => {
      fecthBooks()
    }
  }, [])
  console.log(Books);
  
  return (
    <div>This is Books</div>
  )}
  
export default Books