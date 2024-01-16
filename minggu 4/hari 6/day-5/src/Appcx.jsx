import React from "react";
import { useState, useId } from "react";

// const App = () => {
//   const [user, setUser] = useState("Popol");
//   const [pic, setPic] = useState("Popol");
//   return (
//     <>
//       <h1> Name: {user}</h1>
//       <p>
//         <img src={pic} alt="" />
//       </p>
//       <button
//         onClick={async () => {
//           // useEffect(() => {});

//           const response = await fetch("https://api.randomuser.me/");
//           const data = await response.json();
//           const name = data.results[0].name.first;
//           const img = data.results[0].picture.medium;

//           setUser(name);
//           setPic(img);
//         }}
//       >
//         Change
//       </button>
//     </>
//   );
// };

// export default App;
const path = "https://jor-test-api.vercel.app/api/contact";

const Form = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const id = useId();
  const emailId = `${id}-email`;
  const msgId = `${id}-msg`;

  async function handleSumbit(event) {
    event.preventDefault();

    const response = await fetch(path, {
      method: "POST",
      body: JSON.stringify({
        email,
        msg,
      }),
    });

    const result = await response.json();
    console.log(result);
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSumbit}>
          <div>
            <label htmlFor={emailId}>Email</label>
            <input
              type="email"
              id={emailId}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor={msgId}>Massage</label>
            <textarea
              id={msgId}
              value={msg}
              onChange={(event) => setMsg(event.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
