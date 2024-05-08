import React from "react";

const Page = async ({ user }) => {
  console.log(user);
  return (
    <div className="text-black sm:w-3/5 sm:mt-5 mx-auto">
      <div className="flex justify-between mx-auto items-center mb-4">
        <h2 className="font-bold text-3xl text-black">Dashboard</h2>
        <button className="bg-pink px-8 py-3 text-white">Add New</button>
      </div>
    </div>
  );
};

export default Page;
