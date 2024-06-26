"use client";
import Image from "next/image";
import {
  MdSpaceDashboard,
  MdOutlinePerson,
  MdOutlinePreview,
} from "react-icons/md";
import Link from "next/link";
import AuthButton from "../UI/AuthButton";

const Navigation = ({ user }) => {
  return user === undefined ? (
    console.log("Not Logged In, please log in to use Pathfolio!")
  ) : (
    <nav className="flex fixed bottom-0 sm:relative w-full sm:w-1/5 bg-purple sm:h-screen ">
      <div className="flex sm:flex-col sm:ml-10 p-3 w-full">
        <h1 className="sm:text-3xl sm:text-bold md:mt-5 sm:show mb-10 sm:flex hidden">
          Pathfolio
        </h1>
        <ul className="flex sm:flex-col justify-around sm:justify-normal w-full">
          <li className=" items-center p-1 sm:mb-4 transition-colors duration-200 hover:text-pink hover:border-purple">
            <Link href={`/`} className="flex flex-col sm:flex-row">
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
          <li className="flex flex-col sm:flex-row items-center p-1 sm:mb-4 transition-colors duration-200 hover:text-pink hover:border-purple">
            <AuthButton user={user} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
