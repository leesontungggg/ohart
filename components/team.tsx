import React from "react";

export default function TeamSection() {
  return (
    <section className="bg-black text-white py-16 px-4 font-manrope">
      <div className="container mx-auto">
        <div className="mb-16">
          <h2 className="text-[100px] font-light text-pink-500 leading-tight font-xanh">
            Oh Art
            <br />
            Team
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            {/* Empty div for spacing in first position on mobile */}
            <div className="hidden md:block"></div>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-gray-400 w-full aspect-square max-w-xs mb-4"></div>
            <h3 className="text-[40px] font-light tracking-wider uppercase font-xanh">
              MZUNG NGUYEN
            </h3>
            <p className="text-pink-500 text-[32px]">Founder</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-gray-400 w-full aspect-square max-w-xs mb-4"></div>
            <h3 className="text-[40px] font-light tracking-wider uppercase font-xanh">
              MZUNG NGUYEN
            </h3>
            <p className="text-pink-500 text-[32px]">Founder</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-gray-400 w-full aspect-square max-w-xs mb-4"></div>
            <h3 className="text-[40px] font-light tracking-wider uppercase font-xanh">
              MZUNG NGUYEN
            </h3>
            <p className="text-pink-500 text-[32px]">Founder</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-gray-400 w-full aspect-square max-w-xs mb-4"></div>
            <h3 className="text-[40px] font-light tracking-wider uppercase font-xanh">
              MZUNG NGUYEN
            </h3>
            <p className="text-pink-500 text-[32px]">Founder</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-gray-400 w-full aspect-square max-w-xs mb-4"></div>
            <h3 className="text-[40px] font-light tracking-wider uppercase font-xanh">
              MZUNG NGUYEN
            </h3>
            <p className="text-pink-500 text-[32px]">Founder</p>
          </div>
        </div>
      </div>
    </section>
  );
}
