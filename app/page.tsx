"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import CurrentEvents from "@/components/current-event";
import UpcomingEvents from "@/components/upcoming-event";
import BlogPost from "@/components/blog-post";
import Partnership from "@/components/partnership";
import SubscribeNewsletter from "@/components/subscribe";

export default function SingaporeArtMuseum() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}

      {/* Hero Section */}
      <section className="pt-20">
        <div className="relative h-[70vh]">
          <img
            src="https://images.unsplash.com/photo-1544967082-d9d25d867d66"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
                Singapore Art Museum
              </h1>
              <p className="text-xl text-white mb-8">
                Contemporary art in Southeast Asia
              </p>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100"
              >
                Plan Your Visit <ChevronRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Exhibitions Section */}
      <CurrentEvents />

      {/* Exhibitions Section */}
      <UpcomingEvents />

      {/* Blog Post Section */}
      <BlogPost />

      {/* Partnership Section */}
      <Partnership />

      {/* Subscribe Section */}
      <SubscribeNewsletter />
    </div>
  );
}
