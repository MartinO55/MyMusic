import React from "react";
import MovieCard from "../../Components/MovieCard/MovieCard";
import styles from "./MovieList.module.scss";

const movies = [
  {
    title: "Die Hard",
    year: 1988,
    imgURL:
      "https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
  },
  {
    title: "Die Hard",
    year: 1988,
    imgURL:
      "https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
  },
  {
    title: "Die Hard",
    year: 1988,
    imgURL:
      "https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
  },
  {
    title: "Die Hard",
    year: 1988,
    imgURL:
      "https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
  },
];

const MovieList = () => {
  return (
    <>
      <div className={styles.MovieList}>
        {movies.map((movie, index) => {
          return <MovieCard key={index} movieData={movie} />;
        })}
      </div>
    </>
  );
};

export default MovieList;
