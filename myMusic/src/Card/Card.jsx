import React from "react";
import styles from "./Card.module.scss";

const Card = ({ title, band, cover, description }) => {
  return (
    //so design for this is image only, but it pops up into a modal with more information on click
    <>
      <div className={styles.Card}>
        <h3>{title}</h3>
        <p>{band}</p>
        <p>{description}</p>
        <img src={cover} className={styles.albumCover}></img>
      </div>
    </>
  );
};

export default Card;
