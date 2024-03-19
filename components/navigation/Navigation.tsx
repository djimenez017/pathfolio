import React from "react";

const Navigation = () => {
  return (
    <nav className="flex fixed bottom-0 w-full md:w-1/5 bg-purple md:h-screen ">
      <div className="flex md:flex-col md:ml-10 p-3 w-full">
        <h1 className="md:text-3xl md:text-bold md:mt-5 md:show mb-10 md:flex hidden">
          Pathfolio
        </h1>
        <ul className="flex md:flex-col justify-around md:justify-normal w-full">
          <li className="flex items-center p-1 md:mb-4 transition-colors duration-200 hover:text-pink  hover:border-purple">
            Dashboard
          </li>
          <li className="flex items-center p-1 md:mb-4 transition-colors duration-200 hover:text-pink hover:border-purple">
            Preview
          </li>
          <li className="flex items-center p-1 md:mb-4 transition-colors duration-200 hover:text-pink hover:border-purple">
            Daniel Jimenez
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
