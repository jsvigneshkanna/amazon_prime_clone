/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const BannerImage = () => {
  return (
    <div className="pt-20 flex justify-between items-center pb-8">
      <div
        className=" hover:bg-gradient-to-r hover:from-black hover:to-[#0f171e38] my-auto h-[30vh] flex items-center pl-2 cursor-pointer
      "
      >
        <FaChevronLeft color="white" size={32} />
      </div>
      <div className="relative">
        <img
          src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_DCDhamaka79/219bb6c2-4ca5-4d3e-8db7-f53cad44b232._UR3000,600_SX1500_FMwebp_.jpeg"
          alt="banner image"
          className="max-w-7xl monitor:max-w-[1620px]"
        />
        <div className="flex gap-2 absolute bottom-3 left-[48%]">
          <p className="w-3 h-3 bg-white  rounded-full"></p>
          <p className="w-3 h-3 bg-slate-500/80 rounded-full"></p>
          <p className="w-3 h-3 bg-slate-500/80 rounded-full"></p>
          <p className="w-3 h-3 bg-slate-500/80 rounded-full"></p>
          <p className="w-3 h-3 bg-slate-500/80 rounded-full"></p>
        </div>
      </div>
      <div className="hover:bg-gradient-to-l hover:from-black hover:to-[#0f171e38] my-auto h-[30vh] flex items-center pr-2 cursor-pointer">
        <FaChevronRight color="white" size={32} />
      </div>
    </div>
  );
};

export default BannerImage;
