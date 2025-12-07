"use client";

import Link from "next/link";

export default function BlogCard({ icon, title, description, date, slug }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_6px_24px_rgba(0,0,0,0.06)] overflow-hidden transition hover:shadow-xl">
      
      {/* ✅ Top gradient – mobile height & icon scale fixed */}
      <div className="h-32 sm:h-36 md:h-40 bg-linear-to-br from-[#667FEA] to-[#4A5EDB] flex items-center justify-center">
        <i className={`${icon} text-white text-3xl sm:text-4xl md:text-5xl`} />
      </div>

      {/* ✅ Content – mobile spacing & font scaling fixed */}
      <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 leading-snug">
          {title}
        </h3>

        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pt-3 sm:pt-4 gap-2 sm:gap-0 text-xs sm:text-sm">
          <span className="text-gray-500">{date}</span>

          {/* ✅ ROUTING – unchanged */}
          <Link
            href={`/blog/${slug}`}
            className="text-[#083A73] font-semibold hover:underline self-start sm:self-auto"
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
}
