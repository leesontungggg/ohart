"use client";

import React from "react";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-12 px-4 font-manrope">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="mb-8 md:mb-0">
          <h2 className="text-6xl font-bold text-white mb-2">Oh Art</h2>
          <p className="text-xs text-gray-400">
            Oh Art © 2023 All rights reserved
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-6">
          <div className="flex flex-col space-y-2">
            <a
              href="#about"
              className="text-sm hover:text-gray-300 transition-colors"
            >
              About Us
            </a>
            <a
              href="#board"
              className="text-sm hover:text-gray-300 transition-colors"
            >
              Our Board
            </a>
            <a
              href="#careers"
              className="text-sm hover:text-gray-300 transition-colors"
            >
              Careers
            </a>
            <a
              href="#contact"
              className="text-sm hover:text-gray-300 transition-colors"
            >
              Contact Us
            </a>
          </div>

          <div className="flex flex-col space-y-2">
            <a
              href="#programmes"
              className="text-sm hover:text-gray-300 transition-colors"
            >
              Programmes
            </a>
            <a
              href="#artists"
              className="text-sm hover:text-gray-300 transition-colors"
            >
              Artists
            </a>
            <a
              href="#artworks"
              className="text-sm hover:text-gray-300 transition-colors"
            >
              Artworks
            </a>
            <a
              href="#download"
              className="text-sm hover:text-gray-300 transition-colors"
            >
              Download Booklet
            </a>
          </div>

          <div className="flex flex-col space-y-2 col-span-2 md:col-span-1 mt-6 md:mt-0">
            <a
              href="#tickets"
              className="text-sm hover:text-gray-300 transition-colors"
            >
              Get your ticket
            </a>
            <a
              href="#shop"
              className="text-sm hover:text-gray-300 transition-colors"
            >
              Oh Shop
            </a>
            <a
              href="#faqs"
              className="text-sm hover:text-gray-300 transition-colors"
            >
              FAQs
            </a>
            <a
              href="#blog"
              className="text-sm hover:text-gray-300 transition-colors"
            >
              Blog
            </a>
          </div>
        </div>

        <div className="flex space-x-4 mt-8 md:mt-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-2 rounded-full transition-colors"
          >
            <Facebook size={20} color="black" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-2 rounded-full transition-colors"
          >
            <Instagram size={20} color="black" />
          </a>
        </div>
      </div>
    </footer>
  );
}
