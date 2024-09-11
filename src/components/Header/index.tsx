import { useState } from "react";
import { MdMenu, MdMenuOpen } from "react-icons/md";
import { HEADER_TITLE } from "../../constants/textconstants";
import { Navbar } from "../Navbar";
import { createPortal } from "react-dom";
export const Header = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleHamburgerMenuClick = () => {
    const element = document.querySelector("#modal-container");
    if(showModal){
      setShowModal(false);
      element?.classList.add(`hidden`);
    } else {
      setShowModal(true);
      element?.classList.remove(`hidden`);
    }
    
  }
  const modalElement = document.getElementById("modal-container")!;

    return ( <header className="bg-violet-400 text-2xl flex flex-row" role="banner">
        <div className="text-4xl dark:text-white cursor-pointer" onClick={toggleHamburgerMenuClick}>
          {!showModal ? <MdMenu /> : <MdMenuOpen />}
          </div>
        <div className="text-center w-full dark:text-white select-none">{HEADER_TITLE}</div>
        {showModal && createPortal(
          <Navbar onCloseHandle={toggleHamburgerMenuClick}/>,
          modalElement
        )}
  </header> );
}