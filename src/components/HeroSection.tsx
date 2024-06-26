"use client";
import Image from "next/image";
import "./Components.css";
import Link from "next/link";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section
        className={`heroSection_banner overflow-visible px-4 md:px-20 xl:px-0 bg-[#35170C]`}
      >
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto ">
          <div className="flex justify-start items-center min-h-screen">
            {/* CONTENT */}
            <div className="left_side flex justify-start items-center">
              <div className="content px-0 sm:px-20 lg:px-0 mt-36 lg:mt-0">
                <h2 className="mb-6 text-6xl text-[#EBCFA7] font-bold pr-5">
                  Homepark Elite Residences
                </h2>
                <p className="mb-6 tracking-wide max-w-md sm:max-w-xl xl:max-w-md text-white text-3xl font-semibold">
                  We build your dream house
                </p>

                <Link
                  href="tel:+92 332 2222929"
                  className="bg_main_button bangers text-lg tracking-widest uppercase text-white px-8 py-3"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
