"use client";
import { MdModeEdit, MdDelete } from "react-icons/md";
import Modal from "./UI/Modal";
import { useState } from "react";

export const Dashboard = () => {
  const [modal, setModal] = useState(false);
  const [linkItems, setLinkItems] = useState({
    name: "Website",
    url: "https://jimenez.tech",
  });
  return (
    <div className="text-black w-3/5 mx-auto ">
      <div className="flex justify-between items-center mb-4">
        <h2>Dashboard</h2>
        <button
          className="bg-pink px-6 py-2 text-white"
          onClick={() => setModal(true)}
        >
          Add New
        </button>
      </div>

      <Modal openModal={modal} closeModal={() => setModal(false)}>
        <h3 className="p-3 text-center text-bold">Add new URL</h3>
        <form action="post" className="flex flex-col">
          <label htmlFor="title" className="p-1">
            Title
          </label>
          <input type="text" className="p-1" />
          <label htmlFor="url" className="border-purple p-1">
            URL
          </label>
          <input type="url" name="url" id="url" className="p-1" />
        </form>
      </Modal>

      <div className="">
        <div className="bg-purple text-white p-4 my-2 flex justify-between items-center">
          <div>
            {" "}
            <h2>Website</h2>
            <p>https://jimenez.tech</p>
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
    </div>
  );
};
