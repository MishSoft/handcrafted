import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import SingInButton from "./SingInButton";
import SearchBtn from "./SearchBtn";

export default function Header() {
  return (
    <header className="!py-[20px] !px-[40px] flex items-center justify-between">
      <Link href={"/"}>
        <h1 className="text-2xl font-semibold">HandCrafted</h1>
      </Link>

      <div className="flex items-center gap-[32px]">
        <Nav />
        <div className="flex items-center gap-[8px]">
          <SingInButton />
          <SearchBtn />
        </div>
      </div>
    </header>
  );
}
