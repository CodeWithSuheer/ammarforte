import Image from "next/image";
import React from "react";

const StatsSection: React.FC = () => {
  return (
    <>
      <section className="bg-[#f9f9f9] py-16 w-full">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          {/* HEADING SECTION */}
          <div className="text-center w-[100%]">
            <span className="block text-2xl font-extrabold opacity-20 mb-1">
              02
            </span>
            <h4 className="block text-2xl mb-1">
              <span className="text-[#9f8054]">Homepark</span> Property
            </h4>
            <h3 className="font-semibold text-2xl">
              Decorated Flats in Pozniaky - Kiev
            </h3>
          </div>

          <div className="pt-6 w-full flex justify-center sm:justify-between items-center flex-wrap">
            {/* FIRST BOX */}
            <div className="box px-2 sm:px-4 flex justify-center items-center flex-col">
              <div className="">
                <Image
                  width={100}
                  height={100}
                  src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/icon-benefits01.png?v=1719581374"
                  alt="image"
                  className=""
                />
              </div>
              <p className="mt-3 font-semibold">Near to Subway</p>

              <div className="data mt-2">
                <span className="text-3xl sm:text-5xl font-bold">28</span>
                <span className="text-md font-semibold">min</span>
              </div>
            </div>

            {/* SECOND BOX */}
            <div className="box mt-0 sm:mt-[6rem] px-2 sm:px-4 flex justify-center items-center flex-col">
              <div className="">
                <Image
                  width={100}
                  height={100}
                  src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/icon-benefits01.png?v=1719581374"
                  alt="image"
                  className=""
                />
              </div>
              <p className="mt-3 font-semibold">Near to Subway</p>

              <div className="data mt-2">
                <span className="text-3xl sm:text-5xl font-bold">28</span>
                <span className="text-md font-semibold">min</span>
              </div>
            </div>

            {/* THIRD BOX */}
            <div className="box px-2 sm:px-4 flex justify-center items-center flex-col">
              <div className="">
                <Image
                  width={100}
                  height={100}
                  src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/icon-benefits01.png?v=1719581374"
                  alt="image"
                  className=""
                />
              </div>
              <p className="mt-3 font-semibold">Near to Subway</p>

              <div className="data mt-2">
                <span className="text-3xl sm:text-5xl font-bold">28</span>
                <span className="text-md font-semibold">min</span>
              </div>
            </div>

            {/* FORTH BOX */}
            <div className="box mt-0 sm:mt-[6rem] px-2 sm:px-4 flex justify-center items-center flex-col">
              <div className="">
                <Image
                  width={100}
                  height={100}
                  src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/icon-benefits01.png?v=1719581374"
                  alt="image"
                  className=""
                />
              </div>
              <p className="mt-3 font-semibold">Near to Subway</p>

              <div className="data mt-2">
                <span className="text-3xl sm:text-5xl font-bold">28</span>
                <span className="text-md font-semibold">min</span>
              </div>
            </div>

            {/* FIFTH BOX */}
            <div className="box px-2 sm:px-4 flex justify-center items-center flex-col">
              <div className="">
                <Image
                  width={100}
                  height={100}
                  src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/icon-benefits01.png?v=1719581374"
                  alt="image"
                  className=""
                />
              </div>
              <p className="mt-3 font-semibold">Near to Subway</p>

              <div className="data mt-2">
                <span className="text-3xl sm:text-5xl font-bold">28</span>
                <span className="text-md font-semibold">min</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StatsSection;
