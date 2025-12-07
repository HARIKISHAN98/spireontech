"use client";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // slow → fast natural easing
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-999
        w-12 h-12 rounded-full
        bg-blue-600 text-white
        flex items-center justify-center
        shadow-lg shadow-blue-500/40
        transition-all duration-300
        hover:scale-110 hover:bg-blue-500
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}
      `}
      aria-label="Scroll to top"
    >
      <i className="fa-solid fa-arrow-up text-lg"></i>
    </button>
  );
}
