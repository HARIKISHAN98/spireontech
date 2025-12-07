"use client";

export default function TestimonialCard({ quote, name, role }) {
  return (
    <div
      className=" bg-white rounded-2xl border border-gray-100 shadow-[0_6px_24px_rgba(0,0,0,0.04)] p-5 sm:p-6 md:p-8 flex flex-col justify-between " >
      {/* ✅ Quote – mobile font & spacing fixed */}
      <p className="text-gray-600 italic leading-relaxed mb-4 sm:mb-5 md:mb-6 text-sm sm:text-base">
        "{quote}"
      </p>

      {/* ✅ Author – vertical balance & font scaling */}
      <div>
        <p className="font-semibold text-[#083A73] text-base sm:text-lg">
          {name}
        </p>
        <p className="text-gray-500 text-xs sm:text-sm">
          {role}
        </p>
      </div>
    </div>
  );
}
