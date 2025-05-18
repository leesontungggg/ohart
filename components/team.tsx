import React from "react";

export default function TeamSection() {
  return (
    <section className="bg-[#242424] text-white py-16 px-4 font-manrope">
      <div className="container mx-auto">
        <div className="mb-16">
          <h2 className="text-[100px] font-light text-white leading-tight font-xanh">
            Oh Art
            <br />
            Team
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-start w-full">
            <img src="/director.png" alt="Ohart" className="w-full" />
            <h3 className="text-[40px] font-light tracking-wider uppercase font-xanh mt-12">
              MZUNG NGUYEN
            </h3>
            <p className="text-white text-[32px]">Director</p>
          </div>

          <div className="flex flex-col items-start w-full">
            <img src="/producer.png" alt="Ohart" className="w-full" />
            <h3 className="text-[40px] font-light tracking-wider uppercase font-xanh mt-12">
              MINH THƯ
            </h3>
            <p className="text-white text-[32px]">Producer</p>
          </div>

          <div className="flex flex-col items-start w-full">
            <img src="/design-manager.png" alt="Ohart" className="w-full" />
            <h3 className="text-[40px] font-light tracking-wider uppercase font-xanh mt-12">
              LÊ VĨNH LỘC
            </h3>
            <p className="text-white text-[32px]">Design Manager</p>
          </div>

          <div className="flex flex-col items-start w-full">
            <img src="/media-manager.png" alt="Ohart" className="w-full" />
            <h3 className="text-[40px] font-light tracking-wider uppercase font-xanh mt-12">
              SULLA
            </h3>
            <p className="text-white text-[32px]">Media Manager</p>
          </div>

          <div className="flex flex-col items-start w-full">
            <img src="/event-manager.png" alt="Ohart" className="w-full" />
            <h3 className="text-[40px] font-light tracking-wider uppercase font-xanh mt-12">
              RIPP NGUYEN
            </h3>
            <p className="text-white text-[32px]">Event Manager</p>
          </div>

          <div className="flex flex-col items-start w-full">
            <img src="/senior-designer.png" alt="Ohart" className="w-full" />
            <h3 className="text-[40px] font-light tracking-wider uppercase font-xanh mt-12">
              Thanh Taam - Lý
            </h3>
            <p className="text-white text-[32px]">Senior Design</p>
          </div>
        </div>
      </div>
    </section>
  );
}
