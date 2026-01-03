import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1f2937] pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">

        {/* -------- LEFT COLUMN -------- */}
        <div className="space-y-5">
          <div>
            <img
              className="w-14 h-14"
              src="logo.png"
              alt="Spireon Tech Logo"
            />
            <h2 className="text-[#4A5EDB] font-serif font-bold text-2xl mt-2">
              Spireon Tech
            </h2>
          </div>

          <p className="text-gray-300 leading-relaxed">
            Your trusted partner for digital innovation and technology solutions.
          </p>

          {/* Social Icons */}
          <ul className="flex gap-3">
            {[
              { icon: "fab fa-facebook", link: "#" },
              { icon: "fab fa-twitter", link: "#" },
              { icon: "fab fa-linkedin", link: "https://www.linkedin.com/company/spireon-tech/" },
              { icon: "fab fa-github", link: "#" },
            ].map((item, i) => (
              <li
                key={i}
                className="w-10 h-10 flex items-center justify-center rounded-full 
                           bg-[#374151] text-white text-lg 
                           hover:bg-linear-to-br hover:from-[#667FEA] hover:to-[#4A5EDB] 
                           hover:scale-110 transition-all cursor-pointer"
              >
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full flex items-center justify-center">
                  <i className={item.icon}></i>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* -------- SERVICES COLUMN -------- */}
        <div className="space-y-5">
          <h3 className="text-xl font-semibold text-white font-serif">Services</h3>
          <ul className="text-gray-300 space-y-2">
            <li className="hover:text-white transition cursor-pointer"><Link href="/services">Web Development</Link></li>
            <li className="hover:text-white transition cursor-pointer"><Link href="/services">Mobile Apps</Link></li>
            <li className="hover:text-white transition cursor-pointer"><Link href="/services">Cloud Solutions</Link></li>
            <li className="hover:text-white transition cursor-pointer"><Link href="/services">AI & Automation</Link></li>
          </ul>
        </div>

        {/* -------- COMPANY COLUMN -------- */}
        <div className="space-y-5">
          <h3 className="text-xl font-semibold text-white font-serif">Company</h3>
          <ul className="text-gray-300 space-y-2">
            <li className="hover:text-white transition cursor-pointer"><Link href="/about">About Us</Link></li>
            <li className="hover:text-white transition cursor-pointer"><Link href="/contact"> Contact</Link></li>
            <li className="hover:text-white transition cursor-pointer"><Link href="/blog">Blog</Link></li>
            <li className="hover:text-white transition cursor-pointer"><Link href="/carrer">Careers</Link></li>
          </ul>
        </div>

        {/* -------- NEWSLETTER COLUMN -------- */}
        <div className="space-y-5">
          <h3 className="text-xl font-semibold text-white font-serif">Newsletter</h3>
          <p className="text-gray-300 leading-relaxed">
            Subscribe to our newsletter for the latest tech insights.
          </p>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-16 border-t border-gray-700 pt-6 text-center">
        <p className="text-gray-400">
          © {2026} Spireon Tech. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
