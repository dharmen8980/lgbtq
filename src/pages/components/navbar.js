import Link from "next/link";
import React from "react";
import {
  AiOutlineSearch,
  AiOutlineHome,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { RiContactsLine } from "react-icons/ri";
import {FaBlog} from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className="z-20">
      <div className="bg-[#1397DC] text-white flex flex-row justify-around py-1">
        <div className="space-x-10">
          <span>Home</span>
          <span>About</span>
          <span>Logo</span>
          <span>Contact</span>
          <span>Blog</span>
        </div>
        <div className="flex flex-row items-center">
          <input
            type="text"
            placeholder="Search"
            className=" px-4 bg-[#0075aa] placeholder-white"
          />
          <AiOutlineSearch className="text-white relative right-8" />
        </div>
      </div>
      <div className=" bg-[#f0f0e9] flex flex-row justify-around items-center shadow-2xl max-h-[70px]">
        <div className="space-x-[50px] flex flex-row items-center">
          <div className="space-x-12 flex flex-row items-center">
            <Link href="/" className="">
              <AiOutlineHome className="text-[#1397DC] text-2xl ml-2 " />
              Home
            </Link>
            <Link href="/">
              <AiOutlineInfoCircle className="text-[#1397DC] text-2xl ml-3 " />
              About
            </Link>
          </div>
          <div className="text-black rounded-[50%] h-[80px] w-[80px] bg-[#f0f0e9] flex flex-row items-center justify-center shadow-xl pb-2 relative top-3 z-40">
            Logo
          </div>
          <div className="space-x-12 flex flex-row">
            <Link href="/">
              <RiContactsLine className="text-[#1397DC] text-2xl ml-4 " />
              Contact
            </Link>
            <Link href="/">
                <FaBlog className="text-[#1397DC] text-2xl ml-2 " />
                Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
