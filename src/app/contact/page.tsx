"use client";

import Link from "next/link";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import { useFormState } from "react-dom";
import { submitForm } from "../actions/QueryActions";
import SubmitButton from "./SubmitButton";

const page = () => {
 
  const initialState = {
    message: '',
    status:0,
    error:undefined
  };

  const [state, formAction] = useFormState(submitForm, initialState);
  
  return (
    <>
    <section className="contactSectionbg">
      <div className="px-5 md:px-7 xl:px-0 max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
        <div className="pt-24 lg:pt-10 grid place grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 min-h-[65vh]">
          {/* LEFT SIDE */}
          <div className="flex items-end lg:items-center justify-center lg:justify-start">
            <div className="content text-center lg:text-start">
              <span
                style={{ letterSpacing: "4px" }}
                className="py-1 px-1.5 font-medium text-black bg-[#BD9867] text-[11px] lg:text-[13px]"
              >
                CONTACT US
              </span>

              <h2 className="Noto mt-4 mb-6 text-4xl md:text-5xl font-medium text-white tracking-normal">
                Contact Us
              </h2>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="-mt-10 lg:mt-0 flex items-start lg:items-center justify-center lg:justify-end">
            <h2 className="mt-6 flex items-center gap-2 text-left font-normal text-white text-md md:text-lg">
              <Link
              href={'/'}
                className="flex items-center gap-1 hover:underline hover:underline-offset-4"
              >
                <FaHome />
                Home
              </Link>{" "}
              <IoIosArrowForward />
              Contact
            </h2>
          </div>
        </div>
      </div>
    </section>

    <section id="here" className="pt-0 sm:pt-0 bg-white px-0 sm:px-4">
      <div className="xl:max-w-6xl lg:max-w-5xl max-w-xl mx-auto min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 w-full">
          {/* --------------- LEFT --------------- */}
          <div className="left px-4 sm:px-10 py-16 bg-[#161616] text-white">
            <div className="content text-center lg:text-start">
              <span
                style={{ letterSpacing: "4px" }}
                className="py-1 px-1.5 font-medium text-black bg-[#BD9867] text-[11px] lg:text-[13px]"
              >
                CONTACT
              </span>

              <h2 className="Noto mt-4 mb-6 text-4xl md:text-5xl font-medium text-white tracking-normal">
                Get In Touch
              </h2>

              <p className="text-gray-300 py-3">
                Have questions or need assistance? Our team is here to help!
                Reach out to us for any inquiries or support, and we&apos;ll get
                back to you promptly.
              </p>

              <div className="mt-6 space-y-8 md:mt-6 flex flex-col justify-center items-center sm:block">
                <p className="flex items-start">
                  <MdPhone className="text-white size-9 p-2" />
                  <a
                    href="tel:+92 310 5015888"
                    className="mt-1 mx-3 text-gray-300 tracking-wide"
                  >
                    +92 310 5015888
                  </a>
                </p>

                <p className="flex items-start">
                  <IoMail className="text-white size-9 p-2" />
                  <span className="mx-3 mt-1 text-gray-300 text-wrap">
                    info@ammarforte.com
                  </span>
                </p>

                <p className="flex items-start">
                  < IoLocationOutline className="text-white size-9 p-2" />
                  <span className="mx-3 mt-1 text-gray-300 text-wrap">
                  Plot 88, Sector G Dha Phase 1, Lahore, Punjab
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* --------------- RIGHT --------------- */}
          <div className="right bg-[#F5F5F5] border border-gray-400">
            <div className="w-full px-4 sm:px-10 py-10 mx-auto overflow-hidden rounded-lg shadow-2xl lg:max-w-xl">
              <h2 className="playfair mt-2 pb-2 text-4xl font-bold text-black">
                Send A Message
              </h2>
              <p className="mt-2 text-black">
                Have something to say? Drop us a message and we’ll get back to
                you as soon as possible.
              </p>
              {/* FORM */}
              <form action = {formAction} className="mt-6" >
                <div className="mb-4">
                  <input
                    className="block w-full px-3 py-3 mt-2 text-gray-700 placeholder-gray-700 bg-[#F7F7F7] border border-gray-500 rounded-md focus:outline-none focus:shadow-md"
                    placeholder="Name"
                    type="text"
                   name="name"
                    required
                  />
                </div>

                <div className="mb-4">
                  <input
                    className="block w-full px-3 py-3 mt-2 text-gray-700 placeholder-gray-700 bg-[#F7F7F7] border border-gray-500 rounded-md focus:outline-none focus:shadow-md"
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </div>

                <div className="mb-4">
                  <input
                    className="block w-full px-3 py-3 mt-2 text-gray-700 placeholder-gray-700 bg-[#F7F7F7] border border-gray-500 rounded-md focus:outline-none focus:shadow-md"
                    placeholder="Phone Number"
                    type="number"
                    name="number"
                    required
                  />
                </div>

                <div className="w-full mt-4">
                  <textarea
                   required
                    className="block w-full px-3 py-3 mt-2 text-gray-700 placeholder-gray-700 bg-[#F7F7F7] border border-gray-500 rounded-md focus:outline-none focus:shadow-md"
                    placeholder="Your Message"
                    name="message"
                  />
                </div>
                <SubmitButton/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  );
};

export default page;
