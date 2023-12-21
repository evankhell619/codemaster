import { useReducer, useState } from "react";
import './App.css'

const initialState ={
  answer: "",
  error: null,
  status: "typing"
}

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ANSWER":
      return{...state, status:action.payload}
    case "SET_ERROR":
      return{...state, status:action.payload}
    case "SET_STATUS":
      return{...state, status:action.payload}
    default:
      return state
  }
}

function QuizDua () {
  const [state, dispatch] = useReducer(reducer, initialState)
  const {answer, error, status} = state;

  if (status === "okey") {
    return <h1>You right</h1>
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "SET_STATUS", payload:"send"})
    try{
      await sumbitForm(answer)
      dispatch({type: "SET_STATUS", payload:"okey"})
    }catch(err) {
      dispatch({ type:"SET_STATUS" , payload:"typing" })
    dispatch({type:"SET_ERROR" , payload:"err"})
    }
  }
  const handleTextAreaChange =  (e) => {
    dispatch({type: "SET_ANSWER", payload:e.target.value})
  }

  return (
    <>
      <h2>City Quiz 2 </h2>
      <p>Brp jumlah kaki kucing</p>
      <form onSubmit={handleSubmit}>
        <textarea value={answer} onChange={handleTextAreaChange} 
        disabled={status === "send"} />
        <br />
      <button disabled={answer.length === 0 || status === "send"}>
        send answer
      </button>
      </form>
      {error !== null && <p className='error'>{error.message} </p> }
    </>
  )
}



function sumbitForm(answer) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      let shoudError = answer.toLowerCase() !== "4";
      if (shoudError) {
        reject(new Error("Salahh cokkk") )
      } else {
        resolve()
      }
    },1500)
  })
}

export default QuizDua
