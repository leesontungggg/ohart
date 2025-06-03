/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { Clock, Calendar, MapPin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";

export default function CollectiveMemoriesRegistration() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name1: "",
    name2: "",
    phone1: "",
    phone2: "",
    email1: "",
    email2: "",
    agreeTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      agreeTerms: checked,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    router.push("/success");
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-white dark:bg-gray-950">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side - Event details */}
        <div>
          <h1 className="text-4xl font-bold text-pink-500 mb-1 font-xanh">
            Ký ức của chúng ta
          </h1>
          <h2 className="text-3xl font-bold text-pink-500 mb-6 font-xanh">
            Collective Memories
          </h2>

          <div className="space-y-4 mb-8">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-black dark:text-gray-400" />
              <p className="text-sm text-black dark:text-gray-300">
                10 am - 5pm
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-black dark:text-gray-400" />
              <p className="text-sm text-black dark:text-gray-300">
                25/07/2025
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-black dark:text-gray-400" />
              <p className="text-sm text-black dark:text-gray-300">200.000đ</p>
            </div>

            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-black dark:text-gray-400" />
              <p className="text-sm text-black dark:text-gray-300">
                Level 2, Amanaki Thao Dien, Thu Duc, HCMC
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-800 my-6"></div>
        </div>

        {/* Right side - Event image */}
        <div className="flex justify-center items-start">
          <img
            src="/event-sample.png"
            alt="Collective Memories Event"
            className="w-full max-w-md h-auto object-cover rounded"
          />
        </div>
      </div>

      {/* Registration form */}
      <form onSubmit={handleSubmit} className="mt-8">
        <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-100 font-oswald">
          Thông tin đăng ký
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 font-manrope">
          <div className="space-y-2">
            <label
              htmlFor="name1"
              className="block text-sm font-medium text-black dark:text-gray-300"
            >
              Họ và tên <span className="text-red-500">*</span>
            </label>
            <Input
              id="name1"
              name="name1"
              value={formData.name1}
              onChange={handleChange}
              placeholder="Họ và tên"
              className="w-full"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="name2"
              className="block text-sm font-medium text-black dark:text-gray-300"
            >
              Họ và tên <span className="text-red-500">*</span>
            </label>
            <Input
              id="name2"
              name="name2"
              value={formData.name2}
              onChange={handleChange}
              placeholder="Họ và tên"
              className="w-full"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="phone1"
              className="block text-sm font-medium text-black dark:text-gray-300"
            >
              Số điện thoại <span className="text-red-500">*</span>
            </label>
            <Input
              id="phone1"
              name="phone1"
              value={formData.phone1}
              onChange={handleChange}
              placeholder="Số điện thoại"
              className="w-full"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="phone2"
              className="block text-sm font-medium text-black dark:text-gray-300"
            >
              Số điện thoại <span className="text-red-500">*</span>
            </label>
            <Input
              id="phone2"
              name="phone2"
              value={formData.phone2}
              onChange={handleChange}
              placeholder="Số điện thoại"
              className="w-full"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email1"
              className="block text-sm font-medium text-black dark:text-gray-300"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <Input
              id="email1"
              name="email1"
              type="email"
              value={formData.email1}
              onChange={handleChange}
              placeholder="email@example.com"
              className="w-full"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email2"
              className="block text-sm font-medium text-black dark:text-gray-300"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <Input
              id="email2"
              name="email2"
              type="email"
              value={formData.email2}
              onChange={handleChange}
              placeholder="email@example.com"
              className="w-full"
              required
            />
          </div>
        </div>

        <div className="mt-8 mb-6">
          <Button
            type="submit"
            className="border border-pink-500 text-pink-500 bg-transparent hover:bg-pink-50 dark:hover:bg-pink-950"
          >
            {/* {"*Bạn vui lòng điền đầy đủ phần thông tin bắt buộc"} */}
            Đăng ký tham gia
          </Button>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 my-6"></div>

        <div className="flex items-start space-x-2 mt-6">
          <Checkbox
            id="terms"
            checked={formData.agreeTerms}
            onCheckedChange={handleCheckboxChange}
          />
          <label
            htmlFor="terms"
            className="text-sm text-black dark:text-gray-300"
          >
            Tôi đã đọc và đồng ý với{" "}
            <span className="text-pink-500">điều khoản của chương trình</span>
          </label>
        </div>
      </form>
    </div>
  );
}
