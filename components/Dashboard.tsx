import { MdModeEdit, MdDelete } from "react-icons/md";

export const Dashboard = () => {
  return (
    <div className="text-black w-3/5 mx-auto ">
      <div className="flex justify-between items-center mb-4">
        <h2>Dashboard</h2>
        <button className="bg-pink px-6 py-2 text-white">Add New</button>
      </div>

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
