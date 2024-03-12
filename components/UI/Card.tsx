import React from "react";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { useRouter } from "next/router";

function Card({ title, url }) {
  const removeLink = () => {
    localStorage.removeItem(title);
    window.location.reload();
  };
  return (
    <div className="">
      <div className="bg-purple text-white p-4 my-2 flex justify-between items-center">
        <div>
          {" "}
          <h2>{title}</h2>
          <a href={url} target="_blank">
            {url}
          </a>
        </div>
        <div>
          <button className="bg-yellow p-3">
            {" "}
            <MdModeEdit />
          </button>
          <button className="bg-pink p-3" onClick={removeLink}>
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
