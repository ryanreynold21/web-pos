import React, { useState } from "react";
import Rootlayout from "../layout/Rootlayout";
import { BiMessageAltMinus } from "react-icons/bi";
import { BsTelephoneForward } from "react-icons/bs";
import { TbEdit } from "react-icons/tb";

const EditProfile = () => {
  const [section, setSection] = useState("personal");
  const [selectedGenders, setSelectedGenders] = useState([]);
  const handleCheckboxChange = (value) => {
    setSelectedGenders(value);
  };
  return (
    <Rootlayout>
      <div className=" mx-10 my-5">
        {/* header */}
        <h1 className=" text-[20px] font-[500] text-white">Edit Profile</h1>
        <div className=" flex items-end gap-10 mt-10 mx-5">
          {/* image */}
          <div className="">
            <img
              className=" w-[150px] h-[150px] object-cover rounded-full"
              src="https://i.pinimg.com/564x/48/6c/a0/486ca00640b169300b48e9ceacd8e401.jpg"
              alt=""
            />
          </div>
          {/* name */}
          <div className=" text-white mb-5">
            <h1 className=" text-[22px] font-[700] tracking-wider">
              Ethan James
            </h1>
            <span className=" text-[15px] text-stone-400">Sale Executive</span>
            <div className=" text-white text-xl flex gap-4 mt-5">
              <BsTelephoneForward />
              <BiMessageAltMinus className=" text-2xl" />
            </div>
          </div>
        </div>
        {/* section */}
        <div className=" w-[900px] my-5 justify-between items-center">
          <div className=" px-5 py-3  border-b border-stone-500 text-white flex gap-20">
            <h1
              onClick={() => setSection("personal")}
              className={`${
                section === "personal"
                  ? "text-[#B19777] select-none font-[600] text-[18px] cursor-pointer"
                  : "text-white font-[600] text-[18px] cursor-pointer"
              }`}
            >
              Personal
            </h1>
            <h1
              onClick={() => setSection("login")}
              className={`${
                section === "login"
                  ? "text-[#B19777] select-none font-[600] text-[18px] cursor-pointer"
                  : "text-white font-[600] text-[18px] cursor-pointer"
              }`}
            >
              Login Information
            </h1>
            <h1
              onClick={() => setSection("password")}
              className={`${
                section === "password"
                  ? "text-[#B19777] select-none font-[600] text-[18px] cursor-pointer"
                  : "text-white font-[600] text-[18px] cursor-pointer"
              }`}
            >
              Password
            </h1>
          </div>
        </div>
        {/* personal */}
        {section === "personal" && (
          <form action="">
            <div className=" text-white flex flex-col gap-8 p-5">
              <div className=" flex gap-32 items-center">
                <span className=" text-[17px] text-stone-300 font-bold">
                  Name
                </span>
                <input
                  required
                  //   value={}
                  //   onChange={}
                  placeholder="Name"
                  type="text"
                  className="mt-1 block w-1/2 p-1 bg-[#34353A] border border-slate-500 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#B19777] text-[#B19777] text-[17px] placeholder:text-[17px]"
                />
              </div>
              <div className=" flex gap-32 items-center">
                <span className=" text-[17px] text-stone-300 font-bold">
                  Phone
                </span>
                <input
                  required
                  //   value={}
                  //   onChange={}
                  placeholder="Phone"
                  type="text"
                  className="mt-1 block w-1/2 p-1 bg-[#34353A] border border-slate-500 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#B19777] text-[#B19777] text-[17px] placeholder:text-[17px]"
                />
              </div>
              <div className=" flex gap-[70px] items-center">
                <span className=" text-[17px] text-stone-300 font-bold">
                  Date Of Birth
                </span>
                <input
                  required
                  //   value={}
                  //   onChange={}
                  placeholder="Date Of Birth"
                  type="text"
                  className="mt-1 block w-1/2 p-1 bg-[#34353A] border border-slate-500 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#B19777] text-[#B19777] text-[17px] placeholder:text-[17px]"
                />
              </div>
              <div className=" flex gap-[120px] items-center">
                <span className=" text-[17px] text-stone-300 font-bold">
                  Gender
                </span>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-black h-5 w-5"
                    value="male"
                    checked={selectedGenders === "male"}
                    onChange={() => handleCheckboxChange("male")}
                  />
                  <span className="ml-2">Male</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-pink-500 h-5 w-5"
                    value="female"
                    checked={selectedGenders === "female"}
                    onChange={() => handleCheckboxChange("female")}
                  />
                  <span className="ml-2">Female</span>
                </label>
              </div>
              <div className=" flex gap-[110px]">
                <span className=" text-[17px] text-stone-300 font-bold">
                  Address
                </span>
                <textarea
                  required
                  //    onChange={(e) => setMessage(e.target.value)}
                  //    value={message}
                  name=""
                  placeholder="Address"
                  className="mt-1 block w-1/2 p-4 bg-[#34353A] border border-slate-500 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#B19777] text-[#B19777] text-[17px] placeholder:text-[17px]"
                  id=""
                  cols="10"
                  rows="4"
                ></textarea>
              </div>
              <div className=" flex w-1/2 gap-6 mt-5 items-end justify-end">
                <button className=" text-white border border-stone-400 tracking-wider px-5 py-2 rounded-lg">
                  {" "}
                  CANCEL
                </button>
                <button className=" px-6 py-2 rounded-lg button">
                  {" "}
                  SAVE
                </button>
              </div>
            </div>
          </form>
        )}
        {section === "login" && (
          <form action="">
            <div className=" text-white flex flex-col gap-10 p-5">
              <div className=" flex gap-14 items-center">
                <span className=" text-[17px] text-stone-300 font-bold">
                  Phone Number
                </span>
                <input
                  required
                  //   value={}
                  //   onChange={}
                  placeholder="Phone"
                  type="text"
                  className="mt-1 block w-1/2 p-1 bg-[#34353A] border border-slate-500 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#B19777] text-[#B19777] text-[17px] placeholder:text-[17px]"
                />
              </div>
              <div className=" flex gap-[133px] items-center">
                <span className=" text-[17px] text-stone-300 font-bold">
                  Email
                </span>
                <input
                  required
                  //   value={}
                  //   onChange={}
                  placeholder="Email"
                  type="text"
                  className="mt-1 block w-1/2 p-1 bg-[#34353A] border border-slate-500 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#B19777] text-[#B19777] text-[17px] placeholder:text-[17px]"
                />
              </div>
              <div className=" flex gap-6 w-1/2 justify-end">
                <button className=" text-white border border-stone-400 tracking-wider px-5 py-2 rounded-lg">
                  {" "}
                  CANCEL
                </button>
                <button className=" px-6 py-2 rounded-lg button">
                  {" "}
                  SAVE
                </button>
              </div>
            </div>
          </form>
        )}
        {section === "password" && (
          <form action="">
            <div className=" text-white flex flex-col gap-10 p-5">
              <div className=" flex gap-14 items-center">
                <span className=" text-[17px] text-stone-300 font-bold">
                  Current Password
                </span>
                <input
                  required
                  //   value={}
                  //   onChange={}
                  placeholder=".........."
                  type="text"
                  className="mt-1 block w-1/2 p-1 bg-[#34353A] border border-slate-500 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#B19777] text-[#B19777] text-[17px] placeholder:text-[17px]"
                />
              </div>
              <div className=" flex gap-20 items-center">
                <span className=" text-[17px] text-stone-300 font-bold">
                  New Password
                </span>
                <input
                  required
                  //   value={}
                  //   onChange={}
                  placeholder="........"
                  type="text"
                  className="mt-1 block w-1/2 p-1 bg-[#34353A] border border-slate-500 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#B19777] text-[#B19777] text-[17px] placeholder:text-[17px]"
                />
              </div>
              <div className=" flex gap-12 items-center">
                <span className=" text-[17px] text-stone-300 font-bold">
                  Confirm Password
                </span>
                <input
                  required
                  //   value={}
                  //   onChange={}
                  placeholder="........"
                  type="text"
                  className="mt-1 block w-1/2 p-1 bg-[#34353A] border border-slate-500 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#B19777] text-[#B19777] text-[17px] placeholder:text-[17px]"
                />
              </div>
              <div className=" flex gap-6 w-1/2 justify-end">
                <button className=" text-white border border-stone-400 tracking-wider px-5 py-2 rounded-lg">
                  {" "}
                  CANCEL
                </button>
                <button className=" px-6 py-2 rounded-lg button">
                  {" "}
                  SAVE
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </Rootlayout>
  );
};

export default EditProfile;
