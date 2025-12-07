"use client";

import { useState, useEffect, useRef } from "react";

export default function StatsSection() {
  const stats = [
    { number: 50, label: "Projects Completed" },
    { number: 25, label: "Happy Clients" },
    { number: 5, label: "Years Experience" },
    { number: 99, label: "Client Satisfaction" },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);

  /* 🔥 Detect when section enters viewport */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [isVisible]);

  /* 🔥 Animate number count once */
  useEffect(() => {
    if (!isVisible) return;

    const startTime = performance.now();
    const duration = 1200;

    function animate() {
      const now = performance.now();
      const progress = Math.min((now - startTime) / duration, 1);

      setCounts(stats.map((stat) => Math.floor(progress * stat.number)));

      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-linear-to-r from-[#667FEA] via-[#6b53c9] to-[#7b4db6] text-white font-sans"
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12"
        style={{ minHeight: "40vh" }}
      >
        <div className="h-full flex flex-col justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 py-8 sm:py-10 md:py-14 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-1 sm:gap-2">
                
                {/* ✅ Number — Mobile Scaled */}
                <div
                  className="text-3xl sm:text-6xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
                  style={{ textShadow: "0px 4px 20px rgba(0,0,0,0.12)" }}
                >
                  {counts[i]}{stat.label === "Client Satisfaction" ? "%" : "+"}
                </div>

                {/* ✅ Label — Mobile Spacing Fixed */}
                <p className="text-xs sm:text-base md:text-lg text-white/90 leading-snug">
                  {stat.label}
                </p>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
