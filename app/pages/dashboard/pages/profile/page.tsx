"use client";
import React, { useEffect, useState } from "react";
import ProfileImage from "../../components/ProfileImage";

interface userProps {
  name: string;
  lastName: string;
}

export default function Page() {
  const [fullName, setFullName] = useState<userProps[]>([
    {
      name: "",
      lastName: "",
    },
  ]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("/api/me");
      if (!res.ok) return;
      const data = await res.json();
      setFullName([
        {
          name: data.name,
          lastName: data.lastname,
        },
      ]);
    };
    fetchUser();
  }, []);
  return (
    <div className="!px-10 !py-15">
      {/* Profile image */}
      <div className="flex items-center gap-2">
        <ProfileImage />
        {fullName[0].name && fullName[0].lastName ? (
          <h1 className="text-2xl">
            {fullName[0].name} {fullName[0].lastName}
          </h1>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
}
