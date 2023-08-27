import React from "react";
import { BiHomeCircle } from "react-icons/bi";
import { BsChevronDown, BsShopWindow, BsClipboard } from "react-icons/bs";
import { BiUserPlus, BiLogOut } from "react-icons/bi";
import { TfiGallery } from "react-icons/tfi";
import { FaRegUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Logout from "../components/Logout";
import { Navbar } from "flowbite-react";

const Sidebar = () => {
  return (
    <div className=" inline-block w-1/5 bg-[#323232] h-screen overflow-auto">
      {/* <Navbar /> */}
      <div className="">
        {/* overview */}
        <div className=" px-5 py-3  border-b border-stone-500">
          <NavLink to="/" className=" flex items-center mt-2 text-white">
            <span className=" text-2xl mr-2">
              <BiHomeCircle />
            </span>
            <h1 className="text-[18px]">Overview</h1>
          </NavLink>
        </div>
        {/* sale */}
        <div className="collapse border-b border-stone-500 rounded-none">
          <input type="checkbox" />
          <div className="collapse-title">
            <div className="flex justify-between items-center  px-2">
              {/* <div className="  border-b border-stone-500"> */}
              <span className=" text-xl mr-2 text-white flex items-center gap-2">
                <BsShopWindow />
                <h1 className=" text-[18px]">Sales</h1>
              </span>
              <span className=" mt-3 text-white ml-10">
                <BsChevronDown />{" "}
              </span>

              {/* </div> */}
            </div>
          </div>
          <div className="collapse-content">
            <ul className="text-[18px]">
              <NavLink to={"/sale/cashier"}>
                <li className=" text-white ml-10 mb-3">Cashier</li>
              </NavLink>
              <li className=" text-white ml-10 mb-3">Recent</li>
            </ul>
          </div>
        </div>
        {/* Inventory */}
        <div className="collapse border-b border-stone-500 rounded-none">
          <input type="checkbox" />
          <div className="collapse-title">
            <div className="flex justify-between items-center  px-2">
              {/* <div className="  border-b border-stone-500"> */}
              <span className=" text-xl mr-2 text-white flex items-center gap-2">
                <BsClipboard />
                <h1 className=" text-[18px]">Inventory</h1>
              </span>
              <span className=" mt-3 text-white ml-10">
                <BsChevronDown />{" "}
              </span>

              {/* </div> */}
            </div>
          </div>
          <div className="collapse-content">
            <ul className="text-[18px]">
              <NavLink to={"/products"}>
                <li className=" text-white ml-10 mb-3">Products</li>
              </NavLink>
              <NavLink to={"/products/create"}>
                <li className=" text-white ml-10 mb-3">Add Product</li>
              </NavLink>
              <NavLink to={"/stock"}>
                <li className=" text-white ml-10 mb-3">Stock Control</li>
              </NavLink>
              <NavLink to={'/brand'}>
                <li className=" text-white ml-10 mb-3">Manage Brands</li>
              </NavLink>
            </ul>
          </div>
        </div>
        {/* User */}
        <div className="collapse border-b border-stone-500 rounded-none">
          <input type="checkbox" />
          <div className="collapse-title">
            <div className="flex justify-between items-center  px-2">
              {/* <div className="  border-b border-stone-500"> */}
              <span className=" text-xl mr-2 text-white flex items-center gap-2">
                <BiUserPlus />
                <h1 className=" text-[18px]">User</h1>
              </span>
              <span className=" mt-3 text-white ml-10">
                <BsChevronDown />{" "}
              </span>

              {/* </div> */}
            </div>
          </div>
          <div className="collapse-content">
            <ul className="text-[18px]">
              <NavLink to={"/users"}>
                <li className=" text-white ml-10 mb-3">OverView</li>
              </NavLink>
              <Link to={"/users/create"}>
                <li className=" text-white ml-10 mb-3">Create User</li>
              </Link>
            </ul>
          </div>
        </div>
        {/* media */}
        <div className=" px-5 py-3  border-b border-stone-500">
          <NavLink to={"/media"} className=" flex items-center mt-2 text-white">
            <span className=" text-xl mr-2">
              <TfiGallery />
            </span>
            <h1 className="text-[18px]">Media</h1>
          </NavLink>
        </div>
        {/* profile */}
        <div className="collapse border-b border-stone-500 rounded-none">
          <input type="checkbox" />
          <div className="collapse-title">
            <div className="flex justify-between items-center  px-2">
              {/* <div className="  border-b border-stone-500"> */}
              <span className=" text-xl mr-2 text-white flex items-center gap-2">
                <FaRegUserCircle />
                <h1 className=" text-[18px]">Profile</h1>
              </span>
              <span className=" mt-3 text-white ml-10">
                <BsChevronDown />{" "}
              </span>

              {/* </div> */}
            </div>
          </div>
          <div className="collapse-content">
            <ul className="text-[18px]">
              <NavLink to={"/profile"}>
                <li className=" text-white ml-10 mb-3">My Account</li>
              </NavLink>
              <NavLink to={"/profile/edit"}>
                <li className=" text-white ml-10 mb-3">Edit</li>
              </NavLink>
            </ul>
          </div>
        </div>
        {/* logout */}
        <div className=" px-5 py-3  border-b border-stone-500">
          <Logout />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
