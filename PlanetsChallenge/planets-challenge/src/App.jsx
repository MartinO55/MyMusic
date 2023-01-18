import { useState } from "react";
import reactLogo from "./assets/react.svg";
//import "./App.css";
import planets from "./data";
import Card from "./Card.jsx";

function App() {
  //console.log(planets);
  return (
    <>
      <div>
        {" "}
        {planets.map((planet, index) => (
          <Card
            key={index}
            name={planet.planetName}
            diameter={planet.diameterInKm}
            distanceFromSun={planet.distanceFromSun}
            numberOfMoons={planet.numberOfMoons}
            lengthOfYear={planet.lengthOfYear}
            image={planet.image}
          />
        ))}
      </div>
    </>
  );
}

export default App;
