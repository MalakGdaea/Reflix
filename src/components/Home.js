import UsersList from "./Users/UsersList";
import { usersData } from "../Constants";
import { useState } from "react";

function Home() {
  const [users, setUsers] = useState(usersData);
  return <UsersList users={users} />;
}

export default Home;
