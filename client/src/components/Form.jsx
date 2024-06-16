import { useState } from "react";
import CustomAxios from "../API/CustomAxios";
import { useNavigate } from "react-router-dom";
import SomethingWrong from "./SomethingWrong";

export default function Form() {
  let [user, setUser] = useState({ name: "", age: "" });
  let [show, setShow] = useState(false);
  const navigate = useNavigate();
  let handeleFormSubmit = (e) => {
    e.preventDefault();
    let name = e.target[0].value;
    let age = e.target[1].value;
    let user = { name, age };

    if (name && age) {
      const addUsers = () => {
        const axiosInstance = CustomAxios();
        axiosInstance
          .post("/addUser", user)
          .then(() => {
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
      };
      addUsers();
    } else {
      setShow(true);
    }
  };

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-teal-600 sm:text-3xl">
            Add User
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            sunt dolores deleniti inventore quaerat mollitia?
          </p>

          <form
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
            onSubmit={handeleFormSubmit}
          >
            <SomethingWrong show={show} />
            <div>
              <label for="name" className="sr-only">
                Name
              </label>

              <div className="relative">
                <input
                  type="name"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter name"
                  onChange={(e) => (user.name = e.target.value)}
                />
              </div>
            </div>

            <div>
              <label for="age" className="sr-only">
                Age
              </label>

              <div className="relative">
                <input
                  type="age"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter age"
                  onChange={(e) => (user.age = e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg bg-teal-600 px-5 py-3 text-sm font-medium text-white"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
