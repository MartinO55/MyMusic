# UseRef

## task

Create a form with the following fields:

- username
- email
- password
- dob (date of birth)
  Updates to the form fields should not cause the component to re-render
  Form fields should be cleared once submitted
  The form should have a submit button, which add an object to a state variable called (accounts), this state should be used to render the accounts to the page.

```javascript
import { useRef } from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";

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

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" />
      <button>Search</button>
    </form>
  );
};

function App() {
  const [search, setSearch] = useState("");

  const handleSubmit = (searchString) => {
    setSearch(searchString);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <p>{search}</p>
    </>
  );
}

export default App;
```
