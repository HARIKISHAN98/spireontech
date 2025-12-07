"use client";

import React from "react";
import BlogCard from "./BlogCard";

const blogs = [
  {
    slug: "future-of-ai-in-business",
    icon: "fas fa-robot",
    tag: "AI & Technology",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    title: "The Future of AI in Business",
    desc: "Exploring how artificial intelligence is revolutionizing business operations and customer experiences."
  },
  {
    slug: "cloud-migration-best-practices",
    icon: "fas fa-cloud",
    tag: "Cloud Computing",
    date: "Dec 10, 2024",
    readTime: "7 min read",
    title: "Cloud Migration Best Practices",
    desc: "Essential strategies for successful cloud migration and optimization for modern businesses."
  },
  {
    slug: "mobile-first-development",
    icon: "fas fa-mobile-alt",
    tag: "Web Development",
    date: "Dec 5, 2024",
    readTime: "4 min read",
    title: "Mobile-First Development",
    desc: "Why mobile-first approach is crucial for modern web development and user experience."
  },
  {
    slug: "data-driven-decision-making",
    icon: "fas fa-database",
    tag: "Data Analytics",
    date: "Nov 28, 2024",
    readTime: "6 min read",
    title: "Data-Driven Decision Making",
    desc: "How to leverage data analytics to make informed business decisions."
  },
  {
    slug: "cybersecurity-best-practices",
    icon: "fas fa-shield-alt",
    tag: "Security",
    date: "Nov 20, 2024",
    readTime: "8 min read",
    title: "Cybersecurity Best Practices",
    desc: "Essential cybersecurity measures every business should implement."
  },
  {
    slug: "digital-transformation-strategies",
    icon: "fas fa-chart-line",
    tag: "Business Strategy",
    date: "Nov 15, 2024",
    readTime: "9 min read",
    title: "Digital Transformation Strategies",
    desc: "A comprehensive guide to digital transformation for modern businesses."
  }
];

export default function BlogPage() {
  return (
    <div className="bg-[#f8fafc]">

      {/* ✅ RESPONSIVE BANNER */}
      <div className="bg-linear-to-br from-[#667FEA] to-[#4A5EDB] min-h-[28vh] sm:min-h-[32vh] flex flex-col items-center justify-center text-center px-3 sm:px-6 space-y-2 sm:space-y-4">
        
        <h2 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
          Latest Insights
        </h2>

        <p className="text-xs xs:text-sm sm:text-lg md:text-xl text-white max-w-2xl leading-relaxed">
          Stay updated with the latest trends and insights in technology
        </p>
      </div>

      {/* ✅ RESPONSIVE GRID */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-10 sm:py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-10">
          {blogs.map((item, index) => (
            <BlogCard key={index} {...item} />
          ))}
        </div>
      </div>

    </div>
  );
}
