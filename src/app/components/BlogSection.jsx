"use client";

import BlogCard from "./BlogCard";

export default function BlogSection() {
  const blogs = [
    {
      slug: "future-of-ai-in-business",
      icon: "fa-solid fa-robot",
      title: "The Future of AI in Business",
      description:
        "Exploring how artificial intelligence is revolutionizing business operations and customer experiences.",
      date: "Dec 15, 2024",
    },
    {
      slug: "cloud-migration-best-practices",
      icon: "fa-solid fa-cloud",
      title: "Cloud Migration Best Practices",
      description:
        "Essential strategies for successful cloud migration and optimization for modern businesses.",
      date: "Dec 10, 2024",
    },
    {
      slug: "mobile-first-development",
      icon: "fa-solid fa-mobile-screen-button",
      title: "Mobile-First Development",
      description:
        "Why mobile-first approach is crucial for modern web development and user experience.",
      date: "Dec 5, 2024",
    },
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

        {/* ✅ Heading – mobile font & spacing fixed */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#083A73]">
          Latest Insights
        </h2>

        <p className="text-center text-gray-600 mt-2 sm:mt-3 mb-8 sm:mb-10 md:mb-14 text-sm sm:text-base">
          Stay updated with the latest trends and insights in technology
        </p>

        {/* ✅ Blog Cards Grid – mobile stack & spacing fixed */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {blogs.map((item, i) => (
            <BlogCard key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
