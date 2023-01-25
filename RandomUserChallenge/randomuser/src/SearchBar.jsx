import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router";

const SearchBar = ({ value, onSubmit }) => {
  const [internal, setInternal] = useState(value);
  //for the auto nav to user page
  let navigate = useNavigate();

  const handleChange = (event) => {
    setInternal(event.target.value);
  };
  const handleSubmit = () => {
    onSubmit(internal);
    //calls the user page when you search
    let path = "/Users";
    navigate(path);
  };

  return (
    <>
      <input value={internal} onChange={handleChange} />
      <button onClick={handleSubmit}>Search</button>
    </>
  );
};

export default SearchBar;
