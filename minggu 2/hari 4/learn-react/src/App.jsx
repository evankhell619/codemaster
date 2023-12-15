
import Hello from './Hello'
import Routes from './Routes'
import Home from './Home'
import Navbar from './components/Navbar'

const App = () => {
  const students = ['Hehe', 'hoho', 'hihi']

  return (
    <>
      
    < Navbar/>
    <Routes />
      {/* <Hello name="Popol" />
      <Hello name="Kupa" /> 
        {students.map((student, index) => 
        ( 
          <h1 className="font-bold bg-red-600" key = {index}>{student} </h1>
          ))} */}
    </>
  )

}


export default App
