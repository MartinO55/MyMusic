import React from "react";

import { useState, useEffect } from "react";

function App() {
  const [swChar, setChar] = useState();
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  //fetch from the API
  const fetchSWChar = async () => {
    const response = await fetch(`https://swapi.dev/api/people/${inputNum}/`, {
      headers: { Accept: "application/json" },
    });
    const data = await response.json();
    const swChar = data;
    return swChar;
  };
  // console.log(fetchSWChar());

  useEffect(() => {
    const wrapper = async () => {
      setLoading(true);
      try {
        const swChar = await fetchSWChar();
        setChar(swChar);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false); //So you need the loading componenet otherwise it returns an undefined and cant load
      }
    };

    wrapper();
  }, [count]);

  //needs a handle click function
  let inputNum = 1;

  return (
    <>
      <input type="number" value={count}></input>
      <button
        onClick={() => {
          setCount(inputNum);
        }}
      >
        summon
      </button>

      <div>{loading ? <p>loading...</p> : <p>{swChar.name}</p>}</div>
    </>
  );
}

export default App;
