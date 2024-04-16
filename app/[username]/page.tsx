"use client";
import React from "react";
import { PrismaClient } from "@prisma/client";
import { useParams } from "next/navigation";
const prisma = new PrismaClient();

const page = async ({ user }) => {
  const params = useParams();
  const userData = await prisma.user.findUnique({
    where: {
      username: JSON.stringify(params),
    },
  });
  console.log(userData);
  return (
    <div className="text-black sm:w-3/5 sm:mt-5 mx-auto">
      <div className="flex justify-between mx-auto items-center mb-4">
        <h2 className="font-bold text-3xl text-black">Dashboard</h2>
        <button className="bg-pink px-8 py-3 text-white">Add New</button>
      </div>
    </div>
  );
};

export default page;
