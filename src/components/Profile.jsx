/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("user");
    if (savedName) {
      const data = JSON.parse(savedName);
      setUser(data[0]);
    }
  }, []);
  console.log("userData is>>>>", user);
  return (
    <div>
      <h1>Welcome, {user.username}</h1>
      <h2>{user.email}</h2>
    </div>
  );
};

export default Profile;
