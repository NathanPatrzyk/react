import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Modal({ children }: Props) {
  const closeModal = (): void => {
    const modal = document.querySelector("#modal");
    modal!.classList.add("hidden");
  };

  return (
    <div className="hidden" id="modal">
      <div
        onClick={closeModal}
        className="size-full absolute bg-black opacity-30"
      ></div>
      <div className="absolute top-[10%] left-0 right-0 mx-auto w-125 h-100 z-1 bg-white flex flex-col justify-center text-center">
        <h2 className="mb-4">Texto modal</h2>
        {children}
      </div>
    </div>
  );
}

export default Modal;
