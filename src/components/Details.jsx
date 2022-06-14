import React from "react";
import usePhone from "../hooks/usePhone";

const Details = () => {
  const { product, open, setOpen } = usePhone();
  const {
    cpu,
    ram,
    os,
    displayResolution,
    battery,
    primaryCamera,
    secondaryCmera,
    dimentions,
    weight,
  } = product;

  const clasesLi =
    "w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white";

  const clasesSpan = "text-orange-400";

  return (
    <>
      <div className="flex flex-col items-center md:mx-20 my-5 md:my-auto mx-5 h-full md:w-1/3">
        <ul className=" w-full text-sm text-center font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className={clasesLi}>
            <span className={clasesSpan}>OS:</span> {os}
          </li>
          <li className={clasesLi}>
            <span className={clasesSpan}>C.P.U:</span> {cpu}
          </li>
          <li className={clasesLi}>
            <span className={clasesSpan}>Display Resolution:</span>{" "}
            {displayResolution}
          </li>
          <li className={clasesLi}>
            <span className={clasesSpan}>Ram:</span> {ram}
          </li>
          <li className={clasesLi}>
            <span className={clasesSpan}>Battery:</span> {battery}
          </li>
          <li className={clasesLi}>
            <span className={clasesSpan}>Primary Camera:</span> {primaryCamera}
          </li>
          <li className={clasesLi}>
            <span className={clasesSpan}>Secondary Camera:</span>{" "}
            {secondaryCmera}
          </li>
          <li className={clasesLi}>
            <span className={clasesSpan}>Dimentions:</span> {dimentions}
          </li>
          <li className={clasesLi}>
            <span className={clasesSpan}>Weight:</span> {weight} gr
          </li>
        </ul>
        <button
          onClick={() => setOpen(!open)}
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mb-10 mt-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Details;
