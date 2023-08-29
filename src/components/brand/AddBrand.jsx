import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useStoreBrandMutation } from '../../services/authApi'
import { BsPersonBoundingBox } from "react-icons/bs";
import { RiEdit2Fill } from "react-icons/ri";
import { useSelector } from 'react-redux';

const AddBrand = ({setShowSideBar,showSideBar,showPhotoModal,setShowPhotoModal}) => {
  const {photo} = useSelector(state => state.media)
  const [image,setimage] = useState([photo])
  console.log(image)
  const token = localStorage.getItem('token')
  const [storeBrand] = useStoreBrandMutation()
  const [brandData, setBrandData] = useState({
    name: 'Air force',
    company: 'Nike',
    agent: 'AKW',
    phone_number: '09900990',
    information: 'really good',
    phot : ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBrandData((prevData) => ({ ...prevData, [name]: value }));        //good point :)
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = await storeBrand({brandData,token})
    console.log(data)
  }
  return (
    <div>
    <motion.div
    initial={{x:'350px'}}
    animate={{x:0}}
    exit={{ x: "350px" }}
    className=" absolute right-0 z-40 h-screen w-[300px] bg-[#323232] shadow-2xl">
      <form onSubmit={handleSubmit} action="">
        <div className="  px-10 py-6 flex flex-col gap-[10px]">
            <div className="">    
                <h1 className=' text-white font-[600] text-[20px] mb-5'>Add Stock</h1>
                <div className="">
                  <span className=" text-[15px] text-stone-300 font-bold">
                    Brand Name
                  </span>
                  <input
                     required
                     id="name"
                     name="name"
                      value={brandData.name}
                      onChange={handleInputChange}
                    type="text"
                    className=" mb-5 mt-1 block w-full p-1 bg-[#34353A] border border-slate-500 text-sm shadow-sm focus:outline-none focus:border-[#B19777] text-[#B19777] text-[17px]"
                  />
                </div>
                <div className="">
                  <span className=" text-[15px] text-stone-300 font-bold">
                    Company Name
                  </span>
                  <input
                    required
                    id="company"
                    name="company"
                      value={brandData.company}
                      onChange={handleInputChange}
                    type="text"
                    className=" mb-5 mt-1 block w-full p-1 bg-[#34353A] border border-slate-500 text-sm shadow-sm focus:outline-none focus:border-[#B19777] text-[#B19777] text-[17px]"
                  />
                </div>
                <div className="">
                  <span className=" text-[15px] text-stone-300 font-bold">
                    Agent
                  </span>
                  <input
                    required
                    id="agent"
                    name="agent"
                      value={brandData.agent}
                      onChange={handleInputChange}
                    type="text"
                    className=" mb-5 mt-1 block w-full p-1 bg-[#34353A] border border-slate-500 text-sm shadow-sm focus:outline-none focus:border-[#B19777] text-[#B19777] text-[17px]"
                  />
                </div>
                <div className="">
                  <span className=" text-[15px] text-stone-300 font-bold">
                    Phone
                  </span>
                  <input
                    required
                    id="phone_number"
                    name="phone_number"
                      value={brandData.phone_number}
                      onChange={handleInputChange}
                    className=" mb-5 mt-1 block w-full p-1 bg-[#34353A] border border-slate-500 text-sm shadow-sm focus:outline-none focus:border-[#B19777] text-[#B19777] text-[17px]"
                  />
                </div>
                <div className="">
                  <span className=" text-[15px] text-stone-300 font-bold">
                    Description
                  </span>
                  <textarea
                    required
                    id="information"
                    name="information"
                       onChange={handleInputChange}
                       value={brandData.information}
                    className="mt-1 block w-full p-4 bg-[#34353A] border border-slate-500 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#B19777] text-[#B19777] text-[17px] placeholder:text-[17px]"
                    id=""
                    cols="10"
                    rows="4"
                  ></textarea>
                </div>
                <div className="bg-[#323232] rounded-lg ml-5 ">
              <div onClick={() => setShowPhotoModal(!showPhotoModal)} className="flex flex-col items-center p-5">
                <h4 className="text-lg text-white mb-6">Upload Photo</h4>
                <div className="mb-6 relative w-[180px] h-[150px] rounded-lg border-2 border-dashed border-[#B19777] bg-[#272727] flex justify-center items-center">
                      {image?.map(photo => <img src={image.url} alt="" /> )}
                      <BsPersonBoundingBox className="text-6xl" />
                  <button className="button w-8 h-8 rounded-full absolute flex justify-center items-center translate-x-14 translate-y-16">
                    <RiEdit2Fill />
                  </button>
                </div>
              </div>
            </div>
            </div>
            <div className=" flex gap-4 flex-col">
                <button type='submit' className=" px-6 py-2 rounded-lg button">
                  {" "}
                  SAVE
                </button>
                <button onClick={() => setShowSideBar(false)} className=" text-white border border-stone-400 tracking-wider px-5 py-2 rounded-lg">
                  {" "}
                  CANCEL
                </button>
            </div>
        </div>
      </form>
    </motion.div>
  </div>
  )
}

export default AddBrand
