/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { RxTriangleDown } from "react-icons/rx";
import { SlGlobe } from "react-icons/sl";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="bg-[#1a242f] px-16 py-5 flex items-center fixed w-full top-0 left-0">
      <img src="/prime_transparent_logo.png" alt="prime logo" width={120} />

      <div className="ml-8 flex justify-between items-center gap-4">
        <Link href="/" className="text-white/80 font-semibold capitalize ">
          home
        </Link>
        <Link
          href="/"
          className="text-white font-semibold capitalize underline underline-offset-4 decoration-slate-300 decoration-2"
        >
          store
        </Link>
        <Link href="/" className="text-white/80 font-semibold capitalize ">
          channels
        </Link>
        <Link href="/" className="text-white/80 font-semibold capitalize flex justify-center items-center">
          categories <RxTriangleDown size={24} />
        </Link>
        <Link href="/" className="text-white/80 font-semibold capitalize ">
          my stuff
        </Link>
      </div>

      {/* right content */}
      <div className="fixed right-0 flex justify-center items-center gap-4 mr-16">
        <BiSearch size={20} color={"white"} />

        <div className="flex justify-center items-center gap-2 text-white">
          <SlGlobe />
          <p className="text-white/80 font-semibold flex justify-center items-center">
            EN <RxTriangleDown size={24} />
          </p>
        </div>

        <div className=" flex justify-center items-center gap-1 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1aa3ff" class="w-6 h-6">
            <path
              fill-rule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              clip-rule="evenodd"
            />
          </svg>
          <p className="text-white/80 font-semibold uppercase flex justify-center items-center">
            Vignesh... <RxTriangleDown size={24} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
