import { INSIGHTS_DETAIL_DATA } from "./data";

export default async function InsightDetailPage({ params }) {
  const { article } = await params;
  const data = INSIGHTS_DETAIL_DATA[article];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center text-sm sm:text-2xl px-4">
        Article Not Found
      </div>
    );
  }

  return (
  <section className="bg-[#F8FAFC] min-h-screen pt-20 sm:pt-24 md:pt-28 pb-12">
    <div className="w-full max-w-6xl mx-auto px-3 sm:px-4 md:px-6">

      {/* ✅ HEADER */}
      <div className="mb-10 sm:mb-14 text-center">
        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl 
                       font-bold mb-4 leading-tight wrap-break-words">
          {data.title}
        </h1>

        <p className="text-xs sm:text-base md:text-lg text-gray-700 
                      max-w-3xl mx-auto leading-relaxed wrap-break-words">
          {data.description}
        </p>
      </div>

      {/* ✅ MAIN CONTENT CARD */}
      <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* ✅ LEFT CONTENT */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Overview</h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {data.overview}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Key Focus Areas</h3>
            <ul className="space-y-2 text-sm sm:text-base text-gray-700">
              {data.content.map((item, idx) => (
                <li key={idx} className="flex gap-2 items-start">
                  <span className="text-green-600 shrink-0 mt-0.5">✔</span>
                  <span className="leading-relaxed wrap-break-words">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ✅ RIGHT BENEFITS */}
        <div className="bg-[#EEF2FF] rounded-xl p-5 sm:p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-3">Business Benefits</h3>

            <ul className="space-y-2 text-sm sm:text-base text-gray-700">
              {data.benefits.map((benefit, idx) => (
                <li key={idx} className="flex gap-2 items-start">
                  <span className="text-blue-600 shrink-0 mt-0.5">✔</span>
                  <span className="leading-relaxed wrap-break-word">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ✅ CTA */}
          <div className="mt-6 flex justify-center md:justify-start">
            <a
              href="/contact"
              className="w-fit bg-[#063B6F] text-white px-6 py-3 
                         text-sm sm:text-base rounded-lg 
                         hover:bg-[#052f5a] transition">
              Talk to Our Experts
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
}
