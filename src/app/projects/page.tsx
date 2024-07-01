import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const page = () => {
  return (
    <>
      <section className="projectsSectionbg">
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

      {/* FIRST PROJECT */}
      <section className="project-1 w-full px-2 xl:px-0">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto flex px-0 py-10 lg:pt-20 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 group overflow-hidden rounded-lg">
            <img
              alt="hero"
              className="object-cover object-center rounded-lg h-[22rem] transition duration-500 group-hover:scale-105 w-full"
              src="https://cdn.shopify.com/s/files/1/0649/1399/8024/files/m.webp?v=1719843374"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex px-5 flex-col md:items-start md:text-left items-center text-center">
            <div className="col-lg-6 wow fadeInUp">
              <div className="content-box">
                <div className="text-start w-[100%]">
                  <h4 className="playfair backdrop:block text-4xl mb-4">
                    <span className="playfair text-[#9f8054]">
                      Brands Village Gujranwala
                    </span>
                  </h4>
                  <p className="font-semibold text-xl text-[#252525] mb-5">
                    Living spaces for creative peoples
                  </p>

                  <p className="font-normal text-md max-w-lg text-[#252525] mb-4">
                    Brand Village Gujranwala is the only the IconicProject of
                    Gujranwala City with facilities like high speed elevators,
                    secure and spacious car parking space, clean environment,
                    Wi-Fi, banking services & ATMs, foreign exchange, Prayer
                    rooms, toilets, Parent&apos;s room, wheelchair access, fire
                    alarm and fighting system.
                  </p>

                  <button className="font-semibold text-[#A57F4D]">
                    See details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECOND PROJECT */}
      <section className="project-2 w-full px-2 xl:px-0">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto flex px-0 py-10 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex px-5 flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div className="text-start w-[100%]">
              <h4 className="playfair backdrop:block text-4xl mb-4">
                <span className="playfair text-[#9f8054]">
                  Brands Village Quetta
                </span>
              </h4>
              <p className="font-semibold text-xl text-[#252525] mb-5">
                Living spaces for creative peoples
              </p>

              <p className="font-normal text-md max-w-lg text-[#252525] mb-4">
                Brands Village is not specified to just a single location, there
                will be multiple brands villages launching all across Pakistan.
                Brands Village undoubtedly offers the ultimate entertainment and
                shopping destination where your senses will get excited as you
                walk through more than 50 international & local brands.
              </p>

              <button className="font-semibold text-[#A57F4D]">
                See details
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 group overflow-hidden rounded-lg">
            <img
              alt="hero"
              className="object-cover object-center rounded-lg h-[22rem] transition duration-500 group-hover:scale-105 w-full"
              src="https://cdn.shopify.com/s/files/1/0649/1399/8024/files/bvQ.webp?v=1719843373"
            />
          </div>
        </div>
      </section>

      {/* THIRD PROJECT */}
      <section className="project-3 w-full px-2 xl:px-0">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto flex px-0 py-10 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 group overflow-hidden rounded-lg">
            <img
              alt="hero"
              className="object-cover object-center rounded-lg h-[22rem] transition duration-500 group-hover:scale-105 w-full"
              src="https://cdn.shopify.com/s/files/1/0649/1399/8024/files/cloud_apartments.webp?v=1719844179"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex px-5 flex-col md:items-start md:text-left items-center text-center">
            <div className="col-lg-6 wow fadeInUp">
              <div className="content-box">
                <div className="text-start w-[100%]">
                  <h4 className="playfair backdrop:block text-4xl mb-4">
                    <span className="playfair text-[#9f8054]">
                      Clouds Casa Murree
                    </span>
                  </h4>
                  <p className="font-semibold text-xl text-[#252525] mb-5">
                    Living spaces for creative peoples
                  </p>

                  <p className="font-normal text-md max-w-lg text-[#252525] mb-4">
                    A Land Developer group operating countrywide since last 15
                    years through its subsidiary SECP registered companies of
                    Project planning, Construction, Marketing and Sales,
                    adopting best practices of Project Management and
                    Sustainable Development.
                  </p>

                  <button className="font-semibold text-[#A57F4D]">
                    See details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORTH PROJECT */}
      <section className="project-4 w-full px-2 xl:px-0">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto flex px-0 py-10 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex px-5 flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div className="text-start w-[100%]">
              <h4 className="playfair backdrop:block text-4xl mb-4">
                <span className="playfair text-[#9f8054]">
                  Brands Village Gujranwala
                </span>
              </h4>
              <p className="font-semibold text-xl text-[#252525] mb-5">
                Living spaces for creative peoples
              </p>

              <p className="font-normal text-md max-w-lg text-[#252525] mb-4">
                Brand Village Gujranwala is the only the IconicProject of
                Gujranwala City with facilities like high speed elevators,
                secure and spacious car parking space, clean environment, Wi-Fi,
                banking services & ATMs, foreign exchange, Prayer rooms,
                toilets, Parent&apos;s room, wheelchair access, fire alarm and
                fighting system.
              </p>

              <button className="font-semibold text-[#A57F4D]">
                See details
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 group overflow-hidden rounded-lg">
            <img
              alt="hero"
              className="object-cover object-center rounded-lg h-[22rem] transition duration-500 group-hover:scale-105 w-full"
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
      </section>

      {/* FIFTH PROJECT */}
      <section className="project-5 w-full px-2 xl:px-0">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto flex px-0 py-10 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 group overflow-hidden rounded-lg">
            <img
              alt="hero"
              className="object-cover object-center rounded-lg h-[22rem] transition duration-500 group-hover:scale-105 w-full"
              src="https://dummyimage.com/720x600"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex px-5 flex-col md:items-start md:text-left items-center text-center">
            <div className="col-lg-6 wow fadeInUp">
              <div className="content-box">
                <div className="text-start w-[100%]">
                  <h4 className="playfair backdrop:block text-4xl mb-4">
                    <span className="playfair text-[#9f8054]">
                      Brands Village Gujranwala
                    </span>
                  </h4>
                  <p className="font-semibold text-xl text-[#252525] mb-5">
                    Living spaces for creative peoples
                  </p>

                  <p className="font-normal text-md max-w-lg text-[#252525] mb-4">
                    Brand Village Gujranwala is the only the IconicProject of
                    Gujranwala City with facilities like high speed elevators,
                    secure and spacious car parking space, clean environment,
                    Wi-Fi, banking services & ATMs, foreign exchange, Prayer
                    rooms, toilets, Parent&apos;s room, wheelchair access, fire
                    alarm and fighting system.
                  </p>

                  <button className="font-semibold text-[#A57F4D]">
                    See details
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
