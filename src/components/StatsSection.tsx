"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";

const StatsSection: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 1500, easing: "ease" });
  }, []);
  return (
    <>
      <section className="bg-[#f9f9f9] py-24 flex flex-wrap w-[100%] px-5 lg:px-0">
        {/* HEADING SECTION */}
        <div className="text-center w-[100%]">
          <span className="block text-2xl font-extrabold opacity-40 mb-1">
            02
          </span>
          <h4 className="block text-2xl mb-1">
            <span className="text-[#9f8054]">Homepark</span> Property
          </h4>
          <h3 className="font-semibold text-2xl">
            Decorated Flats in Pozniaky - Kiev
          </h3>
        </div>
        {/* ICONS SECTION */}
        <div className="mt-4 flex justify-center items-center flex-wrap gap-4 sm:gap-10 max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          {/* 1 */}
          <div
            data-aos="fade-right"
            className="box w-32 sm:w-40 mx-auto text-center relative group flex flex-col items-center justify-center"
          >
            <div className="absolute mb-20 bg-[#EBCFA7] rounded-full opacity-60 size-16 group-hover:block hidden "></div>
            <Image
              width={65}
              height={65}
              alt="Icon"
              className="w-14 h-14 sm:w-20 sm:h-20"
              src={"https://themezinho.net/hompark/images/icon-benefits01.png"}
            />

            <h6 className="font-semibold sm:text-lg text-sm mt-2">
              Near To Subway
            </h6>
            <div className="flex items-end gap-1 mt-2">
              <span className="font-semibold sm:font-extrabold  text-[50px] leading-none">
                <CountUp enableScrollSpy={true} duration={2} end={28} />
              </span>{" "}
              <h6 className="font-semibold">min</h6>
            </div>
          </div>
          {/* 2 */}
          <div
            data-aos="fade-up"
            className="box w-32 sm:w-40 mx-auto text-center relative group flex flex-col items-center justify-center mt-0 lg:mt-28"
          >
            <div className="absolute mb-20 bg-[#EBCFA7] rounded-full opacity-60 size-16 group-hover:block hidden "></div>
            <Image
              width={65}
              height={65}
              alt="Icon"
              className="w-14 h-14 sm:w-20 sm:h-20"
              src={"https://themezinho.net/hompark/images/icon-benefits02.png"}
            />
            <h6 className="font-semibold sm:text-lg text-sm mt-2 ">
              Near To Subway
            </h6>
            <div className="flex items-end gap-1 mt-2">
              <span className="font-semibold sm:font-extrabold text-[50px] leading-none">
                <CountUp enableScrollSpy={true} duration={2} end={32} />
              </span>{" "}
              <h6 className="font-semibold">+</h6>
            </div>
          </div>
          {/* 3 */}
          <div
            data-aos="fade-up"
            className="box w-32 sm:w-40 mx-auto text-center relative group flex flex-col items-center justify-center"
          >
            <div className="absolute mb-20 bg-[#EBCFA7] rounded-full opacity-60 size-16 group-hover:block hidden "></div>
            <Image
              width={65}
              height={65}
              alt="Icon"
              className="w-14 h-14 sm:w-20 sm:h-20"
              src={"	https://themezinho.net/hompark/images/icon-benefits03.png"}
            />
            <h6 className="font-semibold sm:text-lg text-sm mt-2">
              Spaces in Pozniaky
            </h6>
            <div className="flex items-end gap-1 mt-2">
              <span className="sm:font-extrabold font-semibold text-[50px] leading-none">
                <CountUp enableScrollSpy={true} duration={2} end={13} />
              </span>{" "}
              <h6 className="font-semibold">%</h6>
            </div>
          </div>
          {/* 4 */}
          <div
            data-aos="fade-up"
            className="box w-32 sm:w-40 mx-auto text-center relative group flex flex-col items-center justify-center mt-0 lg:mt-28"
          >
            <div className="absolute mb-20 bg-[#EBCFA7] rounded-full opacity-60 size-16 group-hover:block hidden "></div>
            <Image
              width={65}
              height={65}
              alt="Icon"
              className="w-14 h-14 sm:w-20 sm:h-20"
              src={"https://themezinho.net/hompark/images/icon-benefits04.png"}
            />
            <h6 className="font-semibold sm:text-lg text-sm mt-2">
              Spaces in Pozniaky
            </h6>
            <div className="flex items-end gap-1 mt-2">
              <span className="sm:font-extrabold font-semibold text-[50px] leading-none">
                {" "}
                <CountUp enableScrollSpy={true} duration={2} end={3} />
              </span>{" "}
              <h6 className="font-semibold">years</h6>
            </div>
          </div>
          {/* 5 */}
          <div
            data-aos="fade-left"
            className="box w-32 sm:w-40 mx-auto text-center relative group flex flex-col items-center justify-center"
          >
            <div className="absolute mb-20 bg-[#EBCFA7] rounded-full opacity-60 size-16 group-hover:block hidden "></div>
            <Image
              width={65}
              height={65}
              alt="Icon"
              className="w-14 h-14 sm:w-20 sm:h-20"
              src={"https://themezinho.net/hompark/images/icon-benefits05.png"}
            />
            <h6 className="font-semibold sm:text-lg text-sm mt-2">
              Spaces in Pozniaky
            </h6>
            <div className="flex items-end gap-1 mt-2">
              <span className="sm:font-extrabold font-semibold text-[50px] leading-none">
                <CountUp enableScrollSpy={true} duration={2} end={79} />
              </span>{" "}
              <h6 className="font-semibold">m</h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StatsSection;
