import React, { useState, useEffect } from "react";
import Card from "./Card";
import CustomAxios from "../API/CustomAxios";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = () => {
      const axiosInstance = CustomAxios();
      axiosInstance
        .get("/getAllUsers")
        .then((response) => {
          setUsers(response.data);
        })
        .catch((error) => {
          console.error("Error fetching users:", error.message);
        });
    };

    fetchUsers();
  }, []);

  return (
    <>
      <div className="flex justify-center flex-wrap gap-5 py-[30px]">
        {users.map(({ _id, name, age }) => (
          <Card key={_id} name={name} age={age} />
        ))}
        {users.length === 0 && <p>No users found.</p>}
      </div>
    </>
  );
}
