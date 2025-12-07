export default function PartnershipsPage() {
  return (
    <section className="bg-[#F8FAFC] min-h-screen pt-20 sm:pt-24 md:pt-28 pb-12 flex items-start">
      <div className="w-full max-w-6xl mx-auto px-3 sm:px-4 md:px-6 flex flex-col justify-center">

        {/* ✅ RESPONSIVE HERO */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h1
            className="text-xl xs:text-2xl sm:text-3xl md:text-4xl 
                       font-bold mb-2 sm:mb-3 md:mb-4 leading-tight"
          >
            Partnerships
          </h1>

          <p
            className="text-xs xs:text-sm sm:text-base md:text-lg 
                       text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Strategic alliances with global technology leaders that strengthen our
            delivery, accelerate innovation, and expand our global reach for clients.
          </p>
        </div>

        {/* ✅ RICH CONTENT CARD */}
        <div
          className="bg-white rounded-xl sm:rounded-2xl 
                     shadow p-4 sm:p-6 md:p-8 
                     space-y-4 sm:space-y-6 
                     w-full"
        >
          {/* Intro text */}
          <p className="text-xs xs:text-sm sm:text-base text-gray-700 leading-relaxed">
            At Spireon Tech, we don’t just implement platforms — we work closely
            with our partners to co-create solutions, share best practices, and
            bring the latest product capabilities into every engagement. Our
            partnership ecosystem ensures that clients benefit from proven
            frameworks, certified experts, and enterprise-grade delivery standards.
          </p>

          {/* Two-column content on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

            {/* LEFT: Partnership types */}
            <div className="space-y-3">
              <h2 className="text-sm sm:text-lg font-semibold text-gray-900">
                Our Strategic Partnerships
              </h2>

              <ul className="space-y-2 sm:space-y-3">
                {[
                  "Microsoft Partner Network",
                  "Cloud & AI Alliances",
                  "Enterprise Technology Partners",
                  "Global System Integrators",
                  "Startup Ecosystem Collaborations",
                  "Specialized niche solution providers",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 sm:gap-3 
                               text-xs xs:text-sm sm:text-base 
                               text-gray-700"
                  >
                    <span className="text-green-600 shrink-0 leading-none mt-[2px]">
                      ✔
                    </span>
                    <span className="leading-snug break-words">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT: Benefits */}
            <div className="space-y-3">
              <h2 className="text-sm sm:text-lg font-semibold text-gray-900">
                What Our Partnerships Enable
              </h2>

              <ul className="space-y-2 sm:space-y-3">
                {[
                  "Faster time-to-market with pre-validated solution blueprints",
                  "Access to certified experts and specialized competency centers",
                  "Co-innovation programs for AI, analytics, and automation use cases",
                  "Priority access to new platform features, roadmaps, and previews",
                  "Stronger governance, security, and compliance alignment",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 sm:gap-3 
                               text-xs xs:text-sm sm:text-base 
                               text-gray-700"
                  >
                    <span className="text-green-600 shrink-0 leading-none mt-[2px]">
                      ✔
                    </span>
                    <span className="leading-snug break-words">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Closing paragraph */}
          <p className="text-xs xs:text-sm sm:text-base text-gray-700 leading-relaxed">
            Together with our partners, we help organizations modernize their
            technology landscape, unlock new revenue streams, and build digital
            capabilities that scale globally. Whether you are starting your
            transformation journey or optimizing existing investments, our
            partnership ecosystem ensures you are never building alone.
          </p>
        </div>

      </div>
    </section>
  );
}
