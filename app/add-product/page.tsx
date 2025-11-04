"use client";

import { useState } from "react";

export default function AddProductPage() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    userId: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);
    if (res.ok) {
      setForm({ name: "", description: "", price: "", userId: "" });
      setSuccess(true);
    } else {
      alert("Failed to add product");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-white to-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white/80 backdrop-blur-lg shadow-lg rounded-3xl p-8 w-full max-w-md"
      >
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Add New Product
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 mb-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 outline-none"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full p-3 mb-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 outline-none"
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="w-full p-3 mb-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 outline-none"
          required
        />

        <input
          type="number"
          name="userId"
          placeholder="User ID"
          value={form.userId}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 outline-none"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-pink-500 text-white font-medium rounded-xl py-3 hover:bg-pink-600 transition"
        >
          {loading ? "Saving..." : "Add Product"}
        </button>

        {success && (
          <p className="text-green-600 text-center mt-4">
            ✅ Product added successfully!
          </p>
        )}
      </form>
    </main>
  );
}
