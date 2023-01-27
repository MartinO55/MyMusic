import { useRef } from "react";
import { useState } from "react";

// useState
// - every time I set state, the component re-renders
// - state is persistent between renders

// useRef
// - doesn't trigger renders
// - structure: { current: 0 }

// use cases
// - store dom nodes (form apis, input apis)
// - store previous values
// - ...anywhere where a rerender is not needed

function CounterDemoRef() {
  // const [buttonClicked, setButtonClicked] = useState(0);
  const buttonClicked = useRef(0);
  console.log(buttonClicked.current);

  const [renderToggle, setRenderToggle] = useState(true);

  return (
    <div className="App">
      <p>{buttonClicked.current}</p>
      <button onClick={() => (buttonClicked.current += 1)}>Click me !</button>
      <button onClick={() => setRenderToggle(!renderToggle)}>Render</button>
    </div>
  );
}

function FocusDemo() {
  const inputRef = useRef(); // used to hold a reference to an <input />
  const [forceRender, setForceRender] = useState(true);

  console.log(inputRef.current);

  const handleClickFocus = () => {
    inputRef.current.focus();
  };

  const handleClickThing = () => {
    inputRef.current.value = "meep";
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleClickFocus}>Focus Input</button>
      <button onClick={handleClickThing}>Change Value</button>
      <button onClick={() => setForceRender(!forceRender)}>Force Render</button>
    </>
  );
}

const SearchBar = ({ onSubmit }) => {
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputRef.current.value);
  };

  console.log("searchbar renders");

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" />
      <button>Search</button>
    </form>
  );
};

function App() {
  const formRef = useRef(0);
  //const [search, setSearch] = useState("");

  // const handleSubmit = (searchString) => {
  //   setSearch(searchString);
  // };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(formRef.current.value);
    formRef.current.reset;
  };

  // const handleClickFocus = () => {
  //   formRef.current.focus();
  // };

  return (
    <>
      {console.log("the app rendered")}
      <form ref={formRef} onSubmit={handleSubmit}>
        <input
          ref={formRef}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          // onClick={handleClickFocus}
        ></input>
        <input
          ref={formRef}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          //onClick={handleClickFocus}
        ></input>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          //onClick={handleClickFocus}
        ></input>
        <input
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          //onClick={handleClickFocus}
        ></input>
      </form>

      {/* <SearchBar onSubmit={handleSubmit} />
      <p>{search}</p> */}
    </>
  );
}

export default App;
