/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const BannerImage = () => {
  return (
    <div className="pt-20 flex justify-between items-center">
      <div
        className=" hover:bg-gradient-to-r hover:from-black hover:to-[#0f171e38] my-auto h-[30vh] flex items-center pl-2 cursor-pointer
      "
      >
        <FaChevronLeft color="white" size={32} />
      </div>
      <img
        src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_DCDhamaka79/219bb6c2-4ca5-4d3e-8db7-f53cad44b232._UR3000,600_SX1500_FMwebp_.jpeg"
        alt="banner image"
      />
      <div className="hover:bg-gradient-to-l hover:from-black hover:to-[#0f171e38] my-auto h-[30vh] flex items-center pr-2 cursor-pointer">
        <FaChevronRight color="white" size={32} />
      </div>
    </div>
  );
};

export default BannerImage;
