/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import {
  ChevronLeft,
  Clock,
  Calendar,
  MapPin,
  FileText,
  ArrowRight,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";

import Link from "next/link";

export default function CollectiveMemoriesPage() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryImages = [
    "/director.png",
    "https://images.unsplash.com/photo-1579965342575-16428a7c8881?q=80&w=1000",
    "/producer.png",
    "/media-manager.png",
    "/event-manager.png",
  ];

  const artists = [
    "PHẠM HUY THÔNG",
    "NGUYỄN THANH MAI ANH",
    "TRẦN THANH SƠN",
    "NGUYỄN NGUYÊN",
    "ĐINH TUÂN",
    "NGUYỄN ĐỨC THỌ",
    "ĐINH TUÂN",
    "NGUYỄN THANH MAI ANH",
    "TRẦN THANH SƠN",
    "NGUYỄN ĐỨC THỌ",
    "NGUYỄN NGUYÊN",
    "ĐINH TUÂN",
    "NGUYỄN ĐỨC THỌ",
    "ĐINH TUÂN",
    "NGUYỄN THANH MAI ANH",
    "TRẦN THANH SƠN",
    "NGUYỄN ĐỨC THỌ",
    "NGUYỄN NGUYÊN",
    "ĐINH TUÂN",
    "NGUYỄN ĐỨC THỌ",
    "ĐINH TUÂN",
  ];

  const relatedEvents = [
    {
      title: "KỶ ỨC CỦA CHÚNG TA - COLLECTIVE MEMORIES",
      type: "EXHIBITION",
      date: "01.06",
    },
    {
      title: "KỶ ỨC CỦA CHÚNG TA - COLLECTIVE MEMORIES",
      type: "EXHIBITION",
      date: "01.06",
    },
    {
      title: "KỶ ỨC CỦA CHÚNG TA - COLLECTIVE MEMORIES",
      type: "EXHIBITION",
      date: "01.06",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="pt-20 bg-[#D1C0F1]">
        <div className="relative h-[70vh]">
          <div className="container mx-auto flex flex-col text-white font-xanh md:text-[40px]">
            PROGRAMMES
            <br />
            / FINE ART
            <br />
            <span className="text-[#FF00A8] md:text-[80px]">
              Ký ức của chúng ta
            </span>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-8 bg-white dark:bg-gray-950">
        {/* Back button */}
        <div className="mb-6">
          <button className="flex items-center text-gray-600 dark:text-gray-300 hover:underline">
            <ChevronLeft className="h-4 w-4 mr-1" />
            <Link href="/programmes" className="text-sm font-manrope text-base">
              Back to listings
            </Link>
          </button>
        </div>

        {/* Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-pink-500 mb-1 font-xanh">
            Ký ức của chúng ta
          </h1>
          <h2 className="text-2xl font-bold text-pink-500 font-xanh">
            Collective Memories
          </h2>
        </div>

        {/* Event details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="col-span-2">
            <div className="font-manrope text-[24px] font-light">
              <p className="mb-4 dark:text-gray-300">
                Ở Art ta dự án nghệ thuật độc lập, hướng đến tạo nơi trưng bày
                kết nối giữa nghệ sĩ và nghệ sĩ, nghệ sĩ với khán giả, và nghệ
                sĩ với không gian và các nhà tổ chức.
              </p>
              <p className="mb-4 dark:text-gray-300">
                Ở Art 2024 được thực hiện theo nền tảng &quot;pop-up&quot;, với
                chuỗi những sự kiện, triển lãm, trình diễn, trình chiếu/phim,
                lưu trữ sáng tác, mở xưởng, thảm khảo giải hài độc thoại, trò
                chuyện và hội thảo, lần lượt từ ngày 31 tháng 5 đến ngày 09
                tháng 6 tại Sài Gòn.
              </p>
            </div>
            {/* Artists */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 dark:text-gray-100 font-oswald">
                Artists
              </h3>
              <div className="flex flex-wrap gap-2">
                {artists.map((artist, index) => (
                  <div
                    key={index}
                    className="border border-black dark:border-gray-700 px-3 py-1 text-xs font-manrope"
                  >
                    {artist}
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4 dark:text-gray-100 font-oswald">
                Gallery
              </h3>
              <div className="relative">
                <div className="overflow-hidden">
                  <img
                    src={galleryImages[currentSlide]}
                    alt={`Gallery image ${currentSlide + 1}`}
                    className="w-full object-cover aspect-square"
                  />
                  {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 z-0">
                    <div className="text-white">
                      <h4 className="text-xl font-bold">KỶ ỨC CỦA CHÚNG TA</h4>
                      <p className="text-sm">COLLECTIVE MEMORIES</p>
                    </div>
                  </div> */}
                </div>

                <div className="flex justify-center mt-2 space-x-2 z-50">
                  {galleryImages.map((_, index) => (
                    <div
                      key={index}
                      className={`h-16 w-16 ${
                        index === currentSlide
                          ? "border-2 border-pink-500"
                          : "opacity-70"
                      }`}
                      onClick={() => setCurrentSlide(index)}
                    >
                      <img
                        src={galleryImages[index]}
                        alt={`Thumbnail ${index + 1}`}
                        className="h-full w-full object-cover cursor-pointer"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center mt-2">
                  <button
                    onClick={prevSlide}
                    className="p-1 rounded-full bg-gray-200 dark:bg-gray-800 mr-2"
                  >
                    <ChevronLeftIcon className="h-4 w-4" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-1 rounded-full bg-gray-200 dark:bg-gray-800"
                  >
                    <ChevronRightIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 mt-0.5 text-black dark:text-gray-400" />
              <div className="flex justify-center items-center">
                <p className="text-xs text-black dark:text-gray-400">
                  10 am - 5pm
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 mt-0.5 text-black dark:text-gray-400" />
              <div className="flex justify-center items-center">
                <p className="text-xs text-black dark:text-gray-400">
                  31 May 2025 - 10 Apr 2025
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 mt-0.5 text-black dark:text-gray-400" />
              <div className="flex justify-center items-center">
                <p className="text-xs text-black dark:text-gray-400">
                  Level 2, Emerald Tower, Thu Duc, HCMC
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <FileText className="h-5 w-5 mt-0.5 text-black dark:text-gray-400" />
              <div className="flex justify-center items-center">
                <p className="text-xs text-black dark:text-gray-400">Files</p>
              </div>
            </div>

            <Button
              className="w-full bg-pink-500 hover:bg-pink-600 text-white cursor-pointer"
              onClick={() => router.push("/register")}
            >
              REGISTER FOR THIS EVENT
            </Button>
          </div>
        </div>

        {/* Related Events */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl md:text-6xl text-pink-500 font-xanh">
              Related Event
            </h3>
            <a
              href="#"
              className="text-sm flex items-center text-black dark:text-gray-300 hover:underline font-manrope"
            >
              See all <ArrowRight className="h-4 w-4 ml-1" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedEvents.map((event, index) => (
              <div
                key={index}
                className="border-t border-gray-200 dark:border-gray-800 pt-2"
              >
                <div className="bg-gray-300 dark:bg-gray-700 h-32 mb-2"></div>
                <h4 className="font-bold text-sm mb-1 dark:text-gray-100 font-oswald">
                  {event.title}
                </h4>
                <div className="text-pink-500 text-xs font-bold font-manrope">
                  {event.type}
                </div>
                <div className="text-pink-500 text-xl font-bold font-manrope">
                  {event.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
