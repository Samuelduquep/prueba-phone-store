import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <main className="">
        <Header />
        <div className="w-full">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Layout;
