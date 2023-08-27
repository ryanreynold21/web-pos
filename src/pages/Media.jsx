import React, { useEffect, useRef, useState } from 'react'
import Rootlayout from '../layout/Rootlayout'
import {BsCloudUpload} from 'react-icons/bs'
import axios from 'axios'
import { useGetPhotoQuery, useStorePhotoMutation } from '../services/authApi'

const Media = () => {
  const token = localStorage.getItem("token")
  const fileRef = useRef(null);
  const [storePhoto] = useStorePhotoMutation()
  const [page, setPage] = useState(1); // Current page
  const { data } = useGetPhotoQuery(token);
console.log(data)  
  const handleFileChange = async(e) => {
    const selectedFile = e.target.files;
    let photos = new FormData();
    for(let i = 0; i < selectedFile.length ;i++){
      photos.append("photos[]",selectedFile[i],selectedFile[i].name)
    }
    const data = await storePhoto({photos,token});
    console.log(data)
    };
  
  const handleUpload = async() => {
    fileRef.current.click();
  };
  
  const handlePageChange = (newPage) => {
    setPage(newPage);
    refetch({ page: newPage }); // Fetch data for the new page
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
            {data?.data.map(image => <img className=' h-[200px] w-[200px]' src={image.url} alt="" /> )}
         </div>
          {/* Pagination buttons */}
          {/* <div className="mt-5 flex justify-center">
            {data?.first && page > 1 && (
              <button className=' text-white font-500 text-xl' onClick={() => handlePageChange(1)}>First</button>
            )}
            {data?.prev && (
              <button className=' text-white font-500 text-xl' onClick={() => handlePageChange(page - 1)}>Previous</button>
            )}
            {data?.next && (
              <button className=' text-white font-500 text-xl' onClick={() => handlePageChange(page + 1)}>Next</button>
            )}
            {data?.last && page < data.last && (
              <button className=' text-white font-500 text-xl' onClick={() => handlePageChange(data.last)}>Last</button>
            )}
          </div> */}
        </div>
     </div>
    </Rootlayout>
  )
}

export default Media
