import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Rootlayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className=" flex bg-[#272727]">
        <Sidebar />
        <div className="w-4/5">{children}</div>
        </div>
    </div>
  );
};

export default Rootlayout;
