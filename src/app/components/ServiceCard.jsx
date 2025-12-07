"use client";
import React from "react";

export default function ServiceCard({
  icon,
  title,
  points = [],
  color = "#667FEA",
}) {
  return (
    <div
      className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 p-5 sm:p-8 flex flex-col" >
      {/* ICON BOX */}
      <div
        className="w-11 h-11 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 shrink-0 mx-auto sm:mx-0"
        style={{ backgroundColor: color }}
      >
        <i className={`${icon} text-white text-lg sm:text-2xl`} />
      </div>

      {/* TITLE */}
      <h3
        className="text-lg sm:text-2xl font-serif font-bold text-gray-900 mb-4 sm:mb-6 text-center sm:text-left wrap-break-words hyphens-auto leading-snug" >
        {title}
      </h3>

      {/* ✅ POINTS — WORD BREAK + MOBILE DENSITY FIX */}
      <ul className="space-y-2.5 sm:space-y-4">
        {points.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-2.5 text-gray-700 text-sm sm:text-base leading-snug wrap-break-words">
            <span className="text-green-500 text-base sm:text-lg mt-0.5 shrink-0">
              ✓
            </span>
            <span className="wrap-break-word hyphens-auto">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
