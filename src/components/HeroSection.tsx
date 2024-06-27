"use client";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";
import "./Components.css";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import { useEffect, useRef, useState } from "react";

const data = [
  {
    id: 1,
    image:
      "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/slide03.jpg?v=1719430931",
    alt: "image",
  },
  {
    id: 2,
    image:
      "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/slide02.jpg?v=1719428238",
    alt: "image",
  },
];

const HeroSection = () => {
  const [slidesToShow, setSlidesToShow] = useState(1);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: false,
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setSlidesToShow(1); // Full Desktop view
      } else if (window.innerWidth >= 1024) {
        setSlidesToShow(1); // Desktop view
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(1); // Tablet view
      } else {
        setSlidesToShow(1); // Mobile view
      }
    };

    // Initial update
    handleResize();

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section>
        <Slider ref={sliderRef} {...settings}>
          {data.map((data) => (
            <div key={data?.id}>
              <div className="relative w-full min-h-screen focus:outline-none">
                <Image
                  fill
                  className="absolute"
                  src={data?.image}
                  alt={data?.alt}
                />
                <div className="absolute pl-[10rem]">
                  <div className="flex justify-start items-center min-h-screen">
                    <div className="content px-0 sm:px-20 lg:px-0 mt-36 lg:mt-0">
                      <h2 className="mb-8 text-7xl text-[#EBCFA7] font-medium pr-5">
                        Homepark Elite Residences
                      </h2>
                      <p className="mb-10 tracking-wide max-w-md sm:max-w-xl xl:max-w-md text-white text-3xl font-semibold">
                        We build your dream house
                      </p>

                      <Link
                        href="#"
                        className="card w-[18rem] px-8 py-4 text-md flex justify-center items-center tracking-widest border border-[#EBCFA7] text-white hover:bg-[#A57F4D] hover:border-[#A57F4D]"
                      >
                        GET A CONSULTATION <IoMdArrowDropright />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};

export default HeroSection;
