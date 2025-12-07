"use client";
import Link from "next/link";
const menuData = {
  Services: {
    type: "standard",
    columns: 5,
    data: [
      {
        title: "Digital",
        items: [
          "Customer Experience Consulting",
          "Marketing Operations Consulting",
          "Change Management",
          "Web Platform Development",
          "Mobile App Development",
          "Workplace Transformation",
          "Digital Adoption Platform",
        ],
      },
      {
        title: "Data",
        items: [
          "Data Architecture & Integration",
          "Strategic Data Management",
          "BI & Analytics",
          "AI & Machine Learning",
        ],
      },
      {
        title: "Technology",
        items: [
          "Application Development",
          "Technology Strategy",
          "API Consulting",
          "Emerging Technologies",
          "Software Testing",
          "Transportation Consulting",
          "Process Automation",
        ],
      },
      {
        title: "Cloud",
        items: [
          "Cloud Strategy",
          "Cloud Development",
          "Cloud Infrastructure",
          "Identity & Access Management",
          "Dynamics & Infrastructure",
        ],
      },
      {
        title: "Artificial Intelligence",
        items: [
          "AI Solutions",
          "AI & Machine Learning",
          "Master Copilot Series",
          "Copilot for Microsoft 365 Workshops",
        ],
      },
    ],
  },

  Solutions: {
    type: "standard",
    columns: 3,
    data: [
      {
        title: "SAP",
        items: [
          "Strategy and Assessment",
          "Migration and Implementation",
          "Process Optimization, Automation & Analytics",
          "Application Managed Services",
          "Switch2Rise",
          "Rise with SAP",
        ],
      },
      {
        title: "Microsoft",
        items: ["Microsoft 365", "Azure Cloud", "Microsoft Intune", "Power Platform"],
      },
      {
        title: "ARTIFICIAL INTELLIGENCE",
        items: [
          "AI & Machine Learning",
          "Master Copilot Series",
          "AI Solutions",
          "Copilot for Microsoft 365 Workshops",
        ],
      },
    ],
  },

  Work: {
    type: "link",
    route: "/work",
  },


  Insights: {
    type: "insights",
    columns: 2,
    data: [
      {
        title: "Articles",
        items: ["Featured Resources"],
      },
      {
        title: "FEATURED ARTICLE",
        items: ["Read our latest article on Copilot."],
      },
    ],
  },

  About: {
    type: "about",
    columns: 2,
    data: [
      {
        title: "",
        items: ["Who we are", "Partnerships", "Nearshore & Offshore Services"],
      },
      {
        title: "FEATURED NEWS",
        items: [
          "Master Copilot Series",
          "Make Copilot part of your business as your everyday AI companion. Stay on top of your Microsoft Copilot knowledge, and learn what it is about, how you can use it, and how it can save your business time, money, and headaches. Sign up for the next webinar, and recap on our past ones.",
        ],
      },
    ],
  },
};

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");


