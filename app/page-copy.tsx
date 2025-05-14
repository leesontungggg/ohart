/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Head from "next/head";

const jsondata = {
  header: {
    title: "362 Concepts",
    subtitle: "362 Concepts là đơn vị làm những gì họ muốn",
    searchPlaceholder: "Search concepts...",
  },
  categories: ["All", "Rock", "Hiphop", "Graffiti", "Music", "Other"],
};

import { useEffect, useState } from "react";
import { Search, Star, ArrowUpRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import HeaderSkeleton from "@/components/header-skeleton";
import ToolCardSkeleton from "@/components/card-skeleton";

export default function DirectoryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [likedTools, setLikedTools] = useState<number[]>([]);
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    fetch("/api/get-events", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "ok") {
          setEvents(data.data);
          setIsLoading(false);
        }
      });
  }, []);

  if (!events.length && isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <HeaderSkeleton />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <ToolCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  const filteredTools = events?.filter((tool: any) => {
    const matchesSearch =
      tool.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.short_desc?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || tool.tags.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const toggleLike = (id: number) => {
    setLikedTools((prev) =>
      prev.includes(id) ? prev.filter((toolId) => toolId !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 md:p-8">
      <Head>
        <meta name="og:title" content="326 Concepts" />
        <meta
          name="og:description"
          content="326 Concepts is a ticket engine with curated list of events. Nothing is boring here."
        />
        {
          <meta
            name="og:image"
            content={`https://hiden-live-space.s3.ap-southeast-1.amazonaws.com/logo-concepts-326.png`}
          />
        }
      </Head>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            {jsondata.header?.title}
          </h1>
          {jsondata.header?.subtitle && (
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              {jsondata.header.subtitle}
            </p>
          )}

          <div className="relative max-w-2xl mx-auto mb-8">
            <Search className="absolute left-2 top-2 text-gray-400" />
            <Input
              type="text"
              placeholder={jsondata.header?.searchPlaceholder}
              className="w-full pl-12 pr-4 py-2 rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {jsondata.categories?.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools?.map((tool: any) => (
            <motion.div
              key={tool.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              {tool.thumbnail_url && (
                <div className="relative mb-4">
                  <img
                    src={tool.thumbnail_url}
                    alt={tool?.name}
                    className="w-full h-48 object-cover rounded-lg"
                    onError={(e) => {
                      e.currentTarget.src = tool.thumbnail_url;
                    }}
                  />
                  <button
                    onClick={() => toggleLike(tool?.id)}
                    className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-800 rounded-full shadow-md"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        likedTools.includes(tool?.id)
                          ? "text-red-500 fill-red-500"
                          : "text-gray-400"
                      }`}
                    />
                  </button>
                </div>
              )}

              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {tool?.name}
                </h3>
                {tool.rating && (
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 mr-1" />
                    <span className="text-gray-600 dark:text-gray-300">
                      {tool.rating}
                    </span>
                  </div>
                )}
              </div>

              {tool.short_desc && (
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {tool.short_desc}
                </p>
              )}

              <div className="flex items-center justify-between gap-2">
                {tool.tags &&
                  tool.tags.split(", ").map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-600 dark:text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
              </div>
              <Button
                variant="ghost"
                className="flex items-center gap-2 mx-auto mt-4"
                onClick={() => {
                  router.push(`/event/${tool.id}`);
                }}
              >
                Xem sự kiện <ArrowUpRight className="w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
