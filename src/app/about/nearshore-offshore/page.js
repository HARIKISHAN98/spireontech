export default function NearshoreOffshorePage() {
  return (
    <section className="bg-[#F8FAFC] min-h-screen pt-20 sm:pt-24 md:pt-28 pb-12 flex items-start">
      <div className="w-full max-w-6xl mx-auto px-3 sm:px-4 md:px-6 flex flex-col justify-center">

        {/* ✅ RESPONSIVE HERO */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h1
            className="text-xl xs:text-2xl sm:text-3xl md:text-4xl 
                       font-bold mb-2 sm:mb-3 md:mb-4 leading-tight"
          >
            Nearshore & Offshore Services
          </h1>

          <p
            className="text-xs xs:text-sm sm:text-base md:text-lg 
                       text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Flexible global delivery models designed to accelerate execution,
            optimize cost, and scale talent seamlessly across regions.
          </p>
        </div>

        {/* ✅ RICH CONTENT CARD */}
        <div
          className="bg-white rounded-xl sm:rounded-2xl 
                     shadow p-4 sm:p-6 md:p-8 
                     space-y-4 sm:space-y-6 
                     w-full"
        >
          {/* Intro paragraph */}
          <p className="text-xs xs:text-sm sm:text-base text-gray-700 leading-relaxed">
            Our nearshore and offshore delivery models allow organizations to
            rapidly expand development capacity, access specialized global
            talent, and maintain continuous delivery cycles — without
            compromising quality, security, or governance.
          </p>

          {/* ✅ TWO-COLUMN LAYOUT ON DESKTOP */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

            {/* LEFT COLUMN */}
            <div className="space-y-3">
              <h2 className="text-sm sm:text-lg font-semibold text-gray-900">
                Our Delivery Models
              </h2>

              <ul className="space-y-2 sm:space-y-3">
                {[
                  "Dedicated offshore development teams",
                  "Nearshore delivery centers for regional alignment",
                  "Hybrid onsite–offshore collaboration models",
                  "24/7 global development and support cycles",
                  "Contract-based or long-term managed teams",
                  "Rapid team ramp-up & downsizing flexibility",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 sm:gap-3 
                               text-xs xs:text-sm sm:text-base 
                               text-gray-700"
                  >
                    <span className="text-green-600 shrink-0 leading-none mt-0.5">
                      ✔
                    </span>
                    <span className="leading-snug wrap-break-words">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-3">
              <h2 className="text-sm sm:text-lg font-semibold text-gray-900">
                Key Business Benefits
              </h2>

              <ul className="space-y-2 sm:space-y-3">
                {[
                  "Significant cost optimization without quality trade-offs",
                  "Access to certified, industry-ready global talent",
                  "Faster project turnaround and time-to-market",
                  "Operational scalability during demand spikes",
                  "Reduced hiring and infrastructure overhead",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 sm:gap-3 
                               text-xs xs:text-sm sm:text-base 
                               text-gray-700"
                  >
                    <span className="text-green-600 shrink-0 leading-none mt-0.5">
                      ✔
                    </span>
                    <span className="leading-snug wrap-break-word">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Closing paragraph */}
          <p className="text-xs xs:text-sm sm:text-base text-gray-700 leading-relaxed">
            Whether you need short-term delivery acceleration or a long-term
            global delivery partner, our nearshore and offshore engagement
            models ensure predictable outcomes, transparent governance, and
            continuous value realization for your business.
          </p>
        </div>

      </div>
    </section>
  );
}
