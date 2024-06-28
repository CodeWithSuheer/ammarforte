import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="w-full text-[#ECECFB] bg-black">
        <div className="max-w-7xl mx-auto">
          {/* FOOTER UPPER PART  */}
          <div className="pt-16 pb-14 px-4 md:px-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-5">
            {/* LOGO & HEADING */}
            <div className="sm:col-span-2">
              <h1 className="max-w-lg flex items-center text-xl font-semibold tracking-tight text-white xl:text-2xl">
                <img
                  className="mr-3 w-12"
                  src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/ammmar.png?v=1719436690"
                  alt="logo"
                />
                Ammar Forte
              </h1>
              <p className="max-w-md text-[1rem] mt-3">
                Ammar Forte is your one-stop shop for all your real estate
                needs. We’re a team of passionate experts dedicated to guiding
                you towards success, whether you’re buying, selling, or
                investing.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <p className="text-xl font-semibold text-white">Quick Link</p>
              <div className="flex flex-col items-start mt-3 space-y-2">
                <Link
                  href="/"
                  className="text-black transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-black transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="text-black transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Contact Us
                </Link>
                <Link
                  href="/privacy-policy"
                  className="text-black transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>

            {/* PRODUCT & CATEGORIES */}
            <div>
              <p className="text-xl font-semibold text-white">Useful Links</p>
              <div className="flex flex-col items-start mt-3 space-y-2">
                <Link
                  href="/online-classes"
                  className="text-black transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Brands Village Sialkot
                </Link>
                <Link
                  href="/exams"
                  className="text-black transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Brands Village Queeta
                </Link>
                <Link
                  href="/assignments"
                  className="text-black transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Bahira Town Lahore
                </Link>
              </div>
            </div>

            {/* PRODUCT & CATEGORIES */}
            <div>
              <p className="text-xl font-semibold text-white">Contact Info</p>
              <div className="flex flex-col items-start mt-3 space-y-2">
                {/* PHONE NUMBER */}
                <a
                  href="tel:+92-332-2222929"
                  className="flex items-center gap-2"
                >
                  <FaPhone /> +92 332 2222929
                </a>

                {/* SOCIAL LINKS */}
                <div className="links pt-2 flex items-center justify-start gap-2.5">
                  <a href="#" className="">
                    <FaFacebookF className="text-white bg-[#A57F4D] h-7 w-7 p-1.5 rounded-full" />
                  </a>
                  <a href="#" className="">
                    <FaInstagram className="text-white bg-[#A57F4D] h-7 w-7 p-1.5 rounded-full" />
                  </a>
                  <a href="#" className="">
                    <FaLinkedinIn className="text-white bg-[#A57F4D] h-7 w-7 p-1.5 rounded-full" />
                  </a>
                  <a href="#" className="">
                    <FaTiktok className="text-white bg-[#A57F4D] h-7 w-7 p-1.5 rounded-full" />
                  </a>
                </div>

                {/* PAYMENT METHOLDS */}
                <div className="paymentMethods pt-2 flex items-center justify-start gap-2">
                  <img
                    className="w-8"
                    src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Paypal_logo.png?v=1713217299"
                    alt=""
                  />
                  <img
                    className="w-8"
                    src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/MasterCard_Logo_svg.png?v=1713215530"
                    alt=""
                  />
                  <img
                    className="w-8"
                    src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/visa.png?v=1713215529"
                    alt=""
                  />
                  <img
                    className="w-8"
                    src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/American_Express.png?v=1713215529"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM PART  */}
        <div className="text-sm py-4 sm:py-7 px-4 md:px-10 border-t bg-[#A57F4D] text-center text-white">
          <p>Copyrights © 2024 All Rights Reserved by Ammar Forte</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
