import bookData from '../data/books.json'
import { useLocalStorage } from '../hooks'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const Books = () => {
  const [books, setBooks] = useLocalStorage('books', [])

  useEffect(() => {
    if (books.length === 0) {
      setBooks(bookData)
    }
  })

  return (
    <div className="max-w-2xl mx-auto my-4 rounded">
      {books.map((book) => (
        <Link
          key={book.id}
          to={`/books/${book.id}`}
          className="block border border-gray-200 rounded bg-white hover:bg-gray-100 p-2 mb-2"
        >
          {book.title}
        </Link>
      ))}
    </div>
  )
}

export default Books
