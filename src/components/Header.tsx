import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header className="w-full bg-white/45 rounded-md shadow flex items-center justify-between px-4 py-1">
      {/* Left side (brand/logo placeholder) */}
      <div className="flex items-center">
       <Image src={"/images/logo.png"} alt="logo" width={150} height={100} />
      </div>

      {/* Right side avatar */}
      <div className="border-2 border-white rounded-full">
        <div className="w-8 h-8 rounded-full border border-black bg-gradient-to-tr from-blue-700 to-orange-400" />
      </div>
    </header>
  );
}