export default function MegaMenu({ activeMenu, onMouseEnter, onMouseLeave }) {
  if (!activeMenu || !menuData[activeMenu]) return null;

  const menu = menuData[activeMenu];

  if (!menu || menu.type === "link") {
    return null;
  }


  return (
    <div
      className="absolute left-0 right-0 top-full w-screen bg-white border-t border-gray-300 shadow-md z-50"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >

      {/* ---------------------- STANDARD MENUS (Services, Solutions) ---------------------- */}
      {menu.type === "standard" && (
        <div className="mx-auto max-w-7xl px-16 py-12">
          <div
            className="grid gap-16"
            style={{
              gridTemplateColumns: `repeat(${menu.columns}, minmax(0, 1fr))`,
            }}
          >
            {menu.data.map((column, columnIndex) => {
              const categorySlug = slugify(column.title);
              const baseRoute =
                activeMenu === "Solutions" ? "solutions" :
                  activeMenu === "Services" ? "services" : "";

              return (
                <div key={columnIndex}>

                  {/* ✅ CATEGORY ROUTE */}
                  <Link
                    href={`/${baseRoute}/${categorySlug}`}
                    onClick={onMouseLeave}
                    className="text-[16px] font-bold text-[#083A73] uppercase tracking-wide mb-5 block hover:text-[#063B6F] hover:underline"
                  >
                    {column.title}
                  </Link>

                  <ul className="space-y-3">
                    {column.items.map((item, itemIndex) => {
                      const serviceSlug = slugify(item);

                      return (
                        <li key={itemIndex}>

                          {/* ✅ SERVICE ROUTE */}
                          <Link
                            href={`/${baseRoute}/${categorySlug}/${serviceSlug}`}
                            onClick={onMouseLeave}
                            className="text-[14px] text-gray-700 leading-6 hover:text-[#063B6F] hover:underline transition-colors"
                          >
                            {item}
                          </Link>

                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ----------------------  DIRECT LINK HANDLING FOR WORK ---------------------- */}
      {menu.type === "link" && (
        <Link
          href={menu.route}
          onClick={onMouseLeave}
          className="absolute right-10 top-6 text-sm font-medium text-blue-700 hover:underline"
        >
          Go to Work →
        </Link>
      )}





      {/* ---------------------- INSIGHTS SPECIAL LAYOUT ---------------------- */}
      {menu.type === "insights" && (
        <div className="mx-auto max-w-7xl px-20 py-14 grid grid-cols-2 gap-20">

          {/* ✅ LEFT COLUMN (INSIGHTS CATEGORY + ARTICLES) */}
          <div>
            {/* CATEGORY LINK */}
            <Link
              href={`/insights/${slugify(menu.data[0].title)}`}
              onClick={onMouseLeave}
              className="text-[20px] font-extrabold text-[#083A73] uppercase mb-6 block hover:text-[#063B6F] hover:underline"
            >
              {menu.data[0].title}
            </Link>

            {/* ✅ ARTICLE LINKS */}
            {menu.data[0].items.map((item, index) => {
              const categorySlug = slugify(menu.data[0].title);
              const articleSlug = slugify(item);

              return (
                <Link
                  key={index}
                  href={`/insights/${categorySlug}/${articleSlug}`}
                  onClick={onMouseLeave}
                  className="block text-[18px] font-bold text-[#063B6F] mb-4 hover:underline"
                >
                  {item}
                </Link>
              );
            })}
          </div>

          {/* ✅ RIGHT COLUMN (FEATURED ARTICLE) */}
          <div className="border-l border-gray-300 pl-14">
            <p className="text-[20px] font-extrabold text-[#083A73] uppercase mb-5">
              {menu.data[1].title}
            </p>

            {(() => {
              const featuredCategory = slugify(menu.data[0].title);
              const featuredArticle = menu.data[1]?.items?.[0]
                ? slugify(menu.data[1].items[0])
                : "";

              return (
                <Link
                  // href={`/insights/${featuredCategory}/${featuredArticle}`}
                  href="/blog"
                  onClick={onMouseLeave}
                  className="text-[16px] leading-7 text-gray-700 max-w-xl block hover:text-[#063B6F] hover:underline"
                >
                  {menu.data[1].items[0]}
                </Link>
              );
            })()}
          </div>
        </div>
      )}


      {/* ---------------------- ABOUT SPECIAL LAYOUT ---------------------- */}
      {menu.type === "about" && (
        <div className="mx-auto max-w-7xl px-20 py-14 grid grid-cols-2 gap-20">

          {/* ✅ LEFT COLUMN */}
          <div className="space-y-4">
            <Link
              href="/about"
              onClick={onMouseLeave}
              className="block text-[18px] font-bold text-[#083A73] hover:underline"
            >
              Who we are
            </Link>

            <Link
              href="/about/partnerships"
              onClick={onMouseLeave}
              className="block text-[18px] font-bold text-[#083A73] hover:underline"
            >
              Partnerships
            </Link>

            <Link
              href="/about/nearshore-offshore"
              onClick={onMouseLeave}
              className="block text-[18px] font-bold text-[#083A73] hover:underline"
            >
              Nearshore & Offshore Services
            </Link>
          </div>

          {/* ✅ RIGHT COLUMN */}
          <div className="border-l border-gray-300 pl-14">
            <h3 className="text-[18px] font-extrabold text-[#083A73] uppercase mb-4">
              Featured News
            </h3>

            <Link
              href="/blog/master-copilot-series"
              onClick={onMouseLeave}
              className="font-bold text-[#083A73] mb-3 block hover:text-[#063B6F] hover:underline"
            >
              Master Copilot Series
            </Link>

            <p className="text-[16px] leading-7 text-gray-700 max-w-2xl">
              Make Copilot part of your business as your everyday AI companion.
              Stay on top of your Microsoft Copilot knowledge, learn how it works,
              and how it saves time, money, and effort.
            </p>
          </div>

        </div>
      )}
    </div>
  );
}

export { menuData };
