import React from "react";
import AsideBar from "./Component/AsideBar";
import { Outlet } from "react-router-dom";
import Navbaar from "./Component/Navbaar";

const layout = () => {
  return (
    <div>
      <div className="flex ">
        <AsideBar />
        <div className="w-full">
          <Navbaar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default layout;
