import Image from "next/image";
import Link from "next/link";
import React from "react";
import BoxReveal from "./magicui/box-reveal";

const data = [
  {
    id: 1,
    image:
      "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/p8logo-removebg-preview_png.webp?v=1719608597",
  },
  {
    id: 2,
    image:
      "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/p4logo-removebg-preview-300x243-1_png.webp?v=1719608597",
  },
  {
    id: 3,
    image:
      "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/logo_for_newdhalahore-2-removebg-preview_png.webp?v=1719608597",
  },
  {
    id: 4,
    image:
      "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/p6logo-removebg-preview-300x168-1_png.webp?v=1719608597",
  },
  {
    id: 5,
    image:
      "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/p5logo-removebg-preview-300x189-1-qpzzcm79rg023ewh4n5u8yg6mubgfj284aqq451n28.png?v=1719608597",
  },
];

const Intro = () => {
  return (
    <>
      <section className="text-gray-600">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto flex px-0 py-10 md:flex-row flex-col items-center min-h-[80vh]">
          <div className="relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              alt="hero"
              width={600}
              height={600}
              className="object-cover object-center"
              src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Side_Banner.webp?v=1719609824"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex px-5 flex-col md:items-start md:text-left items-center text-center">
            <div className="col-lg-6 wow fadeInUp">
              <div className="content-box">
                <div className="text-start w-[100%]">
                  <span className="block text-xl font-semibold opacity-50 mb-1">
                    Gujranwala
                  </span>

                  <BoxReveal boxColor={"#9f8054"} duration={0.5}>
                    <h4 className="playfair backdrop:block text-3xl sm:text-4xl mb-4">
                      <span className="playfair text-[#9f8054]">
                        Brands Village Gujranwala
                      </span>
                    </h4>
                  </BoxReveal>
                  <BoxReveal boxColor={"#9f8054"} duration={0.5}>
                    <p className="font-normal text-md max-w-lg text-[#252525] mb-3">
                      Brand Village Gujranwala is the only the Iconic Project of
                      Gujranwala City with facilities like high speed elevators,
                      secure and spacious car parking space, clean environment,
                      Wi-Fi, banking services & ATMs, foreign exchange, Prayer
                      rooms, toilets, Parent&apos;s room, wheelchair access,
                      fire alarm and fighting system.
                    </p>
                  </BoxReveal>

                  <BoxReveal boxColor={"#9f8054"} duration={0.5}>
                    <p className="font-normal text-md max-w-lg text-[#252525] mb-8">
                      Brands Village is not specified to just a single location,
                      there will be multiple brands villages launching all
                      across Pakistan. Brands Village undoubtedly offers the
                      ultimate entertainment and shopping destination where your
                      senses will get excited as you walk through more than 50
                      international & local brands.
                    </p>
                  </BoxReveal>

                  <Link href="/quetta" className="mt-2 hover_button card">
                    See details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-16">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          <div className="flex justify-center items-center flex-wrap gap-x-4 sm:gap-x-6">
            {data.map((data) => (
              <div key={data.id} className="relative mx-auto h-[8rem] w-[8rem]">
                <Image
                  fill
                  src={data.image}
                  alt="main_banner_img"
                  className="object-contain px-2 h-full w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Intro;
