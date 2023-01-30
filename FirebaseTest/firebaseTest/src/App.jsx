import { useState } from "react";
import MovieCard from "./Components/MovieCard/MovieCard";
import NewMovieForm from "./Components/NewMovieForm/NewMovieForm";
import MovieList from "./Containers/MovieList/MovieList";

function App() {
  return (
    <>
      {" "}
      <MovieList />
      <NewMovieForm />
    </>
  );
}

export default App;
