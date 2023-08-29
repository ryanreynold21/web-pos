import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { useGetPhotoQuery } from '../services/authApi';
import { useDispatch } from 'react-redux';
import { addphoto } from '../services/mediaSlice';

const ModalPhoto = ({ setShowPhotoModal, showPhotoModal }) => {
  const token = localStorage.getItem('token');
  const { data } = useGetPhotoQuery(token);
  const dispatch = useDispatch();
  const [selectedPhoto, setSelectedPhoto] = useState([]);

  const handleSelected = (image) => {
    setSelectedPhoto(image);
  };

  const storePhoto = () => {
    if (selectedPhoto) {
      dispatch(addphoto(selectedPhoto));
      setShowPhotoModal(!showPhotoModal)
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className=" absolute h-screen top-0 left-0 inset-0 bg-black bg-opacity-70 flex z-[19999] justify-center"
      >
        <div className=" bg-[#323232] p-10 rounded-lg w-[1000px] flex flex-col gap-10 items-center">
          <h2 className="text-white text-[22px] font-[600] ">Choose photo</h2>
          <div className="grid grid-cols-3 gap-20 flex-wrap">
            {data?.data.map((image) => (
              <div
                onClick={() => handleSelected(image)}
                key={image.id}
                className={`${
                  selectedPhoto === image ? 'border-4 border-white' : ''
                } w-[200px] h-[200px]`}
              >
                <img className="w-full h-full" src={image.url} alt="" />
              </div>
            ))}
          </div>
          <div className="flex gap-10">
            <button
              onClick={() => setShowPhotoModal(false)}
              className="text-white border-white border rounded-md px-4 py-2"
            >
              Cancel
            </button>
            <button
              className="text-white bg-[#B19777] px-4 py-2"
              onClick={storePhoto}
              disabled={!selectedPhoto}
            >
              Insert
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ModalPhoto;
