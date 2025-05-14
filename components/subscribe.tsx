"use client";

import React, { useState } from "react";
import { toast } from "sonner";

export default function SubscribeNewsletter() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for subscribing to our newsletter!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="w-full bg-cyan-200 py-12 px-4 font-manrope">
      <div className="container mx-auto flex flex-col md:flex-row items-start justify-between gap-8">
        <div className="md:w-1/3">
          <h2 className="text-[60px] md:text-[100px] font-light text-pink-500 mb-6 font-xanh">
            Subscribe/
            <br />
            Newsletter
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-800 max-w-md font-manrope">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Tristique senectus et netus et malesuada.
          </p>
        </div>

        <div className="w-full md:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 pt-[80px]"
          >
            <input
              type="text"
              name="name"
              placeholder="NAME"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-white border-none focus:outline-none focus:ring-0"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="EMAIL"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-white border-none focus:outline-none focus:ring-0"
              required
            />

            <textarea
              name="message"
              placeholder="MESSAGE"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-white border-none focus:outline-none focus:ring-0 min-h-24"
            />

            <button
              type="submit"
              className="w-full p-3 bg-pink-500 text-black font-medium hover:bg-pink-600 transition-colors"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
