"use client";
import Modal from "./UI/Modal";
import { useState } from "react";
import Card from "@/components/UI/Card";
import NewLink from "./UI/NewLink";

export const Dashboard = () => {
  const [modal, setModal] = useState(false);

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
        <NewLink />
      </Modal>
      <Card />
    </div>
  );
};
