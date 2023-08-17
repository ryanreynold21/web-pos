import React, { useState } from "react";
import Rootlayout from "../layout/Rootlayout";
import InfoTab from "./InfoTab";
import { Card, Modal } from "flowbite-react";
import Admin from "../assets/images/admin.jpg";
import "./UserOverview.css";

const UserOverview = () => {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => {
    console.log("Toggling modal");
    setOpenModal(!openModal);
  };
  const handleTabClick = (event) => {
    event.stopPropagation();
  };
  console.log("openModal value:", openModal);
  return (
    <div>
        <div className="flex justify-between mx-3 mt-2">
          <div className="">
            <h1 className="text-2xl text-[#B19777]">User</h1>
            <p>User/Overview</p>
          </div>
          <div className="">
            <button className=" bg-[#B19777] py-2 px-4 rounded-lg text-white hover:bg-[#323232] hover:text-[#B19777]">
              Create User
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 mx-5 mt-5 ">
          <Card
            className="col-span-1 bg-[#323232] border border-[#B19777] cursor-pointer"
            onClick={toggleModal}
          >
            <div className="flex flex-col items-center pb-10">
              <img
                src={Admin}
                alt="Bonnie image"
                className="mb-3 rounded-full shadow-lg"
                height="96"
                width="96"
              />
              <h5 className="mb-1 text-xl font-medium text-[#B19777]">
                Vanny Taylor
              </h5>
              <span className="text-sm text-gray-300 mb-5">Admin</span>
              <span className="text-sm text-gray-300 ">example@gmail.com</span>
            </div>
          </Card>
          <Card
            className="col-span-1 bg-[#323232] border border-[#B19777] cursor-pointer"
            onClick={toggleModal}
          >
            <div className="flex flex-col items-center pb-10">
              <img
                src={Admin}
                alt="Bonnie image"
                className="mb-3 rounded-full shadow-lg"
                height="96"
                width="96"
              />
              <h5 className="mb-1 text-xl font-medium text-[#B19777]">
                Vanny Taylor
              </h5>
              <span className="text-sm text-gray-300 mb-5">Admin</span>
              <span className="text-sm text-gray-300 ">example@gmail.com</span>
            </div>
          </Card>
          <Card
            className="col-span-1 bg-[#323232] border border-[#B19777] cursor-pointer"
            onClick={toggleModal}
          >
            <div className="flex flex-col items-center pb-10">
              <img
                src={Admin}
                alt="Bonnie image"
                className="mb-3 rounded-full shadow-lg"
                height="96"
                width="96"
              />
              <h5 className="mb-1 text-xl font-medium text-[#B19777]">
                Vanny Taylor
              </h5>
              <span className="text-sm text-gray-300 mb-5">Admin</span>
              <span className="text-sm text-gray-300 ">example@gmail.com</span>
            </div>
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
            <Modal.Footer style={{ backgroundColor: "#323232" }}>
              <button className=" bg-[#B19777] py-2 px-4 rounded-lg text-white hover:bg-[#272727] hover:text-[#B19777]">
                Update User
              </button>
            </Modal.Footer>
          </Modal>
        </div>
    </div>
  );
};

export default UserOverview;
