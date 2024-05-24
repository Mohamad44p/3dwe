import React from "react";
import NikeLogo from "../public/images/Logo.png";
import Image from "next/image";
export default function Logo() {
  return (
    <div className="absolute left-0 top-[50px] ml-2">
      <div className="flex items-center">
        <Image src={NikeLogo} alt="Nike Logo" width={50} height={50} />
        <h1 className="text-2xl">Nike</h1>
      </div>
    </div>
  );
}
