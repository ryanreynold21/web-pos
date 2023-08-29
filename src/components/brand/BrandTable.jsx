import React from 'react'
import {TbEdit} from 'react-icons/tb'
import {AiOutlinePlus} from 'react-icons/ai'
import {BsArrowRight} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useGetBrandQuery } from '../../services/authApi'


const BrandTable = () => {
    const token = localStorage.getItem("token")
    const {data} = useGetBrandQuery(token)
  return (
    <div>
    <div className="overflow-x-auto">
    <table className="table text-white bg-[#272727] rounded-md">
        {/* head */}
        <thead className=' text-white'>
        <tr>
            <th>NO</th>
            <th>BRAND NAME</th>
            <th>COMPANY NAME</th>
            <th>AGENT</th>
            <th>PHONT</th>
            <th>DESCRIPTION</th>
        </tr>
        </thead>
        <tbody>
        {/* row 1 */}
        {data?.data.map(brand => 
            <tr key={brand.id}>
                <th>{brand.id}</th>
                <td>{brand.brand_name}</td>
                <td>{brand.company}</td>
                <td className=' text-center'>{brand.agent}</td>
                <td className=' text-center'>{brand.phone_number}</td>
                <td className=' text-center'>{'good'}</td>
                <td>
                    <div className=" text-white flex text-[20px] gap-3">
                        <button className=' bg-[#B19777] rounded-full p-2'> 
                            <AiOutlinePlus  />
                    </button>
                    <button className=' bg-[#B19777] rounded-full p-2'> 
                            <TbEdit />
                    </button>
                    </div>
                </td>
            </tr>
        )}
        </tbody>
    </table>
    </div>
</div>
  )
}

export default BrandTable
