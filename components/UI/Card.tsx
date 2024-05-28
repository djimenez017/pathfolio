import React from "react";
import { MdModeEdit, MdDelete } from "react-icons/md";

function Card({ title, url, index }) {
  const removeLink = () => {
    // Construct the localStorage key using the title
    const localStorageKey = `link_${title}`; // Use a prefix for clarity

    // Remove the item from localStorage
    localStorage.removeItem(localStorageKey);
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
          <button className="bg-pink p-4">
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
