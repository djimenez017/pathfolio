"use Client";
import { createContext, useContext, useState } from "react";
import Image from "next/image";
import {
  MdSpaceDashboard,
  MdOutlinePerson,
  MdOutlinePreview,
} from "react-icons/md";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const prisma = new PrismaClient();

const Navigation = async ({ user }) => {
  const [loggedInUser, setLoggedInUser] = useState();
  const userData = await prisma.user.findUnique({
    where: {
      email: user.email,
    },
  });
  setLoggedInUser(userData);
  console.log(loggedInUser);
  return (
    <nav className="flex fixed bottom-0 sm:relative w-full sm:w-1/5 bg-purple sm:h-screen ">
      <div className="flex sm:flex-col sm:ml-10 p-3 w-full">
        <h1 className="sm:text-3xl sm:text-bold md:mt-5 sm:show mb-10 sm:flex hidden">
          Pathfolio
        </h1>
        <ul className="flex sm:flex-col justify-around sm:justify-normal w-full">
          <li className=" items-center p-1 sm:mb-4 transition-colors duration-200 hover:text-pink  hover:border-purple">
            <Link
              href={`/${userData?.username}`}
              className="flex flex-col sm:flex-row"
            >
              <MdSpaceDashboard size={25} />
              <p className="ml-2">Dashboard</p>
            </Link>
          </li>
          <li className="flex flex-col sm:flex-row items-center p-1 sm:mb-4 transition-colors duration-200 hover:text-pink hover:border-purple">
            <MdOutlinePreview size={25} />
            <p className="ml-2">Preview</p>
          </li>
          <li className="flex flex-col sm:flex-row items-center p-1 sm:mb-4 transition-colors duration-200 hover:text-pink hover:border-purple">
            {user.image ? (
              <Image
                src={user.image}
                width={35}
                height={35}
                alt={user.name}
                className="rounded-full"
              />
            ) : (
              <MdOutlinePerson size={25} />
            )}
            <p className="ml-2">{user ? user.name : "My Profile"}</p>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
