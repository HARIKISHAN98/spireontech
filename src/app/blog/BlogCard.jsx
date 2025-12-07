import React from "react";
import Link from "next/link";

export default function BlogCard({
  icon,
  tag,
  date,
  readTime,
  title,
  desc,
  slug,
}) {
  return (
    <article
      className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-[0_10px_30px_rgba(15,23,42,0.08)] overflow-hidden flex flex-col min-h-[300px] sm:min-h-[360px]" >

      {/* ✅ RESPONSIVE TOP GRADIENT */}
      <div className="h-28 sm:h-40 md:h-44 bg-linear-to-br from-[#667FEA] to-[#4A5EDB] flex items-center justify-center">
        <i className={`${icon} text-xl sm:text-4xl md:text-5xl text-white`} />
      </div>

      {/* ✅ CONTENT */}
      <div className="flex-1 flex flex-col gap-3 sm:gap-4 p-3 sm:p-6 md:p-7">

        {/* TAG + DATE */}
        <div className="flex items-center justify-between text-[10px] xs:text-xs sm:text-sm text-gray-500">
          <span className="inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-gray-100 text-gray-700 font-medium truncate max-w-[70%]">
            {tag}
          </span>
          <span className="shrink-0">{date}</span>
        </div>

        {/* TITLE */}
        <h3 className="text-sm xs:text-base sm:text-xl font-semibold text-slate-900 leading-snug">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-xs xs:text-sm sm:text-base text-gray-600 leading-relaxed wrap-break-word">
          {desc}
        </p>

        {/* ✅ BOTTOM ROW */}
        <div className="mt-auto pt-2 flex items-center justify-between text-[10px] xs:text-xs sm:text-sm">
          <span className="text-gray-500">{readTime}</span>

          <Link
            href={`/blog/${slug}`}
            className="text-[#2563EB] font-semibold inline-flex items-center gap-1 hover:gap-1.5 transition-all text-[11px] xs:text-xs sm:text-sm" >
            Read More <span className="text-sm sm:text-base">→</span>
          </Link>
        </div>

      </div>
    </article>
  );
}
