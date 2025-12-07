"use client";

import TestimonialCard from "./TestimonialCard";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Spireon Tech transformed our digital presence completely. Their expertise and attention to detail exceeded our expectations. Highly recommended!",
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
    },
    {
      quote:
        "The team at Spireontech delivered an exceptional mobile app that has significantly improved our customer engagement. Professional and reliable.",
      name: "Michael Chen",
      role: "CTO, RetailPlus",
    },
    {
      quote:
        "Outstanding cloud migration service. Spireon Tech made the complex process seamless and our systems are now more efficient than ever.",
      name: "Emily Rodriguez",
      role: "IT Director, FinanceCorp",
    },
  ];

  return (
    <section className="w-full bg-[#F7F9FC] py-14 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

        {/* ✅ Title – mobile spacing & font balance fixed */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl font-bold text-[#0f2b45]">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 mt-2 sm:mt-3 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Don't just take our word for it — hear from our satisfied clients
          </p>
        </div>

        {/* ✅ Grid – vertical balance & gap optimized for mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {testimonials.map((t, idx) => (
            <TestimonialCard
              key={idx}
              quote={t.quote}
              name={t.name}
              role={t.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
