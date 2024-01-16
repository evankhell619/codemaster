import { useState, useId } from "react";

const ENDPOINT = "https://jor-test-api.vercel.app/api/contact";

const App = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");

  const id = useId();
  const emailId = `${id}-email`;
  const messageId = `${id}-message`;

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await fetch(ENDPOINT, {
      method: "POST",
      body: JSON.stringify({
        email,
        message,
      }),
    });

    const result = await response.json();
    console.log(result);

    if (response.ok) {
      setStatus("succses");
    } else {
      setStatus("eror");
    }
  }

  if (status === "idle") {
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor={emailId}>Email</label>
          <input
            type="email"
            id={emailId}
            required={true}
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor={messageId}>Message</label>
          <textarea
            id={messageId}
            required={true}
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  } else if (status === "error") {
    return <p>Mohon maaf sedang lelah</p>;
  } else if (status === "success") {
    return <p>Bismillah 2024 10 juta</p>;
  }
};

export default App;
