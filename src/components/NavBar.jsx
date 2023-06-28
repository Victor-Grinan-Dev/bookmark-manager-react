import React, { useState } from "react";
import AppLink from "./AppLink";
import Image from "../functions/Image";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navToggle = (e) => {
    setIsOpen(!isOpen)
  }

  return (
    <nav id="navbar" className="container relative mx-auto p-6">
      <div className="flex items-center justify-between space-x-20 my-6">
        <div className="z-30">
          <Image name="logo" type="" />
        </div>

        <div className="hidden items-center space-x-10 uppercase text-grayishBlue md:flex">
          <AppLink
            caption="Features"
            linkedTo="features"
            classes="tracking-widest hover:text-softRed cursor-pointer"
          />
          <AppLink
            caption="Download"
            linkedTo="download"
            classes="tracking-widest hover:text-softRed cursor-pointer"
          />
          <AppLink
            caption="FAQ"
            linkedTo="faq"
            classes="tracking-widest hover:text-softRed cursor-pointer"
          />

          <AppLink
            caption="Login"
            linkedTo="login"
            classes="px-8 py-2 text-white bg-softRed border-2 border-softRed rounded-lg shadow-md hover:text-softRed cursor-pointer hover:bg-white"
          />
        </div>
        <button
          id="menu-btn"
          className={`z-30 block md:hidden focus:outline-none hamburger ${isOpen === true ? "open" : ""}`}
          onClick={navToggle}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      <div
        id="menu"
        className={`${isOpen ? "" : "hidden"} md:hidden fixed inset-0 z-20 flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase  opacity-90 bg-veryDarkBlue`}
      >
        <div className="w-full py-3 text-center divide-y divide-gray-500">
          <AppLink
            caption="Features"
            linkedTo="features"
            classes="block hover:text-softRed cursor-pointer py-5"
            fx={navToggle}
          />
          <AppLink
            caption="Download"
            linkedTo="download"
            classes="block hover:text-softRed cursor-pointer  py-5"
            fx={navToggle}
          />
          <AppLink
            caption="FAQ"
            linkedTo="faq"
            classes="block hover:text-softRed cursor-pointer  py-5"
            fx={navToggle}
          />

          <AppLink
            caption="Login"
            linkedTo="login"
            classes="block hover:text-softRed cursor-pointer  py-5"
            fx={navToggle}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
