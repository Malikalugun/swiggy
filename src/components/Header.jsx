import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";
export default function Header() {
  // maange state
  const [toggle, setToggle] = useState(false);
  const showSideMenu = () => {
    console.log("hii");
    setToggle(true);
  };
  const hideSideMenu = () => {
    setToggle(false);
  };
  const links = [
    {
      icon: <CiSearch />,
      name: "Search",
    },
    {
      icon: <CiDiscount1 />,
      name: "Offer",
      sup: "New",
    },
    {
      icon: "",
      name: "Help",
    },
    {
      icon: "",
      name: "Sign In",
    },
    {
      icon: "",
      name: "Cart",
      sup: "2",
    },
  ];
  return (
    // react fagment
    <>
      <div
        className="back-overelay w-full h-full fixed duration-500"
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[400px] bg-white h-full absolute duration-[400ms]"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        ></div>
      </div>
      <header className="p-[15px] shadow-xl text-[#686b78]">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="w-[100px]">
            <img src="images/swiggy.png" alt="swiggy logo" />
          </div>
          <div className="">
            <span className="font-bold border-b-[3px] border-[black]">
              Ratanada{" "}
            </span>
            Jodhpur,Rajasthan,India
            <RxCaretDown
              onClick={showSideMenu}
              fontSize={25}
              className="font-bold inline text-[0.9rem] text-[#fc8019] cursor-pointer"
            />
          </div>
          <nav className="flex list-none gap-5 ml-auto text-[18px] font-semibold">
            {links.map((link, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center gap-2 hover:text-[#fc8019] cursor-pointer"
                >
                  {link.icon}
                  {link.name}
                  <sup>{link.sup}</sup>
                </li>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
}
