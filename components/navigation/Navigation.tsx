import React from "react";

const Navigation = () => {
  return (
    <nav className="flex fixed bottom-0 w-1/5 bg-purple sm:h-screen ">
      <div className="flex md:flex-col sm:ml-10 p-3 w-full">
        <h1 className="sm:text-3xl sm:text-bold md:mt-5 sm:show mb-10 sm:flex hidden">
          Pathfolio
        </h1>
        <ul className="flex sm:flex-col justify-around sm:justify-normal w-full">
          <li className="flex items-center p-1 sm:mb-4 transition-colors duration-200 hover:text-pink  hover:border-purple">
            Dashboard
          </li>
          <li className="flex items-center p-1 sm:mb-4 transition-colors duration-200 hover:text-pink hover:border-purple">
            Preview
          </li>
          <li className="flex items-center p-1 sm:mb-4 transition-colors duration-200 hover:text-pink hover:border-purple">
            Daniel Jimenez
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
