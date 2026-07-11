"use client";

import { useState, useRef, useEffect } from "react";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef(null);
  const navRef = useRef(null);

  const menuItems = [
    { name: "Services", hasDropdown: true },
    { name: "SharePoint StorageIQ", href: "/solutions/microsoft/storageiq" },
    { name: "Solutions", hasDropdown: true },
    { name: "Work", hasDropdown: false },
    { name: "Insights", hasDropdown: true },
    { name: "About", hasDropdown: true },
  ];

  const handleMouseEnter = (itemName) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(itemName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const handleMegaMenuMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleMegaMenuMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <nav ref={navRef} className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-3">

            <div className="shrink-0">
              <Link
                href="/"
                className="flex items-center gap-2 text-xl sm:text-2xl font-serif font-bold text-blue-800"
              >
                <Image
                  src="/logo.png"
                  alt="Spireon Tech Logo"
                  width={160}
                  height={40}
                  className="h-9 w-auto sm:h-10"
                />


                <span>Spireon Tech</span>
              </Link>

            </div>

            <div className="hidden xl:flex items-center space-x-5">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() =>
                    item.hasDropdown && handleMouseEnter(item.name)
                  }
                  onMouseLeave={handleMouseLeave}
                >
                  {item.href || item.name === "Work" ? (
                    <Link
                      href={item.href || "/work"}
                      className={`flex items-center gap-1 py-2 text-base font-medium transition-colors relative group ${activeMenu === item.name
                          ? "text-blue-700"
                          : "text-gray-700 hover:text-blue-700"
                        }`}
                    >
                      {item.name === "SharePoint StorageIQ" && (
                        <span className="featured-new-badge featured-new-badge-nav">New</span>
                      )}
                      {item.name}
                      <span
                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-700 transform origin-left transition-transform duration-200 group-hover:scale-x-100 scale-x-0`}
                      />
                    </Link>
                  ) : (
                    <p
                      className={`inline-flex items-center gap-1 py-2 text-base font-medium transition-colors relative group ${activeMenu === item.name
                          ? "text-blue-700"
                          : "text-gray-700 hover:text-blue-700"
                        }`}
                    >
                      {item.name}
                      {item.hasDropdown && (
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${activeMenu === item.name ? "rotate-180" : ""
                            }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}

                      <span
                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-700 transform origin-left transition-transform duration-200 ${activeMenu === item.name
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                          }`}
                      />
                    </p>
                  )}
                </div>
              ))}

            </div>

            <div className="hidden xl:block">
              <Link
                href="/contact"
                className="ml-2 inline-flex items-center px-5 py-2 text-sm font-medium text-white bg-blue-900 hover:bg-blue-800 rounded-md transition-colors">
                Contact us
              </Link>
            </div>

            <button
              className="xl:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {activeMenu !== "Work" && (
          <MegaMenu
            activeMenu={activeMenu}
            onMouseEnter={handleMegaMenuMouseEnter}
            onMouseLeave={handleMegaMenuMouseLeave}
          />
        )}
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}
