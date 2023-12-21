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
  <div className="bg-green-700 text-white p-8">
    <div className="max-w-2xl mx-auto my-4 rounded">
      {books.map((book) => (
        <Link
          key={book.id}
          to={`/books/${book.id}`}
          className="block border border-gray-200 rounded bg-white text-black hover:bg-slate-200 p-2 mb-2"
        >
          {book.title}
        </Link>
      ))}
    </div>
    </div>
  )
}

export default Books
