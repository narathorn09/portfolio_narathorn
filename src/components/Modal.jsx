import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getIsOpen,
  getCountImg,
  getUrl,
  getTitle,
  setIsOpen,
  removeData,
} from "../redux/modalSlice";

const Modal = () => {
  const isOpen = useSelector(getIsOpen);
  const urlImg = useSelector(getUrl);
  const countImg = useSelector(getCountImg);
  const title = useSelector(getTitle);
  const dispatch = useDispatch();

  const toggleModal = () => {
    dispatch(setIsOpen({}));
    dispatch(removeData({}));
    setCurrentSlide(0);
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? countImg : prevSlide - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === countImg ? 0 : prevSlide + 1
    );
  };

  return (
    <>
      {isOpen && (
        <div
          id="popup-modal"
          tabIndex="-1"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
        >
          <div className="p-4 w-full  max-w-[100%] md:max-w-[70%]">
            <div className="p-4 bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex justify-between items-center pl-2 mb-1">
                <div className="font-bold text-xl bg-gradient-to-r from-indigo-800 to-indigo-600 bg-clip-text text-transparent">
                  {title}
                </div>
                <button
                  onClick={toggleModal}
                  type="button"
                  className="top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <div className="">
                <div
                  id="default-carousel"
                  className="relative w-full"
                  data-carousel="slide"
                >
                  {/* Carousel wrapper */}
                  <div className="relative h-[230px] md:h-[500px]">
                    {/* Display only the current slide */}
                    <img
                      src={`${urlImg}${currentSlide}.webp`}
                      className="object-cover rounded-md border-2 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                      alt={`Slide ${currentSlide}`}
                    />
                  </div>
                  {/* Slider controls */}
                  <div className="flex justify-between">
                    <button
                      type="button"
                      className="top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                      onClick={handlePrev}
                    >
                      <span className="flex justify-center items-center bg-gradient-to-r from-indigo-800 via-indigo-700 to-indigo-500 text-white font-medium px-2 py-2 rounded-full  hover:bg-slate-600 hover:text-white cursor-pointer transition duration-200 ease-in-out transform hover:-translate-4 hover:scale-105 hover:shadow-lg hover:shadow-slate-500/50 hover:bg-gradient-to-r hover:from-slate-800 hover:via-slate-700 hover:to-slate-500">
                        <svg
                          className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 6 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 1 1 5l4 4"
                          />
                        </svg>
                        <span className="sr-only">Previous</span>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                      onClick={handleNext}
                    >
                      <span className="flex justify-center items-center bg-gradient-to-r from-indigo-800 via-indigo-700 to-indigo-500 text-white font-medium px-2 py-2 rounded-full  hover:bg-slate-600 hover:text-white cursor-pointer transition duration-200 ease-in-out transform hover:-translate-4 hover:scale-105 hover:shadow-lg hover:shadow-slate-500/50 hover:bg-gradient-to-r hover:from-slate-800 hover:via-slate-700 hover:to-slate-500">
                        <svg
                          className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 6 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                          />
                        </svg>
                        <span className="sr-only">Next</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
