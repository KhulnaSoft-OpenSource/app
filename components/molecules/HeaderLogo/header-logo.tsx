import React from "react";
import Image from "next/image";
import Link from "next/link";
import openSaucedImg from "../../../img/openSauced-icon.png";
import openSaucedImgWithBg from "../../../img/open-sourced-with-bg-icon.png";

interface HeaderLogoProps {
  textIsBlack?: boolean;
  withBg: boolean;
}

const HeaderLogo: React.FC<HeaderLogoProps> = ({ textIsBlack, withBg = false }) => {
  return (
    <Link href="/">
      <div className="flex items-center py-2 gap-2 cursor-pointer">
        <Image
          className="rounded"
          alt="KhulnaSoft OpenSource Logo"
          width={32}
          height={32}
          src={withBg ? openSaucedImgWithBg : openSaucedImg}
        />
        <p className={`font-bold !text-base ${textIsBlack ? "!text-black" : "!text-white"}`}>KhulnaSoft</p>
      </div>
    </Link>
  );
};

export default HeaderLogo;
