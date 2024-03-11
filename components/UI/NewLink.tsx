import { useState } from "react";

function NewLink() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [modal, setModal] = useState(false);

  let listOfLinks = [];

  const getTitle = (e) => {
    setTitle(e.target.value);
  };

  const getUrl = (e) => {
    setUrl(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title, url, modal);
    setModal(!modal);
    localStorage.setItem(title, url);
  };

  return (
    <form action="post" className="flex flex-col">
      <label htmlFor="title" className="p-1">
        Title
      </label>
      <input
        type="text"
        placeholder="Website"
        className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={title}
        onChange={getTitle}
      />
      <label htmlFor="url" className="border-purple p-1">
        URL
      </label>
      <input
        type="url"
        name="url"
        id="url"
        placeholder="https://jimenez.tech"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
        value={url}
        onChange={getUrl}
      />
      <input
        type="button"
        value="Submit"
        className="bg-green p-2 w-full text-white font-bold mt-5"
        onClick={submitHandler}
      />
    </form>
  );
}

export default NewLink;
