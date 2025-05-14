import React from "react";
import { ArrowRight } from "lucide-react";

export default function BlogPost() {
  const blogPosts = [
    {
      id: 1,
      title: "The Story behind Creation of The Vangogh Masterpiece",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et malesuada",
      date: "September 16, 2023",
    },
    {
      id: 2,
      title: "Historical Painting Auction in The Capital City of Venice",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et malesuada",
      date: "September 16, 2023",
    },
    {
      id: 3,
      title: "Meaning of Painting Monalisa & Starry Night",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et malesuada",
      date: "September 16, 2023",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12 font-oswald">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-5xl font-light text-pink-500 font-xanh">
          Blog Post
        </h2>
        <a
          href="#"
          className="flex items-center text-sm hover:text-pink-500 font-manrope"
        >
          See all <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="flex flex-col">
            <div className="bg-gray-300 aspect-video w-full mb-4"></div>
            <h3 className="text-lg font-bold mb-2">{post.title}</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 font-manrope">
              {post.content}
            </p>
            <div className="mt-auto flex flex-col">
              <a href="#" className="text-pink-500 text-sm mb-2 font-manrope">
                Read more &gt;
              </a>
              <span className="text-sm text-gray-500 font-manrope">
                {post.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
