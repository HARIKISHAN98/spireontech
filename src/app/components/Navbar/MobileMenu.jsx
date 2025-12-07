"use client";
import Link from "next/link";
import { useState } from "react";
import { menuData } from "./MegaMenu";

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");


export default function MobileMenu({ isOpen, onClose }) {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (item) => {
    setExpandedItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const menuItems = ["Services", "Solutions", "Work", "Insights", "About"];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-80 max-w-full bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full">

          {/* HEADER */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <span className="text-xl font-serif font-bold text-blue-800">
              Spireon Tech
            </span>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* MENU */}
          <nav className="flex-1 overflow-y-auto py-4">
            {menuItems.map((item) => {
              const hasSubmenu = menuData[item]?.data;
              const isLinkOnly = menuData[item]?.type === "link";
              const isExpanded = expandedItems[item];

              /* ---------------- NO SUBMENU (Work) ---------------- */
              if (isLinkOnly) {
                return (
                  <Link
                    key={item}
                    onClick={onClose}
                    href={menuData[item].route}
                    className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-700 transition-colors"
                  >
                    {item}
                  </Link>
                );
              }

              if (!hasSubmenu) {
                return (
                  <Link
                    key={item}
                    onClick={onClose}
                    href={`/${item.toLowerCase()}`}
                    className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-700 transition-colors"
                  >
                    {item}
                  </Link>
                );
              }

              /* ---------------- WITH SUBMENU ---------------- */
              return (
                <div key={item}>
                  <button
                    onClick={() => toggleItem(item)}
                    className="flex items-center justify-between w-full px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-700 transition-colors"
                  >
                    <span>{item}</span>

                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* SUBMENU DROPDOWN */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-[2000px]" : "max-h-0"
                      }`}
                  >
                    <div className="bg-gray-50 py-2">
                      {menuData[item].data.map((section, sectionIndex) => {
                        const baseRoute =
                          item === "Solutions" ? "solutions" :
                            item === "Services" ? "services" :
                              item === "Insights" ? "insights" :
                                item === "About" ? "about" : "";

                        const sectionSlug = section.title ? slugify(section.title) : "";

                        return (
                          <div key={sectionIndex} className="py-2">

                            {/* ✅ SECTION TITLE — ROUTE SYNCED */}
                            {section.title && (
                              section.title === "FEATURED ARTICLE" ||
                                section.title === "FEATURED NEWS" ? (
                                <p className="px-8 py-2 text-xs font-bold text-blue-900 uppercase tracking-wider">
                                  {section.title}
                                </p>
                              ) : (
                                <Link
                                  href={`/${baseRoute}/${sectionSlug}`}
                                  onClick={onClose}
                                  className="block px-8 py-2 text-xs font-bold text-blue-900 uppercase tracking-wider hover:underline"
                                >
                                  {section.title}
                                </Link>
                              )
                            )}

                            {/* ✅ SUB ITEMS — ALL ROUTES 404-PROOF */}
                            {section.items
                              .filter(
                                (sub) =>
                                  !sub.startsWith("Make Copilot part of your business")
                              )
                              .map((subItem, subIndex) => {
                                const subSlug = slugify(subItem);

                                const finalRoute =
                                  item === "About"
                                    ? subItem === "Who we are"
                                      ? "/about"
                                      : subItem === "Nearshore & Offshore Services"
                                        ? "/about/nearshore-offshore"
                                        : subItem === "Partnerships"
                                          ? "/about/partnerships"
                                          : subItem === "Master Copilot Series"
                                            ? "/blog/master-copilot-series"
                                            : `/about/${subSlug}`

                                    : item === "Insights"
                                      ? "/blog"

                                      : `/${baseRoute}/${sectionSlug}/${subSlug}`;

                                return (
                                  <Link
                                    key={subIndex}
                                    onClick={onClose}
                                    href={finalRoute}
                                    className="block px-10 py-2 text-sm text-gray-600 hover:text-blue-700 hover:bg-gray-100 transition-colors"
                                  >
                                    {subItem}
                                  </Link>
                                );
                              })}
                          </div>
                        );
                      })}
                    </div>


                  </div>
                </div>
              );
            })}
          </nav>

          {/* FOOTER BUTTON */}
          <div className="p-4 border-t border-gray-200">
            <Link
              href="/contact"
              onClick={onClose}
              className="block w-full py-3 px-6 text-center text-white bg-blue-900 hover:bg-blue-800 rounded-lg font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
