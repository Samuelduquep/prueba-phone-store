import React from "react";
import { useState, useEffect, createContext } from "react";

const PhoneContext = createContext();

const PhoneProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [alertMensaje, setAlertMensaje] = useState({});
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [productFilter, setProductFilter] = useState([]);
  const [productColor, setProductColor] = useState("");
  const [storageProduct, setStorageProduct] = useState("");
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) ?? []
  );
  const [count, setCount] = useState(
    JSON.parse(localStorage.getItem("count")) ?? 0
  );

  useEffect(() => {
    localExpire("cart", cart);
    localExpire("count", count);
  }, [cart]); // eslint-disable-next-line

  useEffect(() => {
    filterProduct();
  }, [search]); // eslint-disable-next-line

  const localExpire = (nameStorage, item) => {
    var hours = 1; // to clear the localStorage after 1 hour
    var now = new Date().getTime();
    var setupTime = localStorage.getItem("setupTime");

    localStorage.setItem(nameStorage, JSON.stringify(item));

    if (setupTime == null) {
      localStorage.setItem("setupTime", now);
    } else {
      if (now - setupTime > hours * 60 * 60 * 1000) {
        localStorage.clear();
        localStorage.setItem("setupTime", now);
        setCount(0)
      }
    }
  };

  const handleRequest = (product) => {
    var requestOptions = {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
        cookie:
          "session_id=s%3AsZnL1XQy1jOtN8yKKpCVmG0ik9j8dFIN.VanMqGnbXPYqEThShRlW%2FRt8autk0INwpa90SDSS75A",
      },
      mode: "cors",
    };

    fetch("https://front-test-api.herokuapp.com/api/cart/", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const add_Cart = (productSelect) => {
    if (
      cart.some(
        (prod) =>
          prod.id === productSelect.id &&
          prod.colorCode === productSelect.colorCode &&
          prod.storageCode === productSelect.storageCode
      )
    ) {
      setAlertMensaje({
        err: true,
        msg: "Producto ya Existe",
      });
    } else if (cart.some((product) => product.id === productSelect.id)) {
      const cartUpdated = cart.map((product) => {
        if (product.id === productSelect.id) {
          product.colorCode = productSelect.colorCode;
          product.storageCode = productSelect.storageCode;
        }
        return product;
      });
      setCart([...cart, cartUpdated]);
      setCart(cartUpdated);
      setAlertMensaje({
        err: false,
        msg: "Producto Actualizado",
      });
    } else {
      handleRequest(productSelect);
      setAlertMensaje({
        err: false,
        msg: "Producto Agregado",
      });
      setCount(count + 1);
      setCart([...cart, productSelect]);
    }
  };

  //Funcion para filtrar resultados
  const filterProduct = () => {
    const filter = products.filter((product) => {
      if (
        product.brand.toLowerCase().includes(search.toLowerCase()) ||
        product.model.toLowerCase().includes(search.toLowerCase()) ||
        product.price.toLowerCase().includes(search.toLowerCase())
      ) {
        return product;
      }
    });
    setProductFilter(filter);
  };

  const getProducts = async () => {
    try {
      setLoading(true);
      const url = "https://front-test-api.herokuapp.com/api/product";
      const resp = await fetch(url);
      const result = await resp.json();
      setProducts(result);
      localExpire("productsLS", result);
      // sessionStorage.setItem("productsLS", JSON.stringify(result));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductsLS = async () => {
    setLoading(true);
    const pls = JSON.parse(localStorage.getItem("productsLS"));
    setProducts(pls);
    setLoading(false);
  };

  const getProduct = async (id) => {
    try {
      setProduct([]);
      setLoading(true);
      const url = `https://front-test-api.herokuapp.com/api/product/${id}`;
      const resp = await fetch(url);
      const result = await resp.json();
      setProduct(result);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PhoneContext.Provider
      value={{
        products,
        setProducts,
        product,
        setProduct,
        getProduct,
        loading,
        setLoading,
        open,
        setOpen,
        search,
        setSearch,
        getProducts,
        productFilter,
        productColor,
        setProductColor,
        storageProduct,
        setStorageProduct,
        alertMensaje,
        setAlertMensaje,
        add_Cart,
        setCart,
        count,
        setCount,
        getProductsLS,
        localExpire
      }}
    >
      {children}
    </PhoneContext.Provider>
  );
};

export { PhoneProvider };

export default PhoneContext;
