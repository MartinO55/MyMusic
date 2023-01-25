import React from "react";
import { fetchUsers } from "./fetch";

const UserList = ({ query }) => {
  console.log(query); //Ok it made it

  console.log(fetchUsers());

  //fetch here

  //filter
  return <div>User List</div>;
};

export default UserList;
