import React from "react";
import {
  ChevronUp,
  ChevronsUp,
  ChevronDown,
  ChevronsDown,
  RotateCcw,
  Hash,
} from "react-feather";

function reducer(count, action) {
  switch (action.type) {
    case "increment":
      return ++count;
    case "bigIncrement":
      count += 10;
      return count;
    case "decrement":
      return --count;
    case "bigDecrement":
      return (count = count - 10);
    case "reset":
      // console.log(action.payload);
      return action.payload;
    case "random": {
      const nextCount = Math.ceil(Math.random() * 100);
      return (count = nextCount);
    }
    default:
      break;
  }
}

function CounterTwo({ initialVal = 0 }) {
  const [count, dispatch] = React.useReducer(reducer, initialVal);

  return (
    <div className="wrapper">
      <p>

        <h1>Counter Reducer</h1>
        <span>Current value:</span>
        <span className="count">{count}</span>
      </p>
      <div className="button-row">
        <button onClick={() => dispatch({ type: "increment" })}>
          <ChevronUp />
        </button>
        <button onClick={() => dispatch({ type: "bigIncrement" })}>
          <ChevronsUp />
        </button>
        <button
          onClick={() => dispatch({ type: "reset", payload: initialVal })}
        >
          <RotateCcw />
        </button>
        <button onClick={() => dispatch({ type: "random" })}>
          <Hash />
        </button>
        <button onClick={() => dispatch({ type: "bigDecrement" })}>
          <ChevronsDown />
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          <ChevronDown />
        </button>
      </div>
    </div>
  );
}

export default CounterTwo;