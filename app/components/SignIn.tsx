"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { UserRound, Key, X } from "lucide-react";
import { useAppContext } from "@/context/Context";
import { useRouter } from "next/navigation";

interface LoginValues {
  email: string;
  password: string;
}

export default function SignIn() {
  const { setIsLogin } = useAppContext();
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<LoginValues>({
    email: "",
    password: "",
  });
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setIsLogin(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();
      setLoading(false);

      if (!res.ok) {
        alert(data.error || "Registration failed");
      } else {
        router.push("/pages/dashboard");
        setFormData({
          email: "",
          password: "",
        });
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999999999] flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        ref={formRef}
        className="
          relative bg-white/20 backdrop-blur-lg 
          border border-white/30 shadow-2xl
          rounded-2xl !p-8 w-[90%] max-w-md
          flex flex-col gap-5 text-white
        "
      >
        {/* Close button */}
        <button
          onClick={() => setIsLogin(false)}
          type="button"
          className="absolute top-4 right-4 text-white/80 hover:text-white transition"
        >
          <X size={20} />
        </button>

        <h2 className="text-3xl font-semibold text-center mb-2">Sign In</h2>
        <p className="text-center text-white/70 text-sm">
          Welcome back! Please sign in to continue
        </p>

        {/* Email / Phone */}
        <div className="flex items-center gap-2 bg-white/20 border border-white/30 rounded-xl !px-4 !py-2 focus-within:bg-white/30 transition">
          <UserRound size={18} className="text-white/80" />
          <input
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Email or Phone"
            className="bg-transparent outline-none w-full text-white placeholder:text-white/60"
          />
        </div>

        {/* Password */}
        <div className="flex items-center gap-2 bg-white/20 border border-white/30 rounded-xl !px-4 !py-2 focus-within:bg-white/30 transition">
          <Key size={18} className="text-white/80" />
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Password"
            className="bg-transparent outline-none w-full text-white placeholder:text-white/60"
          />
        </div>

        {/* Sign in button */}
        <button
          type="submit"
          className="!mt-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-xl !py-2 transition-all"
        >
          {loading ? "Loading.." : "Sign In"}
        </button>

        {/* Link to Sign Up */}
        <div className="text-center text-sm !mt-2">
          <span className="text-white/70">Don’t have an account?</span>{" "}
          <Link
            href="/pages/register"
            className="text-pink-400 hover:text-pink-300 font-medium"
          >
            Create one
          </Link>
        </div>
      </form>
    </div>
  );
}
