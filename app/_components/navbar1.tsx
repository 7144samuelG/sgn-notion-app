"use client"
import { Moon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const NavBar1 = () => {
    const [active,setActive]=useState<boolean>(false)
  return (
    <div className="flex justify-between items-center px-4">
      <Link href="/">
        <Image width={100} className="" height={100} alt="" src="/images/download.png" />
      </Link>
      <div onClick={()=>setActive(!active)}>
        <Moon size={22} 
        className={`cursor-pointer hover:text-yellow-500 ${active?"text-yellow-500 hover:text-black":"text-black"}`}/>
      </div>
    </div>
  );
};

export default NavBar1;
