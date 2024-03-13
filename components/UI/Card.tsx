import React from "react";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { useRouter } from "next/router";

function Card({ title, url }) {
  const removeLink = () => {
    localStorage.removeItem(title);
    window.location.reload();
  };
  return (
    <div className="shadow-lg ">
      <div className="bg-purple text-white p-5 my-5 flex justify-between items-center rounded-md">
        <div>
          {" "}
          <h2 className="text-2xl font-bold">{title}</h2>
          <a href={url} target="_blank" className="text-yellow">
            {url}
          </a>
        </div>
        <div>
          <button className="bg-yellow p-4">
            {" "}
            <MdModeEdit />
          </button>
          <button className="bg-pink p-4" onClick={removeLink}>
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
