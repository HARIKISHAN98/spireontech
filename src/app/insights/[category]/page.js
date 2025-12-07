import Link from "next/link";
import { INSIGHTS_DATA } from "./data";

export default async function InsightCategoryPage({ params }) {
  const { category } = await params;
  const data = INSIGHTS_DATA[category];

  if (!data) {
    return <div className="py-24 text-center text-2xl">Category Not Found</div>;
  }

  return (
    <section className="bg-[#F8FAFC]">

      {/* HERO */}
      <div className="bg-linear-to-r from-[#667FEA] to-[#6C63FF] py-20 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.title}</h1>
        <p className="text-base md:text-lg max-w-2xl mx-auto opacity-90">
          {data.subtitle}
        </p>
      </div>

      {/* CARDS */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {data.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border rounded-2xl p-6 shadow hover:shadow-xl transition flex flex-col"
            >
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm flex-1">
                {item.description}
              </p>

              <Link
                href={`/insights/${category}/${item.slug}`}
                className="mt-4 text-blue-700 font-medium text-sm hover:underline"
              >
                Read More →
              </Link>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
