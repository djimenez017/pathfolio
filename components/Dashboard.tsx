"use client";
import Modal from "./UI/Modal";
import { useState } from "react";
import GetLocalStorageItems from "./utils/GetLocalStorageItems";

export const Dashboard = () => {
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const getTitle = (e) => {
    setTitle(e.target.value);
  };

  const getUrl = (e) => {
    setUrl(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setModal(!modal);
    localStorage.setItem(title, url);
    window.location.reload();
  };
  return (
    <div className="text-black w-3/5 mx-auto mt-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-3xl">Dashboard</h2>
        <button
          className="bg-pink px-8 py-3 text-white"
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
          <input
            type="text"
            placeholder="Website"
            className=" shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            value={title}
            onChange={getTitle}
            required
          />
          <label htmlFor="url" className="border-purple p-1">
            URL
          </label>
          <input
            type="url"
            name="url"
            id="url"
            placeholder="https://jimenez.tech"
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 focus:outline-none focus:shadow-outline "
            value={url}
            onChange={getUrl}
            required
          />
          <input
            type="button"
            value="Submit"
            className="bg-green p-2 w-full text-white font-bold mt-5"
            onClick={submitHandler}
          />
        </form>
      </Modal>
      <GetLocalStorageItems />
    </div>
  );
};
