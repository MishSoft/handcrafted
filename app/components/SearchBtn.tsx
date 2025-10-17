import React from "react";
import { Search } from "lucide-react";

export default function SearchBtn() {
  return (
    <>
      <button className="!p-[10px] bg-[#F2EDE8] rounded-[12px] cursor-pointer">
        <Search size={20} />
      </button>
    </>
  );
}
