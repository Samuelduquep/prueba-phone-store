import React from "react";
import { useEffect } from "react";
import usePhone from "../hooks/usePhone";
import Product from "../components/Product";
import Loading from "../components/Loading/Loading";
import AlertMensaje from "../components/AlertMensaje";

const ProductListPage = () => {
  const {
    products,
    productFilter,
    search,
    loading,
    alertMensaje,
    getProducts,
    getProductsLS,
  } = usePhone();

  useEffect(() => {
    if (localStorage.getItem("productsLS")) {
      getProductsLS();
    } else {
      getProducts();
      return;
    }
  }, []);

  return (
    <>
      {alertMensaje.msg && <AlertMensaje alertMensaje={alertMensaje} />}
      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 m-5 md:mt-10 mt-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {search === ""
            ? products?.map((item) => <Product key={item.id} item={item} />)
            : productFilter?.map((item) => (
                <Product key={item.id} item={item} />
              ))}
        </div>
      )}
    </>
  );
};

export default ProductListPage;
