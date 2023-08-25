import React, { useState } from "react";
import Rootlayout from "../layout/Rootlayout";
import InfoTab from "./InfoTab";
import { Card, Modal } from "flowbite-react";
import Admin from "../assets/images/admin.jpg";
import "./UserOverview.css";
import { Link } from "react-router-dom";
import { useGetUserQuery } from "../services/authApi";

const UserOverview = () => {
  const token = localStorage.getItem("token")
  const {data} = useGetUserQuery({token})
  console.log(data)
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => {
    setOpenModal(!openModal);
  };
  const handleTabClick = (event) => {
    event.stopPropagation();
  };
  return (
    <div>
        <div className="flex justify-between mx-5 mt-5">
          <div className="">
            <h1 className="text-2xl text-[#B19777]">Users</h1>
            <p className="text-white">Users / Overview</p>
          </div>
          <Link to={'/users/create'}>
            <button className=" py-2 px-4 rounded-lg button">
              Create User
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-5 mx-5 mt-5 ">
          <Card
            className="col-span-1 bg-[#323232] dark:bg-[#323232] border border-[#B19777] dark:border-[#B19777] cursor-pointer"
            onClick={toggleModal}
          >
           {data?.data?.map(user => {
            return(

              <div className="flex flex-col items-center pb-10">
             <img
               src={Admin}
               alt="Bonnie image"
               className="mb-3 rounded-full shadow-lg"
               height="96"
               width="96"
               />
             <h5 className="mb-1 text-xl font-medium text-[#B19777]">
               {user.name}
             </h5>
             <span className="text-sm text-gray-300 mb-5">Admin</span>
             <span className="text-sm text-gray-300 ">example@gmail.com</span>
           </div>
               )
           })}
          </Card>

          <Modal show={openModal} onClose={toggleModal}>
            <Modal.Header style={{ backgroundColor: "#323232" }}>
              <div className="flex items-center gap-5">
                <img
                  src={Admin}
                  alt="admin"
                  className=" h-[150px] w-[150px] rounded-full"
                />
                <div className=" text-[#B19777]">
                  <h2 className="text-3xl mb-2">Vanny Taylor</h2>
                  <p className=" text-gray-300 text-sm">Admin</p>
                </div>
              </div>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: "#323232" }}>
              <InfoTab onTabClick={handleTabClick} />
            </Modal.Body>
          </Modal>
        </div>
    </div>
  );
};

export default UserOverview;
