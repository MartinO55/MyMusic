import React from "react";
import UserList from "./UserList";

const Users = ({ query }) => {
  let removeDoubles = query + " this might have been a double";

  if (query) {
    console.log(query);
    return;
  } else console.log(removeDoubles);

  return (
    <>
      <h1>Users</h1>

      <UserList query={query} />
    </>
  );
};

export default Users;
