"use client";
import Modal from "./UI/Modal";
import { useEffect, useState } from "react";
import GetLocalStorageItems from "./utils/GetLocalStorageItems";

export const Dashboard = () => {
  const [modal, setModal] = useState(false);
  const [linktitle, setLinkTitle] = useState("");
  const [linkurl, setLinkUrl] = useState("");
  const [links, setLinks] = useState(
    JSON.parse(localStorage.getItem("links")) || []
  );

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  const getTitle = (e) => {
    setLinkTitle(e.target.value);
  };

  const getUrl = (e) => {
    setLinkUrl(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newLink = { name: linktitle, url: linkurl };
    setLinks([...links, newLink]);
    setModal(false);
    setLinkTitle("");
    setLinkUrl("");
  };

  return (
    <div className="text-black sm:w-3/5 sm:mt-5 mx-auto">
      <div className="flex justify-between mx-auto items-center mb-4">
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
            value={linktitle}
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
            value={linkurl}
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
      <GetLocalStorageItems data={links} />
    </div>
  );
};
