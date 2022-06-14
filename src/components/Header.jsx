import React from "react";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import usePhone from "../hooks/usePhone";

const Header = () => {
  const { count } = usePhone();

  return (
    <div className=" bg-blue-700 p-10 md:flex justify-between items-center w-full z-10 ">
      <Link to="/">
        <h1 className=" text-center font-black text-white text-2xl hover:text-sky-200 transition-colors">
          PHONE STORE
        </h1>
      </Link>
      <div className="mt-5 md:mt-0 flex flex-col md:flex-row gap-4 md:content-center">
        <SearchInput />
        <div className=" text-white md:flex md:items-center mr-0 ml-auto md:relative ">
          {count === 0 ? null : (
            <p className=" bg-white h-5 w-5 rounded-full text-gray-600 text-xs text-center md:bottom-8 md:mr-0 mr-5  font-bold right-0 absolute">
              {count}
            </p>
          )}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
