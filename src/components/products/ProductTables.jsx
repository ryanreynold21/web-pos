import React from 'react'
import {TbEdit} from 'react-icons/tb'
import {AiOutlinePlus} from 'react-icons/ai'
import {BsArrowRight} from 'react-icons/bs'
import { useGetProductQuery } from '../../services/authApi'
import { Link } from 'react-router-dom'

const ProductTables = () => {
    const token = localStorage.getItem("token")
    const data = useGetProductQuery({token})
  return (
    <div>
        <div className="overflow-x-auto">
        <table className="table text-white bg-[#272727] rounded-md">
            {/* head */}
            <thead className=' text-white'>
            <tr>
                <th>NO</th>
                <th>NAME</th>
                <th>BRAND</th>
                <th>UNIT</th>
                <th>SALE PRICE</th>
                <th>TOTAL STOCK</th>
            </tr>
            </thead>
            <tbody>
            {/* row 1 */}
            <tr>
                <th>1</th>
                <td>Stawberry yogut</td>
                <td>fruits</td>
                <td className=' text-center'>192470</td>
                <td className=' text-center'>19247000</td>
                <td className=' text-center'>1924700</td>
                <td>
                    <div className=" text-white flex text-[20px] gap-3">
                        <button className=' bg-[#B19777] rounded-full p-2'> 
                            <AiOutlinePlus  />
                       </button>
                       <button className=' bg-[#B19777] rounded-full p-2'> 
                             <TbEdit />
                       </button>
                       <Link to={'/product/details'}>
                        <button className=' bg-[#B19777] rounded-full p-2'> 
                                <BsArrowRight />
                        </button>
                       </Link>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default ProductTables
