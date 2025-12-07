import WorkCard from "./WorkCard";
import { WORK_DATA } from "./data/WorkData";

export default function WorkPage() {
  return (
    <section className="bg-[#F8FAFC] min-h-screen">

      {/* ✅ HERO WITH BETTER MOBILE HEIGHT */}
      <div className="w-full bg-linear-to-r from-[#6b7cff] to-[#7a4bb7] 
                      pt-20 sm:pt-28 
                      pb-12 sm:pb-20 
                      flex items-center justify-center px-4">
        <h1 className="text-white 
                       text-2xl xs:text-3xl sm:text-4xl md:text-5xl 
                       font-bold tracking-widest text-center leading-tight">
          OUR WORK
        </h1>
      </div>

      {/* ✅ MAIN CONTENT WITH MOBILE BALANCE */}
      <div className="max-w-7xl mx-auto 
                      px-3 sm:px-6 lg:px-8 
                      py-10 sm:py-16 md:py-20">

        {/* ✅ SECTION TITLE — MOBILE FRIENDLY */}
        <h2 className="text-center 
                       text-lg xs:text-xl sm:text-3xl md:text-4xl 
                       font-semibold text-gray-900 
                       mb-8 sm:mb-12 
                       font-serif leading-snug">
          Digital Solutions for our Partners
        </h2>

        {/* ✅ GRID — BETTER SMALL SCREEN SPACING */}
        <div className="grid 
                        grid-cols-1 
                        sm:grid-cols-2 
                        lg:grid-cols-3 
                        gap-4 sm:gap-8">

          {WORK_DATA.map((item, index) => (
            <WorkCard
              key={index}
              image={item.image}
              title={item.title}
            />
          ))}

        </div>
      </div>
    </section>
  );
}
