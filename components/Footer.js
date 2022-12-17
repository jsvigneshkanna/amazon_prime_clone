/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";

const FooterContainer = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-8 pb-12">
      <img src="/prime_transparent_logo.png" alt="prime logo" width={120} />
      <div className="flex gap-5 text-blue-400/90 font-medium">
        <p>Terms and Privacy Notice</p>
        <p>Send us feedback</p>
        <p>Help</p>
        <p className="flex gap-1 justify-center items-center text-white/70 font-thin text-sm">
          <AiOutlineCopyright /> 2022-2023, J S Vignesh Kanna
        </p>
      </div>
    </div>
  );
};

export default FooterContainer;
