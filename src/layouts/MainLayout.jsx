import React from "react";
import { Outlet } from "react-router-dom";
import Headers from "../components/Headers";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <Headers></Headers>
      <div className="container mx-auto min-h-[calc(100vh-100px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
