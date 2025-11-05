"use client";
import React, { useState } from "react";
import { UserRound, Pencil } from "lucide-react";

export default function ProfileImage() {
  const [image, setImage] = useState("");

  const handleProfileImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    console.log("Upload result:", data);
  };

  return (
    <div className="border relative !p-2 group rounded-full w-15 h-15 text-gray-600 hover:border-blue-500 hover:text-blue-500 duration-200 flex items-center justify-center border-gray-600">
      {!image && <UserRound />}

      <div>
        <label
          htmlFor="file"
          className="cursor-pointer absolute left-0 z-[9999] group-hover:flex hidden items-center justify-center top-0 w-full h-full bg-white/10 backdrop-blur-[1px] rounded-full"
        >
          <Pencil className="text-white" />
        </label>
        <input
          onChange={handleProfileImage}
          id="file"
          type="file"
          className="hidden"
        />
        {image && (
          <img
            src={image}
            alt=""
            className="absolute object-cover w-full h-full left-0 top-0 rounded-full"
          />
        )}
      </div>
    </div>
  );
}
