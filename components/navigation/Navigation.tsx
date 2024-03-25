import React from "react";
import {
  MdSpaceDashboard,
  MdOutlinePerson,
  MdOutlinePreview,
} from "react-icons/md";

const Navigation = () => {
  return (
    <nav className="flex fixed bottom-0 sm:relative w-full sm:w-1/5 bg-purple sm:h-screen ">
      <div className="flex sm:flex-col sm:ml-10 p-3 w-full">
        <h1 className="sm:text-3xl sm:text-bold md:mt-5 sm:show mb-10 sm:flex hidden">
          Pathfolio
        </h1>
        <ul className="flex sm:flex-col justify-around sm:justify-normal w-full">
          <li className="flex flex-col sm:flex-row items-center p-1 sm:mb-4 transition-colors duration-200 hover:text-pink  hover:border-purple">
            <MdSpaceDashboard size={25} />
            <p className="ml-2">Dashboard</p>
          </li>
          <li className="flex flex-col sm:flex-row items-center p-1 sm:mb-4 transition-colors duration-200 hover:text-pink hover:border-purple">
            <MdOutlinePreview size={25} />
            <p className="ml-2">Preview</p>
          </li>
          <li className="flex flex-col sm:flex-row items-center p-1 sm:mb-4 transition-colors duration-200 hover:text-pink hover:border-purple">
            <MdOutlinePerson size={25} />
            <p className="ml-2">My Profile</p>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
