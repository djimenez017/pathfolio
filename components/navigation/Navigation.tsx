import React from "react";

const Navigation = () => {
  return (
    <nav className="flex w-1/5 bg-purple h-screen">
      <div className=" flex flex-col ml-10">
        <h1 className="text-3xl text-bold mt-5 mb-10">Pathfolio</h1>
        <ul className="flex flex-col justify-around">
          <li className="flex items-center p-1 mb-4 transition-colors duration-200 hover:text-pink  hover:border-purple">
            Dashboard
          </li>
          <li className="flex items-center p-1 mb-4 transition-colors duration-200 hover:text-pink hover:border-purple">
            Preview
          </li>
          <li className="flex items-center p-1 mb-4 transition-colors duration-200 hover:text-pink hover:border-purple">
            Daniel Jimenez
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
