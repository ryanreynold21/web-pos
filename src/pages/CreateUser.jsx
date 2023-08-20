import React, { useState } from "react";
import Rootlayout from "../layout/Rootlayout";
import { Link } from "react-router-dom";
import { BsPersonBoundingBox } from "react-icons/bs";
import { RiEdit2Fill } from "react-icons/ri";

const CreateUser = () => {
  const [section, setSection] = useState("personal");
  const [selectedGenders, setSelectedGenders] = useState([]);
  const handleCheckboxChange = (value) => {
    setSelectedGenders(value);
  };
  return (
    <Rootlayout>
      <div className="flex justify-between mx-5 mt-5">
        <div className="">
          <h1 className="text-2xl text-[#B19777]">User</h1>
          <p className="text-white">User / Create</p>
        </div>
        <Link to={"/user"}>
          <button className=" py-2 px-4 rounded-lg button">Users</button>
        </Link>
      </div>
      <div className="mt-5 flex gap-16 items-center">
        {section === "personal" && (
          <form
            onSubmit={() => setSection("login")}
            action=""
            className="w-[550px] bg-[#323232] rounded-lg ml-5 flex flex-col"
          >
            <div className=" text-white flex flex-col gap-8 p-5">
              <div className=" flex justify-between">
                <span className=" text-[17px] text-stone-300 font-bold">
                  Name
                </span>
                <input
                  required
                  //   value={}
                  //   onChange={}
                  placeholder="Name"
                  type="text"
                  className="mt-1 block w-2/3 p-1 bg-[#34353A] border border-slate-500 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#B19777] text-[#B19777] text-[17px] placeholder:text-[17px]"
                />
              </div>
              <div className=" flex justify-between">
                <span className=" text-[17px] text-stone-300 font-bold">
                  Phone
                </span>
                <input
                  required
                  //   value={}
                  //   onChange={}
                  placeholder="Phone"
                  type="text"
                  className="mt-1 block w-2/3 p-1 bg-[#34353A] border border-slate-500 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#B19777] text-[#B19777] text-[17px] placeholder:text-[17px]"
                />
              </div>
              <div className=" flex justify-between">
                <span className=" text-[17px] text-stone-300 font-bold">
                  Date Of Birth
                </span>
                <input
                  required
                  //   value={}
                  //   onChange={}
                  placeholder="date of birth"
                  type="date"
                  className="mt-1 block w-2/3 p-1 bg-[#34353A] border border-slate-500 text-sm shadow-sm text-slate-400 focus:outline-none focus:border-[#B19777] text-[17px] placeholder:text-[17px]"
                />
              </div>
              <div className=" flex justify-between">
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
                    className="form-checkbox h-5 w-5"
                    value="female"
                    checked={selectedGenders === "female"}
                    onChange={() => handleCheckboxChange("female")}
                  />
                  <span className="ml-2">Female</span>
                </label>
              </div>
              <div className=" flex justify-between">
                <span className=" text-[17px] text-stone-300 font-bold">
                  Address
                </span>
                <textarea
                  required
                  //    onChange={(e) => setMessage(e.target.value)}
                  //    value={message}
                  name=""
                  placeholder="Address"
                  className="mt-1 block w-2/3 p-4 bg-[#34353A] border border-slate-500 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#B19777] text-[#B19777] text-[17px] placeholder:text-[17px]"
                  id=""
                  cols="10"
                  rows="4"
                ></textarea>
              </div>
            </div>
            <button
              onClick={() => setSection("login")}
              type="submit"
              className=" self-end py-2 px-4 rounded-lg button w-24 m-5"
            >
              Next
            </button>
          </form>
        )}

        {section === "login" && (
          <div className="flex flex-col">
            <form action="" className="w-[550px] bg-[#323232] rounded-lg ml-5">
              <div className=" text-white flex flex-col gap-8 p-5">
                <div className=" flex justify-between">
                  <span className=" text-[17px] text-stone-300 font-bold">
                    Position
                  </span>
                  <select
                    className="mt-1 block w-2/3 p-1 bg-[#34353A] border border-slate-500 text-sm shadow-sm text-slate-400 focus:outline-none focus:border-[#B19777] text-[17px] placeholder:text-[17px]"
                    name="position"
                    id=""
                  >
                    <option value="admin">Admin</option>
                    <option value="staff">Staff</option>
                  </select>
                </div>
                <div className=" flex justify-between">
                  <span className=" text-[17px] text-stone-300 font-bold">
                    Email
                  </span>
                  <input
                    required
                    //   value={}
                    //   onChange={}
                    placeholder="Email"
                    type="text"
                    className="mt-1 block w-2/3 p-1 bg-[#34353A] border border-slate-500 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#B19777] text-[#B19777] text-[17px] placeholder:text-[17px]"
                  />
                </div>
                <div className=" flex justify-between">
                  <span className=" text-[17px] text-stone-300 font-bold">
                    Password
                  </span>
                  <input
                    required
                    //   value={}
                    //   onChange={}
                    placeholder=""
                    type="password"
                    className="mt-1 block w-2/3 p-1 bg-[#34353A] border border-slate-500 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#B19777] text-[#B19777] text-[17px] placeholder:text-[17px]"
                  />
                </div>
                <div className=" flex justify-between">
                  <span className=" text-[17px] text-stone-300 font-bold">
                    Comfirm Password
                  </span>
                  <input
                    required
                    //   value={}
                    //   onChange={}
                    placeholder=""
                    type="password"
                    className="mt-1 block w-2/3 p-1 bg-[#34353A] border border-slate-500 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#B19777] text-[#B19777] text-[17px] placeholder:text-[17px]"
                  />
                </div>
              </div>
            </form>
            <button
              onClick={() => setSection("photo")}
              className=" self-end py-2 px-4 rounded-lg button w-24 mt-5"
            >
              Next
            </button>
          </div>
        )}
        {section === "photo" && (
          <div className="w-[550px] bg-[#323232] rounded-lg ml-5 ">
            <div className="flex flex-col items-center p-5">
              <h4 className="text-lg text-white mb-6">Upload Photo</h4>
              <div className="mb-6 relative w-[180px] h-[180px] rounded-full border-2 border-dashed border-[#B19777] bg-[#272727] flex justify-center items-center">
                <BsPersonBoundingBox className="text-6xl" />
                <button className="button w-8 h-8 rounded-full absolute flex justify-center items-center translate-x-14 translate-y-16">
                  <RiEdit2Fill />
                </button>
              </div>
              <div className="">
                <button className=" text-white border border-stone-400 tracking-wider px-5 py-2 rounded-lg">
                  Clear Photo
                </button>
              </div>
              <Link to={"/user"}>
                <button className=" self-center py-2 px-4 rounded-lg button w-24 mt-5">
                  Submit
                </button>
              </Link>
            </div>
          </div>
        )}
        <div className="">
          <div className="flex items-center gap-5">
            <div
              className={`w-14 h-14 bg-[#323232] flex justify-center items-center rounded-full border ${
                section === "personal"
                  ? "border-[#B19777] text-[#B19777]"
                  : "border-white text-white"
              }`}
            >
              1
            </div>
            <p
              className={` ${
                section === "personal" ? "text-[#B19777]" : "text-white"
              }`}
            >
              Personal
            </p>
          </div>
          <div className="bg-[#B19777] w-[1px] h-[80px] ml-[28px] my-2"></div>
          <div className="flex items-center gap-5">
            <div
              className={`w-14 h-14 bg-[#323232] flex justify-center items-center rounded-full border ${
                section === "login"
                  ? "border-[#B19777] text-[#B19777]"
                  : "border-white text-white"
              }`}
            >
              2
            </div>
            <p
              className={` ${
                section === "login" ? "text-[#B19777]" : "text-white"
              }`}
            >
              Login Info
            </p>
          </div>
          <div className="bg-[#B19777] w-[1px] h-[80px] ml-[28px] my-2"></div>

          <div className="flex items-center gap-5">
            <div
              className={`w-14 h-14 bg-[#323232] flex justify-center items-center rounded-full border ${
                section === "photo"
                  ? "border-[#B19777] text-[#B19777]"
                  : "border-white text-white"
              }`}
            >
              3
            </div>
            <p
              className={` ${
                section === "photo" ? "text-[#B19777]" : "text-white"
              }`}
            >
              Photo
            </p>
          </div>
        </div>
      </div>
    </Rootlayout>
  );
};

export default CreateUser;
