import React from "react";
import usePhone from "../hooks/usePhone";
import { useNavigate } from "react-router-dom";

const Product = ({ item }) => {
  const { getProduct, localExpire } = usePhone();
  const { brand, model, price, imgUrl, id } = item;

  const navigate = useNavigate();

  const handleLocalStorage = (item) => {
    localExpire("product", item)
    // sessionStorage.setItem("product", JSON.stringify(item));
    navigate(`/product/${id}`);
  };

  return (
    <div
      className=" p-8 flex flex-col items-center gap-2 rounded-xl hover:bg-gray-200 transition-colors hover:cursor-pointer"
      onClick={() => {
        handleLocalStorage(item);
        getProduct(id);
      }}
    >
      <img
        src={imgUrl}
        alt={`imagen ${model}`}
        className="w-2/4 transition-all rounded-xl  mix-blend-multiply brightness-100"
        loading="lazy"
      />
      <div className="flex flex-col items-center mt-5">
        <p className="font-bold">{brand}</p>
        <p className="font-bold">
          <span>{model}</span>
        </p>
        {price && <p className="font-bold">€ {price}</p>}
      </div>
    </div>
  );
};

export default Product;
