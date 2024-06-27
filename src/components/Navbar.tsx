"use client";
import Link from "next/link";
import React, { useState } from "react";


const Navbar = () => {
  const [state, setState] = useState(false);

  const navigation = [
    { title: "Home", path: "#" },
    { title: "Projects", path: "#" },
    { title: "About Us", path: "#" },
    { title: "Contact Us", path: "#" },
  ];

  return (
    <nav className="navbar absolute top-0 bg-transparent border-b w-full md:text-sm md:border-none">
      <div className="border-b border-[#EBCFA7] items-center max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto md:flex">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="#">
            <img
              src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/ammmar.png?v=1719436690"
              width={80}
              height={50}
              alt="Float UI logo"
            />
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-6 md:flex md:space-x-10 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="text-white hover:text-gray-100 text-[1.05rem] font-semibold uppercase tracking-wide"
                >
                  <a href={item.path} className="block">
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
