import React from "react";
import { ArrowRight } from "lucide-react";

export default function UpcomingEvents() {
  return (
    <section className="px-4 py-16 font-oswald md:h-auto min-h-screen bg-[#FF00A8]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start mb-8 h-full">
        <div className="mb-8 md:mb-0 md:w-1/4 h-full flex flex-col">
          <h2 className="text-[100px] font-light text-white leading-tight font-xanh">
            Upcoming
            <br />
            Event
          </h2>
          <p className="text-sm text-white dark:text-gray-300 max-w-xs font-manrope mt-auto text-[20px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem
            ipsum dolor sit amet.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:w-3/4 relative pt-[10%]">
          <div className="absolute right-4 top-0 flex items-center text-sm">
            <a href="#" className="flex items-center text-white font-manrope">
              See all <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Event Card 1 */}
            <div className="flex flex-col p-4 bg-white">
              <div className="bg-gray-300 aspect-square w-full"></div>
              <h3 className="text-xl font-normal mt-4 uppercase text-[48px]">
                KÝ ỨC CỦA CHÚNG TA - COLLECTIVE MEMORIES
              </h3>
              <div className="text-pink-500 font-bold text-[24px] mt-2 font-manrope">
                EXHIBITION
              </div>
              <div className="text-2xl font-bold text-[48px] mt-1 font-manrope">
                01.06
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="flex flex-col p-4 bg-white">
              <div className="bg-gray-300 aspect-square w-full"></div>
              <h3 className="text-xl font-normal mt-4 uppercase text-[48px]">
                KÝ ỨC CỦA CHÚNG TA - COLLECTIVE MEMORIES
              </h3>
              <div className="text-pink-500 font-bold text-[24px] mt-2 font-manrope">
                EXHIBITION
              </div>
              <div className="text-2xl font-bold text-[48px] mt-1 font-manrope">
                01.06
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 mt-8"></div>
    </section>
  );
}
