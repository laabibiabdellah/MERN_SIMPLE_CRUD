import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, age }) => {
  return (
    <Link to="/" className="block">
      <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition duration-500 hover:bg-gray-200 hover:shadow-sm">
        <div className="rounded-lg bg-white p-4 sm:p-6">
          <h3 className="mt-0.5 text-lg font-medium text-gray-900">{name}</h3>

          <div className="mt-4 flex gap-1">
            <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-1 text-xs text-purple-600">
              {age} years old
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default Card;
