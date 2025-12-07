"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function Hero() {
    useEffect(() => {
        return () => { };
    }, []);

    const icons = [
        "fa-solid fa-cloud",
        "fa-solid fa-mobile-screen-button",
        "fa-solid fa-database",
        "fa-solid fa-robot",
    ];

    return (
        <section className="relative min-h-[70vh] sm:min-h-[80vh] bg-linear-to-br from-[#667FEA] to-[#4A5EDB] overflow-hidden">

            {/* Background glow bubbles */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-24 -right-24 sm:-top-32 sm:-right-32 w-52 h-52 sm:w-60 sm:h-60 bg-white/10 rounded-full blur-3xl animate-slow-float" />
                <div className="absolute -bottom-24 -left-24 sm:-bottom-32 sm:-left-32 w-52 h-52 sm:w-60 sm:h-60 bg-white/10 rounded-full blur-3xl animate-slow-float-rev" />
            </div>

            <div className="relative z-10 flex items-center min-h-[70vh] sm:min-h-[80vh]">
                <div className="w-full max-w-6xl mx-auto px-4 py-8 sm:py-10">

                    <div className="flex flex-col md:flex-row items-center justify-between gap-10 sm:gap-12 md:gap-15">

                        {/* TEXT */}
                        <div className="flex-1 text-center md:text-left animate-fade-in">
                            <h1 className="font-bold text-white leading-tight text-3xl sm:text-5xl md:text-5xl lg:text-6xl mb-4 sm:mb-6">
                                Spireon Tech Is Your
                                <span className="block mt-1">Digital Innovation Partner</span>
                            </h1>

                            <p className="mt-4 sm:mt-6 text-white/90 max-w-md mx-auto md:mx-0 leading-relaxed text-sm sm:text-xl">
                                We leverage cutting-edge technology and innovative solutions to transform your business and accelerate growth in the digital age.
                            </p>

                            <div className=" flex flex-col min-[350px]:flex-row justify-center md:justify-start gap-3 sm:gap-4 mt-6 animate-fade-in-up w-full sm:w-auto ">
                                <Link
                                    href="/services"
                                    className="px-6 py-3 text-white bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 hover:scale-105 transition-all shadow-md shadow-blue-600/30 text-sm sm:text-base w-auto self-center sm:self-auto" >
                                    Get Started
                                </Link>

                                <Link
                                    href="/contact"
                                    className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all shadow-md text-sm sm:text-base w-auto self-center sm:self-auto" >
                                    Learn More
                                </Link>
                            </div>


                        </div>

                        <div className="shrink-0">
                            <div className="relative flex items-center justify-center animate-float">

                                {/* Outer translucent circle */}
                                <div className="relative rounded-full flex items-center justify-center w-44 h-44 xs:w-48 xs:h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-white/12 border border-white/20 backdrop-blur-md shadow-inner">
                                    {/* Subtle glow ring */}
                                    <div className="absolute inset-6 rounded-full border border-white/10" />

                                    {/* GRID OF 4 ICONS */}
                                    <div className="relative z-10 grid grid-cols-2 gap-4 place-items-center">
                                        {icons.map((cls, i) => (
                                            <div
                                                key={i}
                                                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white/20 rounded-lg flex items-center justify-center transition-transform duration-300 hover:scale-110" >
                                                <i className={`${cls} text-white text-lg sm:text-xl md:text-2xl`} />
                                            </div>
                                        ))}
                                    </div>

                                    {/* Glass effect inner ring */}
                                    <div className="absolute inset-0 rounded-full ring-1 ring-white/10 pointer-events-none" />
                                </div>

                                {/* Floating shadow */}
                                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-36 h-2 bg-white/10 rounded-full blur-sm" />
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </section>
    );
}
