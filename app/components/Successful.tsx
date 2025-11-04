import React from "react";
import { Check } from "lucide-react";

export default function Successful() {
  return (
    <div className="fixed top-0 z-[999999] w-full min-h-screen flex items-center justify-center">
      <div className="max-w-[400px] !p-5 rounded-3xl flex flex-col items-center bg-white">
        <Check className="text-green-400" size={50} />
        <span className="text-4xl text-center text-black font-semibold">
          Registration successful!
        </span>
      </div>
    </div>
  );
}
