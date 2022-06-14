import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import usePhone from "../hooks/usePhone";
import Info from "../components/Info";
import Details from "../components/Details";
import Loading from "../components/Loading/Loading";

const ProductDetailsPages = () => {
  const { product, getProduct, open, loading } = usePhone();
  const { brand, imgUrl } = product;

  useEffect(() => {
    const productLS = JSON.parse(localStorage.getItem("product")) ?? [];
    getProduct(productLS.id);
  }, []);

  return (
    <div>
      <div className="flex justify-between m-8 mb-10 md:mt-10 mt-10">
        <Link
          className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
          to="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
        <p className="text-xl font-md uppercase text-slate400 p-2">
          Details View
        </p>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col md:flex-row items-center md:justify-center md:my-20">
          {!open && (
            <img
              src={imgUrl}
              alt={`logo ${brand}`}
              className="h-72 mix-blend-multiply brightness-100 object-fill"
            />
          )}
          {!open && <Info />}

          {open && <Details />}
        </div>
      )}
    </div>
  );
};

export default ProductDetailsPages;
