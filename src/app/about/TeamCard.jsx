import React from "react";

export default function TeamCard({ icon, name, design, desc }) {
  return (
    <div
      className="bg-white rounded-2xl border border-gray-100 
                 shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                 p-8 text-center space-y-5 
                 hover:shadow-[0_16px_40px_rgba(0,0,0,0.10)]
                 hover:-translate-y-1 transition-all duration-300 h-full"
    >
      {/* Icon */}
      <div
        className="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-3xl text-white
                   bg-linear-to-br from-[#667FEA] to-[#4A5EDB]
                   shadow-md"
      >
        <i className={icon}></i>
      </div>

      {/* Name */}
      <h3 className="text-xl font-semibold text-gray-900">
        {name}
      </h3>

      {/* Designation */}
      <p className="text-[#667FEA] text-sm font-medium tracking-wide">
        {design}
      </p>

      {/* Description */}
      <p className="text-gray-600 text-lg leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
