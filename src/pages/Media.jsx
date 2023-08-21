import React, { useEffect, useRef, useState } from 'react'
import Rootlayout from '../layout/Rootlayout'
import {BsCloudUpload} from 'react-icons/bs'
import axios from 'axios'
import { useGetPhotoQuery, useStorePhotoMutation } from '../services/authApi'

const Media = () => {
  const token = localStorage.getItem("token")
  const fileRef = useRef(null);
  const [storePhoto] = useStorePhotoMutation()
  const {data} = useGetPhotoQuery({token})
  
  const handleFileChange = async(e) => {
    const selectedFile = e.target.files[0];
    const Url = URL.createObjectURL(selectedFile);
    const photos = {url:Url,name:selectedFile.name,extension:selectedFile.type}
    console.log(photos)
    const data = await storePhoto(photos,token);
    console.log(data)
    // const headers = {
    //   'Authorization': `Bearer ${token}`
    // }
    // const data = await axios.post('https://f.mmsdev.site/api/v1/photos', photos,{headers})
    // console.log(data)
  };
  
  const handleUpload = async() => {
    fileRef.current.click();
  };
  


  return (
    <Rootlayout>
     <div className=" mx-10 my-5">
        <h1 className=' text-[20px] font-[500] text-white mb-10'>Media</h1>
        {/* upload */}
        <div className=" bg-zinc-700 w-[900px] h-[200px] mx-[100px] flex justify-center">
          <div className=" flex flex-col items-center justify-center gap-5">
            <button onClick={handleUpload} className=' p-4 text-white border-dashed border-2 border-white rounded-full'>
             <BsCloudUpload size={30} /> 
            </button>
            <p className=' text-white'>Browsed Or Drag Photo</p>
            <input type="file" ref={fileRef} style={{ display: 'none' }} onChange={handleFileChange} />
          </div>
        </div>
        {/* gallary */}
        <div className=" mt-12">
         <h1 className=' text-[20px] font-[500] text-stone-400 mb-10'>Uploaded Photo</h1>
         <div className=" grid grid-cols-5 gap-5 flex-wrap">
         {data && data.data.map((photo) => (
             <img key={photo.id} className='w-[200px]' src={photo?.url} alt="" />
          ))}
          
          
         </div>
        </div>
     </div>
    </Rootlayout>
  )
}

export default Media
