import { useState } from "react";

function App() {
  const [valid, setValid] = useState(false);
  const [text, setText] = useState("");
  console.log(text);
  function handleChange(e) {
    e.preventDefault();
    setText(e.target.value);
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(text)) {
      setValid(true);
    } else {
      setValid(false);
    }
  }
  return (
    <div>
      <form className="grid  place-content-center w-screen h-screen">
        <div className="border rounded p-2">
          <label htmlFor="email">Enter your email:</label>
          <input
            type="text"
            value={text}
            onChange={handleChange}
            className={`${valid ? "border-green-600 border" : ""}
              
              border p-1  border-grey-600 rounded m-1 focus:outline-none
              `}
            name="email"
            required
          />
          <span
            className={`${
              valid ? "text-green-600 text-xl font-semibold" : "hidden"
            }`}
          >
            ✓{" "}
          </span>
        </div>
      </form>
    </div>
  );
}

export default App;
