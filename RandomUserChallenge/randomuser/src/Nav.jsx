import React from "react";
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";
import Users from "./Users";
import { useState } from "react";

const Nav = () => {
  const [searchUsers, setSearchUsers] = useState("");

  const handleUserSearchChange = (query) => {
    setSearchUsers(query);
    //console.log(searchUsers, query);
  };

  // if(searchUsers){
  //   searchReturn = <UserList query ={searchUsers}
  // } else {searchReturn = ""}
  //

  return (
    <>
      <Navbar />
      <SearchBar value={searchUsers} onSubmit={handleUserSearchChange} />

      {searchUsers ? <Users query={searchUsers} /> : ""}
    </>
  );
};

export default Nav;
