import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const page = () => {
  return (
    <>
      <section className="projectsSectionbg relative">
        <div className="px-5 md:px-7 xl:px-0 max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          <div className="pt-24 lg:pt-10 grid place grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 min-h-[60vh]">
            {/* LEFT SIDE */}
            <div className="flex items-end lg:items-center justify-center lg:justify-start">
              <div className="content text-center lg:text-start">
                <span className="letterSpacing py-1 px-1.5 font-medium text-white bg-[#F0A202] text-[11px] lg:text-[13px]">
                  PROJECTS
                </span>

                <h2 className="Noto mt-4 mb-6 text-4xl md:text-5xl font-medium text-white tracking-normal">
                  Projects
                </h2>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="-mt-10 lg:mt-0 flex items-start lg:items-center justify-center lg:justify-end">
              <h2 className="mt-6 flex items-center gap-2 text-left font-normal text-white text-md md:text-lg">
                <Link
                  href="/"
                  className="flex items-center gap-1 hover:underline hover:underline-offset-4"
                >
                  <FaHome />
                  Home
                </Link>{" "}
                <IoIosArrowForward />
                Projects
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="project-1 w-full">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto flex px-0 py-10 lg:pt-20 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              alt="hero"
              className="object-cover object-center rounded"
              src="https://dummyimage.com/720x600"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex px-5 flex-col md:items-start md:text-left items-center text-center">
            <div className="col-lg-6 wow fadeInUp">
              <div className="content-box">
                <div className="text-start w-[100%]">
                  <span className="block text-3xl font-extrabold opacity-20 mb-2">
                    01
                  </span>
                  <h4 className="playfair backdrop:block text-4xl mb-4">
                    <span className="playfair text-[#9f8054]">Pozniaky </span>
                    Construction LLC
                  </h4>
                  <p className="font-semibold text-2xl text-[#252525] mb-5">
                    Living spaces for creative peoples
                  </p>

                  <p className="font-normal text-md max-w-xs text-[#252525] mb-7">
                    The smaller male cones release pollen, which fertilizes the
                    female
                  </p>

                  <button className="text-black font-semibold hover:text-[#A57F4D]">
                    See our projects
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="project-2 w-full">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto flex px-0 py-10 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex px-5 flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div className="text-start w-[100%]">
              <span className="block text-3xl font-extrabold opacity-20 mb-2">
                01
              </span>
              <h4 className="playfair backdrop:block text-4xl mb-4">
                <span className="playfair text-[#9f8054]">Pozniaky </span>
                Construction LLC
              </h4>
              <p className="font-semibold text-2xl text-[#252525] mb-5">
                Living spaces for creative peoples
              </p>

              <p className="font-normal text-md max-w-xs text-[#252525] mb-7">
                The smaller male cones release pollen, which fertilizes the
                female
              </p>

              <button className="text-black font-semibold hover:text-[#A57F4D]">
                See our projects
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              alt="hero"
              className="object-cover object-center rounded"
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
      </section>

      <section className="project-3 w-full">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto flex px-0 py-10 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              alt="hero"
              className="object-cover object-center rounded"
              src="https://dummyimage.com/720x600"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex px-5 flex-col md:items-start md:text-left items-center text-center">
            <div className="col-lg-6 wow fadeInUp">
              <div className="content-box">
                <div className="text-start w-[100%]">
                  <span className="block text-3xl font-extrabold opacity-20 mb-2">
                    01
                  </span>
                  <h4 className="playfair backdrop:block text-4xl mb-4">
                    <span className="playfair text-[#9f8054]">Pozniaky </span>
                    Construction LLC
                  </h4>
                  <p className="font-semibold text-2xl text-[#252525] mb-5">
                    Living spaces for creative peoples
                  </p>

                  <p className="font-normal text-md max-w-xs text-[#252525] mb-7">
                    The smaller male cones release pollen, which fertilizes the
                    female
                  </p>

                  <button className="text-black font-semibold hover:text-[#A57F4D]">
                    See our projects
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="project-4 w-full">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto flex px-0 py-10 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex px-5 flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div className="text-start w-[100%]">
              <span className="block text-3xl font-extrabold opacity-20 mb-2">
                01
              </span>
              <h4 className="playfair backdrop:block text-4xl mb-4">
                <span className="playfair text-[#9f8054]">Pozniaky </span>
                Construction LLC
              </h4>
              <p className="font-semibold text-2xl text-[#252525] mb-5">
                Living spaces for creative peoples
              </p>

              <p className="font-normal text-md max-w-xs text-[#252525] mb-7">
                The smaller male cones release pollen, which fertilizes the
                female
              </p>

              <button className="text-black font-semibold hover:text-[#A57F4D]">
                See our projects
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              alt="hero"
              className="object-cover object-center rounded"
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
      </section>

      <section className="project-5 w-full">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto flex px-0 py-10 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              alt="hero"
              className="object-cover object-center rounded"
              src="https://dummyimage.com/720x600"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex px-5 flex-col md:items-start md:text-left items-center text-center">
            <div className="col-lg-6 wow fadeInUp">
              <div className="content-box">
                <div className="text-start w-[100%]">
                  <span className="block text-3xl font-extrabold opacity-20 mb-2">
                    01
                  </span>
                  <h4 className="playfair backdrop:block text-4xl mb-4">
                    <span className="playfair text-[#9f8054]">Pozniaky </span>
                    Construction LLC
                  </h4>
                  <p className="font-semibold text-2xl text-[#252525] mb-5">
                    Living spaces for creative peoples
                  </p>

                  <p className="font-normal text-md max-w-xs text-[#252525] mb-7">
                    The smaller male cones release pollen, which fertilizes the
                    female
                  </p>

                  <button className="text-black font-semibold hover:text-[#A57F4D]">
                    See our projects
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
