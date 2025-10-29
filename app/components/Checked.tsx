import React from "react";

interface checkedProps {
  checked: boolean;
}

export default function Checked({ checked }: checkedProps) {
  return (
    <>
      <input
        checked={checked}
        type="checkbox"
        readOnly
        className={`pointer-events-none relative after:absolute after:content-['${
          checked ? "✔️" : ""
        }'] after:flex after:items-center after:justify-center after:text-[10px] after:right-0 after:bottom-0 after:w-5 after:h-5 after:border after:border-gray-300 after:rounded after:bg-white after:shadow-sm ${
          checked ? "after:bg-green-100 after:border-green-400" : ""
        }`}
      />
    </>
  );
}
