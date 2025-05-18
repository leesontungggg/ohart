import React from "react";

export default function DownloadBooklet() {
  return (
    <section className="container mx-auto px-4 py-16 font-manrope">
      <h2 className="text-5xl font-light text-[#000] mb-12 font-xanh text-center">
        Oh Art Festival 2024
      </h2>

      <div className="flex flex-col items-center justify-center">
        <a
          href="/booklet.pdf"
          download
          className="bg-[#D9D9D9] text-[#000] py-2 px-4 rounded-lg shadow-md transition duration-300 font-xanh"
        >
          Download Booklet
        </a>
      </div>
    </section>
  );
}
