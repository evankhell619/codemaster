import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  
  useEffect(() => {
    console.log('Navigation component mounted')

    return () => {
      console.log('Navigation component unmounted')
    }
  }, [])

  
  const links = [
    { name: 'Home', path: '/Home' },
    { name: 'About', path: '/About' },
    { name: 'Books', path: '/Books' },
    // <Link className="text-white hover:text-gray-300" to="/About">About</Link>
  ]
  
  


  return (
    <nav className="bg-pink-600 max-w-2xl mx-auto my-4 p-4 rounded flex content-between text-white">
      <div className="font-bold text-white">BookQwerty</div>
      <div className="block text-right grow">
        {links.map((link) => (
          <div key={link.name} className="inline-block ml-2">
            <Link to={link.path} className="py-1 px-2 hover:bg-black rounded">
              {link.name}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Navigation