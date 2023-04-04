import UsersList from "./Users/UsersList";
import usersData from "../data/users-data";

function Home() {
  const users = usersData;
  return <UsersList users={users} />;
}

export default Home;
