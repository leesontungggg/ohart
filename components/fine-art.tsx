/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function FineArtSection() {
  const router = useRouter();
  const exhibitions = [
    {
      id: 1,
      title: "KÝ ỨC CỦA CHÚNG TA - COLLECTIVE MEMORIES",
      type: "EXHIBITION",
      date: "01.06",
      image:
        "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "KÝ ỨC CỦA CHÚNG TA - COLLECTIVE MEMORIES",
      type: "EXHIBITION",
      date: "01.06",
      image:
        "https://images.unsplash.com/photo-1577720580479-7d839d829c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "KÝ ỨC CỦA CHÚNG TA - COLLECTIVE MEMORIES",
      type: "EXHIBITION",
      date: "01.06",
      image:
        "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section
      className="py-16 px-4 md:px-8 lg:px-16 bg-white dark:bg-gray-900 font-manrope"
      style={{ fontSize: "20px" }}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-[60px] md:text-[100px] font-light text-pink-500 font-xanh">
            Fine Art
          </h2>
          <a
            href="#"
            className="flex items-center text-base text-black dark:text-white hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
          >
            See all <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {exhibitions.map((exhibition) => (
            <div
              key={`fineart${exhibition.id}`}
              className="flex flex-col"
              onClick={() => router.push(`/programmes/${exhibition.id}`)}
            >
              <img
                src={exhibition.image}
                alt={exhibition.title}
                className="w-full object-cover aspect-[450/350]"
              />
              <h3 className="text-[32px] font-bold mb-2 text-black dark:text-white mt-[30px]">
                {exhibition.title}
              </h3>
              <div className="text-pink-500 text-base font-medium mb-1 text-[24px]">
                {exhibition.type}
              </div>
              <div className="font-bold text-black dark:text-white text-[48px]">
                {exhibition.date}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-4"></div>
      </div>
    </section>
  );
}
