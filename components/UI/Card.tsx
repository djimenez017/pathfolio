import React from "react";
import { MdModeEdit, MdDelete } from "react-icons/md";

function Card(props) {
  return (
    <div className="">
      <div className="bg-purple text-white p-4 my-2 flex justify-between items-center">
        <div>
          {" "}
          <h2>{props.title}</h2>
          <p>{props.url}</p>
        </div>
        <div>
          <button className="bg-yellow p-3">
            {" "}
            <MdModeEdit />
          </button>
          <button className="bg-pink p-3">
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
