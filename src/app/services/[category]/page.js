import Link from "next/link";
import { SERVICE_DATA } from "./data";

export default async function ServiceCategoryPage({ params }) {
  const { category } = await params;
  const data = SERVICE_DATA[category];

  if (!data) {
    return (
      <div className="py-24 px-4 text-center text-lg sm:text-2xl">
        Category Not Found
      </div>
    );
  }

  return (
    <section className="bg-[#F8FAFC]">

      {/* ✅ HERO — SAME STYLE AS SOLUTIONS */}
      <div className="bg-linear-to-r from-[#667FEA] to-[#6C63FF] py-20 text-center text-white px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          {data.title}
        </h1>
        <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto opacity-90">
          {data.subtitle}
        </p>
      </div>

      {/* ✅ CARDS — SAME UI AS SOLUTIONS */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {data.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border rounded-2xl p-6 shadow hover:shadow-xl transition flex flex-col"
            >
              {/* ✅ TITLE */}
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              {/* ✅ DESCRIPTION */}
              <p className="text-gray-600 text-sm flex-1">
                {item.desc}
              </p>

              {/* ✅ VIEW DETAILS LINK */}
              <Link
                href={`/services/${category}/${item.slug}`}
                className="mt-4 text-blue-700 font-medium text-sm hover:underline"
              >
                View Details →
              </Link>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
