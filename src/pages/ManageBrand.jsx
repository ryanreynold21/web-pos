import React from 'react'
import Rootlayout from '../layout/Rootlayout'
import BrandTable from '../components/brand/BrandTable'
import { Link } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'
import AddBrand from '../components/brand/AddBrand'
import { useState } from 'react'
import ModalPhoto from '../components/ModalPhoto'

const ManageBrand = () => {
  const [showSidebar,setShowSideBar] = useState(false)
  const [showPhotoModal,setShowPhotoModal] = useState(false)

  return (
    <Rootlayout>
            {showSidebar && <AddBrand showPhotoModal={showPhotoModal} setShowPhotoModal={setShowPhotoModal} showSidebar={showSidebar} setShowSideBar={setShowSideBar} /> }
            {showPhotoModal ? (<ModalPhoto setShowPhotoModal={setShowPhotoModal} showPhotoModal={showPhotoModal} />) : '' }

      <div className=" mx-10 my-5">
        <div className=" flex justify-between">
          <div className="">
            <h1 className=" text-[20px] font-[500] text-white">Products</h1>
            <p className=" text-gray-500">Inventory/ Brands</p>
          </div>
          <div className=" flex gap-3">
            <Link to={"/"}>
              <button className=" px-4 py-2 rounded-lg text-white border border-[#FFFFFF] hover:bg-[#B19777]">
                {" "}
                Go To Shop
              </button>
            </Link>
            <Link to={''}>
              <button onClick={() => setShowSideBar(true)} className=" px-4 py-2 rounded-lg flex items-center gap-2 button">
                {" "}
                <AiOutlinePlus />
                Add Brand
              </button>
            </Link>
          </div>
        </div>
        {/* product overview */}
        <div className=" my-5">
          <h1 className="text-[21px] font-[500] text-white">
            Brands Overview
          </h1>
          {/* search */}
          <div className="flex justify-between">
            <div class="relative my-3">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-[300px] p-2 pl-10 text-sm text-white border border-gray-600 rounded-lg bg-[#272727]  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Search ..."
                required
              />
            </div>
          </div>
          <BrandTable />
        </div>
      </div>
    </Rootlayout>
  )
}

export default ManageBrand

