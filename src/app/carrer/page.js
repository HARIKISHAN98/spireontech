"use client";

import JobCard from "./JobcCard";
import { careerJobs, careerBenefits } from "./data";

export default function CareerPage() {
  return (
    <section className="w-full bg-[#F8FAFC] min-h-screen">

      {/* ================= HERO SECTION ================= */}
      <div className="w-full bg-linear-to-r from-[#667FEA] to-[#764ba2] pt-24 sm:pt-28 pb-16 sm:pb-20 flex flex-col items-center justify-center text-center px-4 sm:px-6">
        <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight">
          Careers at Spireon Tech
        </h1>

        <p className="text-white/90 max-w-2xl text-xs sm:text-base md:text-lg leading-relaxed">
          Build your future with a team that values innovation, growth, and impact.
        </p>
      </div>

      {/* ================= WHY JOIN SECTION ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Why Join Spireon Tech?
          </h2>

          <p className="text-gray-600 mt-2 sm:mt-3 text-xs sm:text-base">
            We offer an environment where talent thrives and innovation leads.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {careerBenefits.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-4 sm:p-6 text-center space-y-2 sm:space-y-3" >
              <div className="text-2xl sm:text-3xl">{item.icon}</div>

              <h3 className="font-semibold text-base sm:text-lg text-gray-800">
                {item.title}
              </h3>

              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= CURRENT OPENINGS ================= */}
      <div className="bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              Current Openings
            </h2>

            <p className="text-gray-600 mt-2 sm:mt-3 text-xs sm:text-base">
              Explore opportunities and grow your career with us.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {careerJobs.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>
        </div>
      </div>

      {/* ================= CTA SECTION ================= */}
      <div className="bg-blue-900 py-14 sm:py-20">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-white text-xl sm:text-3xl font-bold mb-3 sm:mb-4">
            Didn’t find your role?
          </h2>

          <p className="text-white/80 mb-5 sm:mb-6 text-xs sm:text-base leading-relaxed">
            Send us your resume and we’ll reach out when the right opportunity opens.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-blue-900 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium hover:bg-gray-100 transition w-full sm:w-auto">
            Send Your Resume
          </a>
        </div>
      </div>

    </section>
  );
}
