import React from "react";
import Image from "next/image";

const Gallery = () => {
  return (
    <>
      <section className="bg-[#f9f9f9] py-24 flex flex-wrap w-[100%] ">
        {/* HEADING SECTION */}
        <div className="text-center w-[100%] px-4 lg:px-0">
          <span className="block text-2xl font-extrabold opacity-40 mb-1">
            03
          </span>
          <h4 className="block text-2xl mb-1">
            <span className="text-[#9f8054]">Ammar Forte</span> Gallery
          </h4>
          <p className="font-semibold text-xl">Journey Through Our Creations</p>
        </div>

        <div className="max-w-[85rem] px-3 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <div className="space-y-2">
              <Image
                width={600}
                height={600}
                alt="Image Description"
                className=" h-[10rem] w-[10rem] sm:h-[13rem] object-cover sm:w-[20rem] rounded"
                src="https://cdn.shopify.com/s/files/1/0649/1399/8024/files/office1.webp?v=1719842515"
              />
              <Image
                width={600}
                height={600}
                alt="Image Description"
                className="h-[11rem] w-[11rem] sm:h-[42rem] object-cover sm:w-[18.6rem] rounded"
                src="https://cdn.shopify.com/s/files/1/0649/1399/8024/files/6.webp?v=1719860425"
              />
            </div>
            <div className="space-y-2">
              <Image
                width={600}
                height={600}
                alt="Image Description"
                className="h-[10rem] w-[10rem] sm:h-[22rem] object-cover sm:w-[20rem] rounded"
                src="https://cdn.shopify.com/s/files/1/0649/1399/8024/files/office2.webp?v=1719842516"
              />
              <Image
                width={600}
                height={600}
                alt="Image Description"
                className="h-[10rem] w-[10rem] sm:h-[33rem] object-cover sm:w-[20rem] rounded"

                src="https://cdn.shopify.com/s/files/1/0649/1399/8024/files/7.webp?v=1719860425"
              />
            </div>
            <div className="space-y-2">
              <Image
                width={600}
                height={600}
                alt="Image Description"
                className="h-[11rem] w-[11rem] sm:h-[12rem] object-cover sm:w-[20rem] rounded"
                src="https://cdn.shopify.com/s/files/1/0649/1399/8024/files/office3.webp?v=1719842515"
              />
              <Image
                width={600}
                height={600}
                alt="Image Description"
                className="h-[11rem] w-[11rem] sm:h-[25rem] object-cover sm:w-[20rem] rounded"
                src="https://cdn.shopify.com/s/files/1/0649/1399/8024/files/8.webp?v=1719860425"
              />
              <Image
                width={600}
                height={600}
                alt="Image Description"
                className="h-[11rem] w-[11rem] sm:h-[17.5rem] object-cover sm:w-[20rem] rounded"
                src="https://cdn.shopify.com/s/files/1/0649/1399/8024/files/office5.webp?v=1719842515"
              />
            </div>
            <div className="space-y-2">
              <Image
                width={600}
                height={600}
                alt="Image Description"
                className="h-[11rem] w-[11rem] sm:h-[30rem] object-cover sm:w-[20rem] rounded"
                src="https://cdn.shopify.com/s/files/1/0649/1399/8024/files/9.webp?v=1719860424"
              />
              <Image
                width={600}
                height={600}
                alt="Image Description"
                className="h-[11rem] w-[11rem] sm:h-[25rem] object-cover sm:w-[20rem] rounded"
                src="https://cdn.shopify.com/s/files/1/0649/1399/8024/files/office4.webp?v=1719842515"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
