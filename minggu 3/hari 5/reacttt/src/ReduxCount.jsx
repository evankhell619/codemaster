import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const NewReduxCounter = ({initialValue}) => {
  const count = useSelector((state) => state.count)
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({type: "SET_COUNTER" , payload: initialValue})
    dispatch({type: "SET_USER" , payload: {name: 'Popol'}})
  },[dispatch, initialValue])

  return (
    <>
    <div > Counter : {count.count} </div>

    <div className="flex space-x-2">
      <button
        onClick={() => dispatch({ type: "DECREMENT"})}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        -
      </button>
      <button
        onClick={() => dispatch({ type: "INCREMENT"})}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        +
      </button>
    </div>

    <br />
    <div className=" "> User : {user ? user.name : null} </div>
    
    </>
  ) 
}


export default NewReduxCounter