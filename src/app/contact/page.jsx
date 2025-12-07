import React from "react";
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <div>
      {/* -------- CONTACT HERO / BANNER -------- */}
      <section
        className="w-full min-h-[28vh] sm:min-h-[32vh] md:min-h-[38vh]
                   flex items-center justify-center text-center
                   bg-linear-to-br from-[#667FEA] to-[#764ba2]
                   px-4"
      >
        <div className="w-full max-w-3xl space-y-3 sm:space-y-4">
          
          <h1
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl
                       font-serif font-bold text-white leading-tight"
          >
            Contact Us
          </h1>

          <p
            className="text-sm sm:text-base md:text-lg
                       text-white/90 leading-relaxed"
          >
            Ready to start your digital transformation journey? Let’s discuss
            how we can help your business grow.
          </p>

        </div>
      </section>

      {/* -------- MAIN CONTACT SECTION -------- */}
      <Contact />
    </div>
  );
}
