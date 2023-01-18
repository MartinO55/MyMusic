import { useState } from "react";
import styles from "./Card.module.scss";
import moon from "./images/moon.jpg";
import sun from "./images/sun.png";

const Card = () => {
  //shhould be DarkModeiT
  const [time, setTime] = useState(Math.floor(Math.random() * 25));
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const generateTime = (event) => {
    setTime(Math.floor(Math.random() * 25));
  };

  const modeText = darkMode ? "Light Mode" : "Dark Mode";

  return (
    <>
      <div className={`${darkMode ? styles.dark : styles.light}`}>
        <div>
          <button onClick={generateTime}>Change the Time</button>
          <p>The time is: {time}:00</p>
        </div>
        <img src={time >= 6 && time < 19 ? sun : moon} />

        <div>
          <h1>dark mode</h1>
          <button onClick={toggleDarkMode}>toggle: {modeText}</button>
        </div>
      </div>
    </>
  );
};
export default Card;
