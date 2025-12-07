import React from "react";

export default function ValueCard({ icon, valueName, desc }) {
  return (
    <div
      className="bg-white rounded-2xl border border-gray-100 
                 shadow-[0_10px_25px_rgba(0,0,0,0.06)]
                 p-10 text-center space-y-5
                 hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)]
                 hover:-translate-y-1 transition-all duration-300 h-full"
    >
      {/* Icon Box */}
      <div
        className="w-14 h-14 mx-auto rounded-xl flex items-center justify-center
                   bg-linear-to-br from-[#667FEA] to-[#4A5EDB] text-white text-xl
                   shadow-md"
      >
        <i className={icon}></i>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900">
        {valueName}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-lg leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
