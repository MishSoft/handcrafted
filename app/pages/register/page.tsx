"use client";

import React, { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
import { useRouter } from "next/navigation";

interface FormValue {
  id: number;
  type: string;
  required?: boolean;
  placeholder: string;
  label: string;
  name: string;
  isShowPass?: boolean;
}

interface RegistrationForm {
  name: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}

const formValues: FormValue[] = [
  {
    id: 1,
    type: "text",
    required: true,
    placeholder: "John",
    label: "Name",
    name: "name",
  },
  {
    id: 2,
    type: "text",
    required: true,
    placeholder: "Smith",
    label: "Lastname",
    name: "lastname",
  },
  {
    id: 3,
    type: "email",
    required: true,
    placeholder: "john@example.com",
    label: "Email",
    name: "email",
  },
  {
    id: 4,
    type: "password",
    required: true,
    placeholder: "********",
    label: "Password",
    name: "password",
    isShowPass: true,
  },
  {
    id: 5,
    type: "password",
    required: true,
    placeholder: "********",
    label: "Confirm Password",
    name: "confirmPassword",
    isShowPass: true,
  },
  {
    id: 6,
    type: "tel",
    required: true,
    placeholder: "555 123 456",
    label: "Phone",
    name: "phone",
  },
];

export default function Page() {
  const [formData, setFormData] = useState<RegistrationForm>({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          lastname: formData.lastname,
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
        }),
      });

      const data = await res.json();
      setLoading(false);

      if (!res.ok) {
        alert(data.error || "Registration failed");
      } else {
        router.push("/pages/dashboard");
        setFormData({
          name: "",
          lastname: "",
          email: "",
          password: "",
          confirmPassword: "",
          phone: "",
        });
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
      setLoading(false);
    }
  };

  return (
    <main
      style={{ backgroundImage: "url('/header.jpeg')" }}
      className="w-full min-h-screen bg-cover bg-center relative"
    >
      <div className="!p-40 inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center !px-4">
        <form
          onSubmit={handleSubmit}
          className="
            w-full 
            sm:w-[500px] 
            bg-white/20 
            backdrop-blur-xl 
            border border-white/30 
            rounded-3xl 
            shadow-2xl 
            !p-8 
            flex flex-col gap-6
          "
        >
          <h1 className="font-bold text-2xl text-white !mb-4 text-center">
            Create an Account
          </h1>

          <div className="flex flex-col sm:grid grid-cols-2 gap-4">
            {formValues.map((item) => (
              <div className="flex flex-col w-full !mb-4" key={item.id}>
                <label className="!mb-2 text-white font-medium text-sm">
                  {item.label}
                </label>
                <div className="relative">
                  <input
                    name={item.name}
                    value={formData[item.name as keyof RegistrationForm]}
                    onChange={handleChange}
                    required={item.required}
                    className="
                      !p-3
                      w-full
                      bg-white/20
                      border border-white/30
                      rounded-xl
                      text-white
                      placeholder-white/60
                      focus:outline-none
                      focus:ring-2 focus:ring-pink-500
                      focus:border-pink-500
                      transition duration-200
                      shadow-sm
                    "
                    type={
                      item.type === "password" && item.isShowPass && showPass
                        ? "text"
                        : item.type
                    }
                    placeholder={item.placeholder}
                  />
                  {item.type === "password" && item.isShowPass && (
                    <span
                      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-white/70"
                      onClick={() => setShowPass((prev) => !prev)}
                    >
                      {showPass ? <EyeClosed size={18} /> : <Eye size={18} />}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="
              !px-8 !py-3 
              w-full sm:max-w-[200px] 
              bg-pink-500 
              text-white 
              font-medium 
              rounded-xl 
              shadow-md 
              hover:bg-pink-600 
              focus:outline-none 
              focus:ring-2 
              focus:ring-pink-500 
              focus:ring-opacity-50 
              transition duration-200
              !my-5
              cursor-pointer
              mx-auto
            "
          >
            {loading ? "Creating..." : "Sign Up"}
          </button>
        </form>
      </div>
    </main>
  );
}
