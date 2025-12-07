"use client";

export default function AboutCompany() {
  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-14 items-center">

          {/* ---------------- LEFT CONTENT ---------------- */}
          <div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#083A73] mb-4 sm:mb-6">
              Spireon Tech
            </h2>

            <p className="text-gray-600 leading-relaxed text-sm sm:text-lg mb-4 sm:mb-6">
              Spireon Tech is your trusted technology partner, dedicated to 
              delivering innovative solutions that drive business growth. Our 
              team of experienced developers, designers, and consultants work 
              collaboratively to transform your digital vision into reality.
            </p>

            <p className="text-gray-600 leading-relaxed text-sm sm:text-lg mb-6 sm:mb-8">
              From startups to enterprise-level organizations, we provide 
              end-to-end technology services that help you stay competitive 
              in today’s rapidly evolving digital landscape.
            </p>

            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-center text-sm sm:text-lg text-gray-700">
                <i className="fa-solid fa-circle-check text-green-600 mr-3 text-base sm:text-xl"></i>
                Expert Team
              </li>

              <li className="flex items-center text-sm sm:text-lg text-gray-700">
                <i className="fa-solid fa-circle-check text-green-600 mr-3 text-base sm:text-xl"></i>
                Proven Results
              </li>

              <li className="flex items-center text-sm sm:text-lg text-gray-700">
                <i className="fa-solid fa-circle-check text-green-600 mr-3 text-base sm:text-xl"></i>
                24/7 Support
              </li>
            </ul>
          </div>

          {/* ---------------- RIGHT ICON CARD (MATCHING YOUR IMAGE) ---------------- */}
          <div className="flex justify-center md:justify-end">

            <div
              className="w-60 h-60 sm:w-72 sm:h-72 rounded-3xl bg-linear-to-br from-[#6b7cff] to-[#6f4cb0] flex items-center justify-center shadow-xl shadow-purple-200/50">
              <i className="fa-solid fa-users text-white text-5xl sm:text-6xl md:text-7xl"></i>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
