import Image from "next/image";
import React from "react";

const data = [
  {
    id: 1,
    image:
      "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/logo02.jpg?v=1719505041",
  },
  {
    id: 2,
    image:
      "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/logo01.jpg?v=1719505040",
  },
  {
    id: 3,
    image:
      "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/logo02.jpg?v=1719505041",
  },
  {
    id: 4,
    image:
      "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/logo01.jpg?v=1719505040",
  },
  {
    id: 5,
    image:
      "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/logo02.jpg?v=1719505041",
  },
  {
    id: 6,
    image:
      "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/logo01.jpg?v=1719505040",
  },
];

const Intro = () => {
  return (
    <>
      <section className="text-gray-600">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto flex px-0 py-24 md:flex-row flex-col items-center">
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

      <section className="pb-16">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {data.map((data) => (
              <div key={data.id} className="mx-auto">
                <Image
                  width={170}
                  height={170}
                  src={data.image}
                  alt="main_banner_img"
                  className="rounded-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
