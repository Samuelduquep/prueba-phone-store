import React from "react";
import usePhone from "../hooks/usePhone";
import AlertMensaje from "./AlertMensaje";
import { useState } from "react";

const Info = () => {
  const { product, open, setOpen, add_Cart, alertMensaje, setAlertMensaje } =
    usePhone();

  const { brand, model, ram, price, options } = product;
  const [colorCode, setColorCode] = useState("");
  const [storageCode, setStorageCode] = useState("");

  const handleSubmitCart = (e) => {
    e.preventDefault();
    const productSelect = {
      id: product.id,
      colorCode,
      storageCode,
    };

    if (
      productSelect.colorCode === "" ||
      productSelect.colorCode === "Seleccione"
    ) {
      setAlertMensaje({
        err: true,
        msg: "Debe seleccionar un color",
      });
      setTimeout(() => {
        setAlertMensaje({});
      }, 3000);
      return;
    } else if (
      productSelect.storageCode === "" ||
      productSelect.storageCode === "Seleccione"
    ) {
      setAlertMensaje({
        err: true,
        msg: "Debe seleccionar la capacidad del producto",
      });
      setTimeout(() => {
        setAlertMensaje({});
      }, 3000);
      return;
    }

    add_Cart(productSelect);
    setTimeout(() => {
      setAlertMensaje({});
    }, 3000);
  };

  const handleChangeColor = (e) => {
    setColorCode(e.target.value);
  };

  const handleChangeStorage = (e) => {
    setStorageCode(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col md:mx-20 mx-5">
        <p className=" text-4xl text-gray-700 font-thin">
          {brand} {model} {ram} {document.cookie}
        </p>
        <p className=" text-indigo-600 font-bold text-4xl mt-2">{price} €</p>
        <p className=" text-md text-gray-700 font-thin uppercase">
          Entrega de 4-6 días
        </p>
        <form onSubmit={handleSubmitCart} className=" py-5 flex flex-col gap-4">
          <div>
            <label htmlFor="">Color del producto:</label>
            <select
              name="SelectProductColor"
              id="productColor"
              onChange={handleChangeColor}
              className="form-select appearance-none
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding bg-no-repeat
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            >
              <option value="Seleccione">Seleccione</option>
              {options?.colors?.map((item) => (
                <option key={item.name} value={item.code} className="p-4">
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="">Capacidad del producto:</label>
            <select
              name="SelectProductStorage"
              id="storageProduct"
              onChange={handleChangeStorage}
              className="form-select appearance-none
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding bg-no-repeat
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            >
              <option> Seleccione </option>
              {options?.storages?.map((item) => (
                <option key={item.name} value={item.code}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <button
            name="addToCar"
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          >
            Add to Cart
          </button>
          {!open && (
            <button
              name="details"
              onClick={() => setOpen(!open)}
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            >
              Details
            </button>
          )}
          {alertMensaje.msg && <AlertMensaje alertMensaje={alertMensaje} />}
        </form>
      </div>
    </>
  );
};

export default Info;
