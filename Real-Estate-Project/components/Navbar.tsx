"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import profileDefault from "@/assets/images/profile-user.png";
import { FaGoogle } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Assume this state determines if the user is logged in or not

  const pathname = usePathname();

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleProfile = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const menuData = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Properties",
      link: "/properties",
    },
    {
      name: "Add Property",
      link: "/properties/add",
    },
  ];

  return (
    <div className="navbar bg-light text-dark">
      <div className="navbar-start">
        <div className="dropdown">
          <button
            type="button"
            role="button"
            className="btn btn-ghost btn-circle"
            onClick={handleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-primary rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {menuData.map((menu, index) => (
                <li key={index}>
                  <Link
                    href={menu.link}
                    className={`${
                      pathname === menu.link ? "active" : ""
                    } "menu-title text-light hover:bg-secondary rounded-lg md:text-2xl"`}
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
              {!isLoggedIn && (
                <li>
                  <button className="btn btn-primary text-light w-full mt-2 sm:hidden">
                    <FaGoogle className="text-light" />
                    Log in or Register
                  </button>
                </li>
              )}
            </ul>
          )}
        </div>
      </div>
      <div className="navbar-center">
        <div className="flex items-center justify-center">
          <Image
            className="cursor-pointer"
            src={logo}
            width={80}
            height={50}
            alt="property logo"
          />
          <Link
            className="text-lg text-dark font-semibold cursor-pointer"
            href="/"
          >
            <div className="hide--on--mobile">
              <span className="text-primary">Property</span> Finder
            </div>
          </Link>
        </div>
      </div>
      <div className="navbar-end">
        {!isLoggedIn ? (
          <div className="hidden md:block">
            <div className="flex items-center">
              <button className="flex items-center text-white bg-gray-700 hover:bg-primary hover:text-white rounded-md px-3 py-2 transition-all ease-in-out duration-200">
                <FaGoogle className="text-light mr-2" />
                <span>Log in or Register</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="absolute right-0 flex items-center pr-2 md:static md:inset-auto">
            <Link href="/messages" className="relative group">
              <button
                type="button"
                className="relative rounded-full bg-primary p-1 text-light hover:text-accent_dark focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 transition-all ease-in-out duration-200"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>
              <span className="absolute right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                2
              </span>
            </Link>

            <div className="relative ml-3">
              <div className="custom--container">
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 hover:shadow-lg hover:shadow-black transition-all ease-in-out duration-200"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                  onClick={handleProfile}
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <Image
                    className="h-8 w-8 rounded-full"
                    src={profileDefault}
                    alt="Profile Picture"
                  />
                </button>
              </div>
            </div>

            {isUserMenuOpen && (
              <div
                id="user-menu"
                className="absolute md:right-10 md:top-16 right-8 top-8 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex={-1}
              >
                <Link
                  href="/profile.html"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex={-1}
                  id="user-menu-item-0"
                >
                  Your Profile
                </Link>
                <Link
                  href="/saved-properties.html"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex={-1}
                  id="user-menu-item-2"
                >
                  Saved Properties
                </Link>
                <button
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex={-1}
                  id="user-menu-item-2"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
