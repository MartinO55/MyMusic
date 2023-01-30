import React from "react";
import styles from "./NewMovieForm.module.scss";

import { useState } from "react";

const NewMovieForm = () => {
  const initialMovieFormState = {
    title: "",
    year: "",
    imageURL: "",
  };

  const [movieFormState, setMovieFormState] = useState(initialMovieFormState);

  const onInputChange = (event) => {
    const { name, value } = event.target;

    setMovieFormState({ ...movieFormState, [name]: value });
  };

  const onFormSubmit = (event) => {};

  return (
    <>
      {" "}
      <form onSubmit={onFormSubmit}>
        <div className={styles.NewMovieForm}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={movieFormState.title}
            onChange={onInputChange}
            required
          />

          <label htmlFor="year">Year</label>
          <input
            type="text"
            id="year"
            name="year"
            value={movieFormState.year}
            onChange={onInputChange}
            required
          />

          <label htmlFor="imageURL">Image URL</label>
          <input
            type="text"
            id="imageURL"
            name="imageURL"
            value={movieFormState.imageURL}
            onChange={onInputChange}
            required
          />

          <div>
            <input type="submit" id="submit" value="submit" />
          </div>
        </div>
      </form>
    </>
  );
};
export default NewMovieForm;
