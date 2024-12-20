"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FC } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { NavbarData } from "../../statics/navbar";
import { FaSearch, FaUserCircle } from "react-icons/fa";

const Navbar: FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isSubmenuOpen, setSubmenuOpen] = useState<boolean>(false);

  const toggleSubMenu = () => {
    setSubmenuOpen(!isSubmenuOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={
        "fixed z-50 flex w-full items-center justify-between bg-eventureMainBg px-8 py-4 transition-transform duration-300 md:px-56 md:py-2"
      }
    >
      <div className="flex gap-8">
        <Link href="/">
          <div className="text-3xl">Eventure</div>
        </Link>

        <form className="item-center relative hidden w-96 md:flex">
          <input
            type="text"
            placeholder="Search event"
            className="h-8 w-full rounded-lg bg-eventureMainBg2 px-5 pr-10 text-sm"
          />
        </form>
      </div>

      <div className="">
        {NavbarData.map((menu, index) => (
          <div
            key={index}
            className="relative hidden w-full justify-center px-10 md:flex md:w-64"
            onMouseEnter={() => toggleSubMenu()}
            onMouseLeave={() => toggleSubMenu()}
          >
            <button className="py-2">
              <FaUserCircle size={32}></FaUserCircle>
            </button>

            {isSubmenuOpen && (
              <div className="absolute top-12 z-10 flex h-72 w-full items-center rounded bg-white shadow-lg">
                <div className="w-full rounded-lg">
                  {menu.submenu.map((submenu, index) => (
                    <Link href={submenu.link}>
                      <div className="mx-4 my-2 cursor-pointer rounded-lg px-8 py-2 text-gray-600 hover:bg-gray-200">
                        {submenu.title}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="md:hidden">
        <button onClick={toggleMobileMenu} aria-label="Toggle menu">
          {isMobileMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>
      </div>
      <div
        className={`absolute left-0 top-16 flex w-full flex-col gap-5 bg-white py-8 text-eventureMainBg shadow-lg transition-all duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <button className="px-8 text-left text-lg">Profile</button>
        <button className="px-8 text-left text-lg">Tickets</button>
        <button className="px-8 text-left text-lg">Transactions</button>
        <button className="px-8 text-left text-lg">Vouchers</button>
        <button className="px-8 text-left text-lg">Points</button>
      </div>
    </header>
  );
};

export default Navbar;
