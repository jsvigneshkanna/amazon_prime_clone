/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

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
        <Link href="/" className="text-white/80 font-semibold capitalize flex justify-center items-center gap-1">
          categories{" "}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
            <path
              fill-rule="evenodd"
              d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
              clip-rule="evenodd"
            />
          </svg>
        </Link>
        <Link href="/" className="text-white/80 font-semibold capitalize ">
          my stuff
        </Link>
      </div>

      {/* right content */}
      <div className="fixed right-0 flex justify-center items-center gap-4 mr-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="white"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>

        <div className="flex justify-center items-center gap-1 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>
          <p className="text-white/80 font-semibold">EN</p>
        </div>

        <div className=" flex justify-center items-center gap-1 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-6 h-6">
            <path
              fill-rule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              clip-rule="evenodd"
            />
          </svg>
          <p className="text-white/80 font-semibold uppercase">Vignesh...</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
