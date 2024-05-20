import React, { useState } from "react";
import {
  FaHome,
  FaUserCircle,
  FaQuestionCircle,
  FaBookOpen,
} from "react-icons/fa";
import { FaBusSimple, FaBowlFood } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdOutlineCardTravel } from "react-icons/md";
const navbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Tour",
    link: "/tour",
  },
  {
    name: "Foodie",
    link: "/food",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
  {
    name: "About us",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Travel",
    link: "/travel",
  },
];

const ResponsiveMenu = ({ showMenu, setshowMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="Navbar_card">
        {/* top section*/}
        <div>
          <div className="flex item-center justify-start gap-4">
            <FaUserCircle size={50} className="text-gray-500" />
            <div className="text-gray-500">
              <h1>Hello user</h1>
              <h1 className="text-sm text-slate-500">Name</h1>
            </div>
          </div>
        </div>
        {/* Navlink section*/}
        <div className="text-black mt-12">
          <ul className="space-y-4 text-xl">
            {navbarLinks.map(({ name, link }) => (
              <li>
                <Link
                  to={link}
                  onClick={() => setshowMenu(false)}
                  className="mb-5 inline-block flex items-center"
                >
                  {name === "About us" ? (
                    <>
                      <FaQuestionCircle size={24} className="mr-2" />
                      <span>{name}</span>
                    </>
                  ) : name === "Home" ? (
                    <>
                      <FaHome size={24} className="mr-2" />
                      <span>{name}</span>
                    </>
                  ) : name === "Tour" ? (
                    <>
                      <FaBusSimple size={24} className="mr-2" />
                      <span>{name}</span>
                    </>
                  ) : name === "Foodie" ? (
                    <>
                      <FaBowlFood size={24} className="mr-2" />
                      <span>{name}</span>
                    </>
                  ) : name === "Blogs" ? (
                    <>
                      <FaBookOpen size={24} className="mr-2" />
                      <span>{name}</span>
                    </>
                  ) : name === "Contact" ? (
                    <>
                      <IoMdContact size={24} className="mr-2" />
                      <span>{name}</span>
                    </>
                  ) : name === "Travel" ? (
                    <>
                      <MdOutlineCardTravel size={24} className="mr-2" />
                      <span>{name}</span>
                    </>
                  ) : (
                    name
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
