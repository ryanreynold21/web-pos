import React, { useState } from "react";
import Rootlayout from "../layout/Rootlayout";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlinePhoto } from "react-icons/hi2";
import { RiEdit2Fill } from "react-icons/ri";
import Xbox from "../assets/images/XboxSeriesXController_HERO.jpg";
import Swal from "sweetalert2";
import { useStoreProductMutation } from "../services/authApi";

const AddProduct = () => {
  const [section, setSection] = useState("info");
  const [storeProduct] = useStoreProductMutation();
  const [name,setName] = useState('boot');
  const [brand_id,setBrand_id] = useState('2');
  const [actual_price,setActurl_price] = useState('a')
  const [sale_price,setSale_price] = useState('a')
  const [total_stock,setTotalStock] = useState('a');
  const [unit,setUnit] = useState('a');
  const [more_information,setMoreInformation] = useState('a')
  const [photo,setPhoto] = useState('a');
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    await Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'A new product has been added!',
      showConfirmButton: false,
      timer: 1500
    });
  };
  return (
    <div>
      <Rootlayout>
        <div className="flex justify-between mx-5 mt-5">
          <div className="">
            <h1 className="text-2xl text-[#B19777]">Products</h1>
            <p className="text-white">Products / Create</p>
          </div>
          <Link to={"/product"}>
            <button className=" py-2 px-4 rounded-lg button">Products</button>
          </Link>
        </div>
        <div className="mt-5 flex gap-16 items-center">
          {section === "info" && (
            <form
              onSubmit={() => setSection("price")}
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
                    placeholder="Product Name"
                    type="text"
                    className="mt-1 block w-2/3 p-1 bg-[#34353A] border border-slate-500 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#B19777] text-[#B19777] text-[17px] placeholder:text-[17px]"
                  />
                </div>
                <div className=" flex justify-between">
                  <span className=" text-[17px] text-stone-300 font-bold">
                    Brand
                  </span>
                  <input
                    required
                    //   value={}
                    //   onChange={}
                    placeholder=""
                    type="text"
                    className="mt-1 block w-2/3 p-1 bg-[#34353A] border border-slate-500 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#B19777] text-[#B19777] text-[17px] placeholder:text-[17px]"
                  />
                </div>
                <div className=" flex justify-between">
                  <span className=" text-[17px] text-stone-300 font-bold">
                    Stock
                  </span>
                  <input
                    required
                    //   value={}
                    //   onChange={}
                    placeholder=""
                    type="number"
                    className="mt-1 block w-2/3 p-1 bg-[#34353A] border border-slate-500 text-sm shadow-sm text-[#B19777] focus:outline-none focus:border-[#B19777] text-[17px] placeholder:text-[17px]"
                  />
                </div>
                <div className=" flex justify-between">
                  <span className=" text-[17px] text-stone-300 font-bold">
                    Unit
                  </span>
                  <input
                    required
                    //   value={}
                    //   onChange={}
                    placeholder=""
                    type="text"
                    className="mt-1 block w-2/3 p-1 bg-[#34353A] border border-slate-500 text-sm shadow-sm text-[#B19777] focus:outline-none focus:border-[#B19777] text-[17px] placeholder:text-[17px]"
                  />
                </div>
                <div className=" flex justify-between">
                  <span className=" text-[17px] text-stone-300 font-bold">
                    More Info
                  </span>
                  <textarea
                    //    onChange={(e) => setMessage(e.target.value)}
                    //    value={message}
                    name=""
                    placeholder="More ..."
                    className="mt-1 block w-2/3 p-4 bg-[#34353A] border border-slate-500 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#B19777] text-[#B19777] text-[17px] placeholder:text-[17px]"
                    id=""
                    cols="10"
                    rows="4"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className=" self-end py-2 px-4 rounded-lg button w-24 m-5"
              >
                Next
              </button>
            </form>
          )}

          {section === "price" && (
            <div className="flex flex-col">
              <form
                onSubmit={() => setSection("photo")}
                action=""
                className="w-[550px] bg-[#323232] rounded-lg ml-5 flex flex-col"
              >
                <div className=" text-white flex flex-col gap-8 p-5">
                  <div className=" flex justify-between">
                    <span className=" text-[17px] text-stone-300 font-bold">
                      Actual Price
                    </span>
                    <input
                      required
                      //   value={}
                      //   onChange={}
                      placeholder=""
                      type="text"
                      className="mt-1 block w-2/3 p-1 bg-[#34353A] border border-slate-500 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#B19777] text-[#B19777] text-[17px] placeholder:text-[17px]"
                    />
                  </div>
                  <div className=" flex justify-between">
                    <span className=" text-[17px] text-stone-300 font-bold">
                      Sale Price
                    </span>
                    <input
                      required
                      //   value={}
                      //   onChange={}
                      placeholder=""
                      type="text"
                      className="mt-1 block w-2/3 p-1 bg-[#34353A] border border-slate-500 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#B19777] text-[#B19777] text-[17px] placeholder:text-[17px]"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className=" self-end py-2 px-4 rounded-lg button w-24 m-5"
                >
                  Next
                </button>
              </form>
            </div>
          )}
          {section === "photo" && (
            <div className="w-[550px] bg-[#323232] rounded-lg ml-5 ">
              <div className="flex flex-col items-center p-5">
                <h4 className="text-lg text-white mb-6">Upload Photo</h4>
                <div className="mb-6 relative w-[180px] h-[180px] rounded-full border-2 border-dashed border-[#B19777] bg-[#272727] flex justify-center items-center">
                  <HiOutlinePhoto className="text-6xl" />
                  <button className="button w-8 h-8 rounded-full absolute flex justify-center items-center translate-x-14 translate-y-16">
                    <RiEdit2Fill />
                  </button>
                </div>
              </div>
              <div className="p-5 flex justify-between">
                <button className=" border border-stone-400 py-2 px-4 rounded-lg mt-5">
                  Clear Photo
                </button>

                <button
                  onClick={() => {
                    setSection("productPreview");
                  }}
                  className=" py-2 px-4 rounded-lg button mt-5"
                >
                  Next
                </button>
              </div>
            </div>
          )}
          {section === "productPreview" && (
            <form
              onSubmit={submitHandler}
              className="w-[550px] bg-[#323232] rounded-lg ml-5 flex flex-col"
            >
              <div className="p-5">
                <div className="flex gap-5 items-center pb-5 border-b">
                  <img
                    className="w-[150px] h-[150px] rounded-full"
                    src={Xbox}
                    alt=""
                  />
                  <div className="">
                    <h1 className="text-3xl mb-3 text-white">Xbox Series X</h1>
                    <p className="">Sale Price : $ 505</p>
                    <p className="">Actual Price : $ 500</p>
                  </div>
                </div>
                <div className="flex mt-5 gap-20">
                  <div className="space-y-4 text-white">
                    <p>Name</p>
                    <p>Brand</p>
                    <p>Stock</p>
                    <p>Unit</p>
                    <p>More Information</p>
                  </div>
                  <div className="space-y-4 text-white">
                    <p>: Xbox Series X</p>
                    <p>: Xbox</p>
                    <p>: 50</p>
                    <p>: -</p>
                    <p>: Gaming&apos;s Best Controller</p>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="self-end py-2 px-4 rounded-lg button m-5"
              >
                Add Product
              </button>
            </form>
          )}
          <div className="">
            <div className="flex items-center gap-5">
              <div
                className={`w-14 h-14 bg-[#323232] flex justify-center items-center rounded-full border ${
                  section === "info"
                    ? "border-[#B19777] text-[#B19777]"
                    : "border-white text-white"
                }`}
              >
                1
              </div>
              <p
                className={` ${
                  section === "info" ? "text-[#B19777]" : "text-white"
                }`}
              >
                Information
              </p>
            </div>
            <div className="bg-[#B19777] w-[1px] h-[80px] ml-[28px] my-2"></div>
            <div className="flex items-center gap-5">
              <div
                className={`w-14 h-14 bg-[#323232] flex justify-center items-center rounded-full border ${
                  section === "price"
                    ? "border-[#B19777] text-[#B19777]"
                    : "border-white text-white"
                }`}
              >
                2
              </div>
              <p
                className={` ${
                  section === "price" ? "text-[#B19777]" : "text-white"
                }`}
              >
                Price
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
    </div>
  );
};

export default AddProduct;
