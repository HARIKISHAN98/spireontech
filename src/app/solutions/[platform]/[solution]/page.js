import Link from "next/link";
import { SOLUTION_DETAIL_DATA } from "./data";

export default async function SolutionDetailPage({ params }) {
  const { solution } = await params;
  const data = SOLUTION_DETAIL_DATA[solution];

  if (!data) {
    return <div className="py-24 text-center text-xl">Solution Not Found</div>;
  }

  return (
    <section className="bg-[#F8FAFC] min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16">
     <div className="w-full max-w-6xl mx-auto px-3 sm:px-4">
        {/* ✅ HEADER */}
        <div className="mb-8 sm:mb-10 text-center">
          <div className="text-4xl sm:text-5xl mb-3">{data.icon}</div>

          <h1 className="text-xl sm:text-3xl font-bold mb-3 leading-tight">
            {data.title}
          </h1>

          <p className="text-sm sm:text-base text-gray-700 max-w-3xl mx-auto">
            {data.description}
          </p>
        </div>

        {/* ✅ MAIN CARD */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 bg-white rounded-2xl shadow p-4 sm:p-6 w-full">

          {/* ✅ LEFT SECTION */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3">
              What We Deliver
            </h3>

            <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
              {data.bullets.map((item, idx) => (
                <li key={idx} className="flex gap-2 items-start">
                  <span className="text-green-600 shrink-0">✔</span>
                  <span className="wrap-break-word leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ✅ RIGHT CTA SECTION */}
          <div className="bg-[#EEF2FF] rounded-xl p-4 sm:p-6 flex flex-col justify-between">
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3">
                Why Choose This Solution?
              </h4>

              <p className="text-gray-700 text-sm sm:text-base mb-5">
                We deliver enterprise-grade platforms with faster implementation
                and long-term scalability.
              </p>
            </div>

            {/* ✅ BUTTON FIXED FOR SMALL SCREENS */}
            <Link href="/contact" className="w-fit sm:w-fit lg:self-start lg:px-7 bg-[#063B6F] text-white text-sm sm:text-base px-5 py-2.5 rounded-lg hover:bg-[#052f5a] transition">
              Get Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
