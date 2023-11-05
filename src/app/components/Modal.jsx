"use client"
import { useState } from "react";

function Modal() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button onClick={() => setOpenModal(true)}>
        Sign in
      </button>

      <div className={`${openModal ? "block" : "hidden"} fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/50  backdrop-blur-sm`}>
        <div className="bg-white w-1/2 mx-auto">
          <form action="">
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Modal;
