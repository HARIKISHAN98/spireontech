import React from "react";

export default function ServiceCard({
  icon,
  title,
  desc,
  offers,
  technologies,
}) {
  return (
    <div
      className=" bg-white rounded-2xl border border-gray-100 shadow-md p-3 xs:p-4 sm:p-10 flex flex-col gap-3 sm:gap-6 hover:shadow-xl transition-all duration-300 overflow-hidden " >
      {/* ✅ HEADER – MICRO SCREEN SAFE */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-5 text-center sm:text-left">
        <div className=" w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-2xl bg-linear-to-br from-[#667FEA] to-[#4A5EDB] flex items-center justify-center text-white text-lg xs:text-xl sm:text-3xl shrink-0 " >
          <i className={icon}></i>
        </div>

        <div className="w-full overflow-hidden">
          <h3 className="text-sm xs:text-base sm:text-2xl font-bold text-gray-900 leading-snug wrap-break-words">
            {title}
          </h3>
          <p className="text-[11px] xs:text-xs sm:text-base text-gray-600 mt-1 sm:mt-2 leading-snug wrap-break-words">
            {desc}
          </p>
        </div>
      </div>

      {/* ✅ WHAT WE OFFER – WORD BREAK + DENSITY FIX */}
      <div className="overflow-hidden">
        <h4 className="font-semibold text-gray-900 mb-1.5 sm:mb-3 text-xs xs:text-sm sm:text-lg">
          What We Offer
        </h4>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1 sm:gap-y-2 text-[11px] xs:text-xs sm:text-sm text-gray-700">
          {offers.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-1.5 leading-snug wrap-break-words overflow-hidden"
            >
              <span className="text-green-600 mt-0.5 shrink-0">✓</span>
              <span className="wrap-break-word">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ✅ TECHNOLOGIES – CHIP SAFE FOR 230px */}
      <div className="mt-auto overflow-hidden">
        <h4 className="font-semibold text-gray-900 mb-1.5 sm:mb-3 text-xs xs:text-sm sm:text-lg">
          Technologies We Use
        </h4>

        <div className="flex flex-wrap gap-1 sm:gap-2">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className=" px-2 xs:px-2.5 sm:px-4 py-0.5 sm:py-1.5 text-[10px] xs:text-[11px] sm:text-xs rounded-full bg-gray-100 border text-gray-700 font-medium wrap-break-word overflow-hidden " >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
