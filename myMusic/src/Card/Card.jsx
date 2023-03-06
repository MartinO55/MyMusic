import React from "react";
import styles from "./Card.module.scss";
const Card = ({ title, band, cover, description }) => {
  return (
    <>
      <h3>{title}</h3>
      <p>{band}</p>
      <p>{description}</p>
      <img src={cover} className={styles.albumCover}></img>
    </>
  );
};

export default Card;
