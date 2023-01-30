import React from "react";
import styles from "./MovieCard.module.scss";

const MovieCard = ({ movieData }) => {
  return (
    <>
      <div className={styles.MovieCard}>
        <h2>Title: {movieData.title}</h2>
        <h3>year: {movieData.year}</h3>
        <img src={movieData.imgURL} alt={movieData.title} />
      </div>
    </>
  );
};

export default MovieCard;
