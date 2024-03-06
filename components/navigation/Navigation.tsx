import React from "react";

const Navigation = () => {
  return (
    <nav className="flex w-1/3 bg-purple h-screen">
      <div className=" flex flex-col ml-10">
        <h1 className="font-bold text-lg">Pathfolio</h1>
        <ul className="flex flex-col justify-around">
          <li>Dashboard</li>
          <li>Preview</li>
          <li>Daniel Jimenez</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
