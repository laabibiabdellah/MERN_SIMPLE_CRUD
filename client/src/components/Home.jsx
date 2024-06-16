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
  }, [users]);

  return (
    <>
      <div className="flex justify-center flex-wrap gap-5 py-[30px]">
        {users.map(({ _id, name, age }) => (
          <Card key={_id} name={name} age={age} CardId={_id} />
        ))}
        {users.length === 0 && (
          <h1 className="text-center text-gray-800 text-3xl mt-10">
            No users found.
          </h1>
        )}
      </div>
    </>
  );
}
