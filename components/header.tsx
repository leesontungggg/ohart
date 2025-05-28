"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Search, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  return (
    <header className="relative bg-black text-white !font-oswald">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-pink-500 font-bold text-2xl">Oh Art</div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-black border-gray-800">
            <nav className="flex flex-col space-y-6 mt-12">
              <a
                href="/about"
                className="text-white hover:text-pink-500 text-lg uppercase"
              >
                About
              </a>
              <a
                href="/programmes"
                className="text-white hover:text-pink-500 text-lg uppercase"
              >
                Programmes
              </a>
              <div>
                <a
                  href="#"
                  className="text-white hover:text-pink-500 text-lg uppercase"
                >
                  Artists & Artworks
                </a>
                <div className="ml-4 mt-2 flex flex-col space-y-2">
                  <a
                    href="#"
                    className="text-white hover:text-pink-500 text-base"
                  >
                    Artists
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-pink-500 text-base"
                  >
                    Artworks
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="text-white hover:text-pink-500 text-lg uppercase"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-white hover:text-pink-500 text-lg uppercase"
              >
                Oh Shop
              </a>
              <a
                href="#"
                className="bg-pink-500 hover:bg-pink-600 px-4 py-2 text-white text-sm font-medium uppercase inline-block"
              >
                Buy Ticket
              </a>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-2">
          <nav className="flex items-center">
            <a
              href="/about"
              className="text-white hover:text-pink-500 text-sm font-medium uppercase px-4 py-5"
            >
              About
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <a
                  href="/programmes"
                  className="text-white hover:text-pink-500 text-sm font-medium uppercase px-4 py-5 cursor-pointer focus-visible:outline-0"
                  onClick={(e) => e.preventDefault()}
                >
                  Programmes
                </a>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#D8D8D8] text-black min-w-[200px] p-2 rounded-none">
                <DropdownMenuItem className="focus:bg-gray-200 focus:text-pink-500">
                  <a
                    href="/programmes?category=fine-art"
                    className="text-pink-500 hover:underline font-medium w-full"
                  >
                    FINE ART
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-gray-200 focus:text-pink-500">
                  <a
                    href="/programmes?category=film"
                    className="text-black hover:text-pink-500 w-full"
                  >
                    FILM
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-gray-200 focus:text-pink-500">
                  <a
                    href="/programmes?category=performance"
                    className="text-black hover:text-pink-500 w-full"
                  >
                    PERFORMANCE
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-gray-200 focus:text-pink-500">
                  <a
                    href="/programmes?category=residency"
                    className="text-black hover:text-pink-500 w-full"
                  >
                    RESIDENCY
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-gray-200 focus:text-pink-500">
                  <a
                    href="/programmes?category=workshop"
                    className="text-black hover:text-pink-500 w-full"
                  >
                    WORKSHOP & TALKSHOW
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <a
                  href="#"
                  className="text-white hover:text-pink-500 text-sm font-medium uppercase px-4 py-5 cursor-pointer focus-visible:outline-0"
                  onClick={(e) => e.preventDefault()}
                >
                  Artists & Artworks
                </a>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#D8D8D8] text-black min-w-[200px] p-2 rounded-none">
                <DropdownMenuItem className="focus:bg-gray-200 focus:text-pink-500">
                  <a
                    href="#"
                    className="text-pink-500 hover:underline font-medium w-full"
                  >
                    ARTISTS
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-gray-200 focus:text-pink-500">
                  <a href="#" className="text-black hover:text-pink-500 w-full">
                    ARTWORKS
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a
              href="#"
              className="text-white hover:text-pink-500 text-sm font-medium uppercase px-4 py-5"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-white hover:text-pink-500 text-sm font-medium uppercase px-4 py-5"
            >
              Oh Shop
            </a>
            <a
              href="#"
              className="bg-pink-500 hover:bg-pink-600 px-4 py-2 text-white text-xs font-medium uppercase ml-4"
            >
              Buy Ticket
            </a>
          </nav>

          {/* Search Button/Input */}
          <div className="relative ml-4">
            {isSearchOpen ? (
              <div className="flex items-center absolute right-0 top-0 bg-black bg-opacity-90 p-1 rounded">
                <Input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent border-b border-white text-white w-48 focus:outline-none h-8"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white h-8 w-8"
                  onClick={toggleSearch}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                className="text-white"
                onClick={toggleSearch}
              >
                <Search className="h-5 w-5" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
