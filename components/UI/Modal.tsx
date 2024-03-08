import { useEffect, useRef } from "react";

function Modal({ openModal, closeModal, children }) {
  const ref = useRef();

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);

  return (
    <dialog ref={ref} onCancel={closeModal} className=" p-5 rounded-lg ">
      {children}{" "}
      <button
        onClick={closeModal}
        className="flex flex-row items-center bg-pink text-white font-bold p-2 w-full justify-center"
      >
        Cancel
      </button>
    </dialog>
  );
}

export default Modal;
