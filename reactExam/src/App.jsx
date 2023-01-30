import "./App.css";
import { useState, useEffect, createContext } from "react";
// Question 24
function Counter({ initial }) {
  let count = initial ?? 0; //local variable not state, the ??(nullish coalescent) leads to unexpected results because sometimes react uses the null/undefined operator to refer to things that havent been returned yet

  const handleClick = () => (count += 1); //does not cause a re render

  return (
    <>
      <p>{count}</p>
      <button onClick={handleClick}>Increment</button>
    </>
  );
}

// Question 25
const Quantity = ({ onChange }) => {
  const [qty, setQty] = useState(100);

  const handleIncrement = () => {
    setQty(qty + 2);
    onChange(qty); //this is the old qty value, before it was iterated on... ditto down below
  };

  const handleDecrement = () => {
    setQty(qty - 2);
    onChange(qty);
  };

  return (
    <>
      <div>
        <button onClick={handleDecrement}>-2</button>
        {qty}
        <button onClick={handleIncrement}>+2</button>
      </div>
    </>
  );
};

// Question 26
const Updates = () => {
  let [count, setCount] = useState(100);
  let [updates, setUpdates] = useState(0);

  useEffect(() => {
    setUpdates(updates + 1);
  }, [count, updates]); //oh look, you created an infinite loop by calling the updates function here. calling it here causes it to change the the state, see the state change, and call itself again
  const handleClick = () => setCount(count + 1);
  return (
    <>
      <p>{count}</p>
      <button onClick={handleClick}>Increment</button>
    </>
  );
};
// Question 27
const Facts = () => {
  const [facts, setFacts] = useState(null);
  useEffect(() => {
    const setData = async () => {
      const response = await fetch("https://catfact.ninja/facts");
      const data = await response.json();
      setFacts(data.data);
    };
    setData();
  }); //missing dependency array. it is now re rendering on every frame, making the use effect completely pointless
  return (
    <>
      {facts &&
        facts.map((fact, index) => {
          return <p key={index}>{fact.fact}</p>;
        })}
    </>
  );
};
// Question 28
const SearchBar = () => {
  //nothing strictly speaking wrong, but you should probably be getting the state from the header component
  const [input, setInput] = useState("");
  const handleChange = (event) => setInput(event.target.value);
  const handleClick = () => console.log("Current input", input);
  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={handleClick}>Search</button>
    </>
  );
};
const Header = () => {
  const [search, setSearch] = useState("");
  return <SearchBar />;
};
// Question 29
const ThemeContext = createContext({});
const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark(!isDark);
  return <ThemeContext.Provider>{children}</ThemeContext.Provider>; //no value for the context provider
};
// Question 30 //chat cant help you here
const Students = () => {
  const [students] = useState([
    { name: "Harrison", browniePoints: Math.floor(Math.random() * 100) },
    { name: "Sandra", browniePoints: Math.floor(Math.random() * 100) },
  ]);
  return (
    <>
      {students.map((student) => (
        <p>
          {student.name} - {student.browniePoints}
        </p>
      ))}
    </>
  );
};
// Question 31
const TextField = ({ initial }) => {
  const [input, setInput] = useState(initial);
  const handleChange = (event) => {
    const newValue = event.target.value;
    setInput(newValue);
    console.log(newValue); //Console.log is just logging the default initial state of input. Chat suggests passing a callback to setState
  };
  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
    </div>
  );
};
function App() {
  return (
    <div className="App">
      <div>
        <TextField />
      </div>
    </div>
  );
}
export default App;
