"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PartnershipSection() {
  const [selectedPartner, setSelectedPartner] = useState(0);

  const partners = [
    {
      id: 0,
      name: "AMANAKI",
      description:
        "Đây là nhóm 107 tác phẩm của 23 nghệ sĩ được tuyển chọn từ hơn 100 hồ sơ và hàng trăm tác phẩm gửi về Ô Art. Các tác phẩm này được trưng bày tại 3 không gian:",
      locations: ["Amanaki Thảo Điền", "Silart Station", "Đại học HUTECH"],
    },
    {
      id: 1,
      name: "SILART STATION",
      description:
        "Silart Station là không gian nghệ thuật đương đại tại thành phố Hồ Chí Minh, nơi tổ chức các triển lãm và sự kiện nghệ thuật.",
      locations: [
        "Quận 1, TP.HCM",
        "Không gian trưng bày chính",
        "Studio sáng tạo",
      ],
    },
    {
      id: 2,
      name: "HUTECH",
      description:
        "Đại học HUTECH là đối tác giáo dục, nơi kết nối sinh viên với các hoạt động nghệ thuật đương đại.",
      locations: [
        "Cơ sở chính quận Bình Thạnh",
        "Phòng trưng bày nghệ thuật",
        "Không gian sáng tạo sinh viên",
      ],
    },
    // Adding more partners to fill the grid
    {
      id: 3,
      name: "PARTNER 4",
      description: "Description for Partner 4",
      locations: ["Location 1", "Location 2"],
    },
    {
      id: 4,
      name: "PARTNER 5",
      description: "Description for Partner 5",
      locations: ["Location 1", "Location 2"],
    },
    {
      id: 5,
      name: "PARTNER 6",
      description: "Description for Partner 6",
      locations: ["Location 1", "Location 2"],
    },
    {
      id: 6,
      name: "PARTNER 7",
      description: "Description for Partner 7",
      locations: ["Location 1", "Location 2"],
    },
    {
      id: 7,
      name: "PARTNER 8",
      description: "Description for Partner 8",
      locations: ["Location 1", "Location 2"],
    },
    {
      id: 8,
      name: "PARTNER 9",
      description: "Description for Partner 9",
      locations: ["Location 1", "Location 2"],
    },
    {
      id: 9,
      name: "PARTNER 10",
      description: "Description for Partner 10",
      locations: ["Location 1", "Location 2"],
    },
    {
      id: 10,
      name: "PARTNER 11",
      description: "Description for Partner 11",
      locations: ["Location 1", "Location 2"],
    },
    {
      id: 11,
      name: "PARTNER 12",
      description: "Description for Partner 12",
      locations: ["Location 1", "Location 2"],
    },
  ];

  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-[60px] md:text-[100px] font-light text-pink-500 mb-8 font-xanh">
          Partnership
        </h2>

        <div className="border-t border-b border-gray-200 dark:border-gray-700 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left side - Partner logos grid */}
            <div className="w-full md:w-1/2">
              <div className="grid grid-cols-4 gap-2">
                {partners.map((partner, index) => (
                  <div
                    key={partner.id}
                    className={`bg-gray-300 dark:bg-gray-700 aspect-video flex items-center justify-center cursor-pointer ${
                      selectedPartner === index
                        ? "border-b-2 border-pink-500"
                        : ""
                    }`}
                    onClick={() => setSelectedPartner(index)}
                  >
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Logo
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex justify-end mt-4 space-x-2">
                <button
                  className="p-2 border border-gray-300 dark:border-gray-700 rounded-sm"
                  onClick={() =>
                    setSelectedPartner((prev) =>
                      prev > 0 ? prev - 1 : partners.length - 1
                    )
                  }
                >
                  <ChevronLeft className="h-4 w-4 text-gray-700 dark:text-gray-300" />
                </button>
                <button
                  className="p-2 border border-gray-300 dark:border-gray-700 rounded-sm"
                  onClick={() =>
                    setSelectedPartner((prev) =>
                      prev < partners.length - 1 ? prev + 1 : 0
                    )
                  }
                >
                  <ChevronRight className="h-4 w-4 text-gray-700 dark:text-gray-300" />
                </button>
              </div>
            </div>

            {/* Right side - Partner details */}
            <div className="w-full md:w-1/2">
              <h3 className="text-[40px] font-bold mb-4 text-black dark:text-white font-oswald">
                {partners[selectedPartner].name}
              </h3>
              <p className="mb-4 text-gray-800 dark:text-gray-200 font-manrope text-[24px]">
                {partners[selectedPartner].description}
              </p>
              <ul className="list-disc pl-5 text-gray-800 dark:text-gray-200 font-manrope text-[24px]">
                {partners[selectedPartner].locations.map((location, index) => (
                  <li key={index} className="mb-1">
                    {location}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
