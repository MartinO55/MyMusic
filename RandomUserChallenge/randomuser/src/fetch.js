export const fetchUsers = async () => {
  const response = await fetch(
    "https://randomuser.me/api/?results=15&inc=name",
    {
      headers: { Accept: "application/json" },
    }
  );
  const data = await response.json();
  const { users } = data;
  return users;
};
