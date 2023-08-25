import React from "react";
import Navbar from "../layout/Navbar";
import { BiArrowBack } from "react-icons/bi";
import "./checkout.css"

const Checkout = () => {
  const handlePrint = () => {
    window.print();
  };
  return (
    <div className="h-screen bg-[#272727]">
      <Navbar />
      <div className="px-5 py-3 border-b border-b-[#B19777] mb-5">
        <button className=" flex items-center">
          <BiArrowBack className="text-2xl mr-2" />
          <span className="text-xl">Back</span>
        </button>
      </div>
      <div className="flex justify-center">
        <div className="p-5 bg-[#323232] rounded-md w-[350px] max-h-screen receipt">
          <div>
            <h1 className=" text-3xl text-[#B19777] mb-3">LOTTIE</h1>
          </div>
          <div className="flex flex-col gap-5">
            <div className="p-8 border-y border-y-[#B19777]">
              <ul className="flex flex-col gap-3 border-b border-b-[#B19777]">
                <li className="flex justify-between">
                  <div className="">
                    <p className=" text-[#B19777]">Xbox X Series</p>
                    <p className=" text-gray-400">1</p>
                  </div>
                  <p className=" text-2xl text-gray-400">$ 500</p>
                </li>
                <li className="flex justify-between">
                  <div className="">
                    <p className=" text-[#B19777]">Xbox X Series</p>
                    <p className=" text-gray-400">1</p>
                  </div>
                  <p className=" text-2xl text-gray-400">$ 500</p>
                </li>
                <li className="flex justify-between">
                  <div className="">
                    <p className=" text-[#B19777]">Xbox X Series</p>
                    <p className=" text-gray-400">1</p>
                  </div>
                  <p className=" text-2xl text-gray-400">$ 500</p>
                </li>
                <li className="flex justify-between">
                  <div className="">
                    <p className=" text-[#B19777]">Xbox X Series</p>
                    <p className=" text-gray-400">1</p>
                  </div>
                  <p className=" text-2xl text-gray-400">$ 500</p>
                </li>
              </ul>
              <div className="mt-3 flex justify-between">
                <p className=" text-2xl text-gray-400">Total :</p>
                <p className=" text-2xl text-gray-400">$ 2,000</p>
              </div>
            </div>
            <div className=" text-gray-300 text-center">
              <p>Thanks for shopping with us!</p>
              <p>Have a nice day!</p>
            </div>
            <div className=" flex justify-center">
              <button className="bg-[#B19777] text-white rounded-lg w-3/4 py-2" onClick={handlePrint}>
                Print
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
