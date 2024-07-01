"use client";
import Image from "next/image";
import { useParams } from "next/navigation";

const page = ({ params }: any) => {
  const blogData = [
    {
      id: 1,
      h1: "Conquering the First-Time Homebuyer Hurdles",
      p1: "Buying your first home can be an exciting yet overwhelming experience. This blog tackles common roadblocks faced by first-timers, offering tips to guide you through the process.",
      h2: "Essential Steps for First-Time Homebuyers",
      p2: "  * Budgeting and Pre-Approval: Understanding your affordability and getting pre-approved for a mortgage streamlines the process. \n   * Finding the Right Agent: A realtor with experience in your target area can guide you through negotiations and paperwork. \n   * Understanding the Market: Researching current trends and inventory levels helps you make informed decisions.",
      img: "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/Gemini_Generated_Image_exeodbexeodbexeo.webp?v=1719844961", // Replace with the path to your image
      h3: "Bonus Tip!",
      p3: "Don't be afraid to ask questions! Your agent and lender are there to support you throughout the process.",
    },
    {
      id: 2,
      h1: "Sprucing Up Your Curb Appeal for a Quick Sale",
      p1: "Thinking of selling your home? Here are some easy upgrades to enhance your curb appeal and potentially fetch a higher selling price.",
      h2: "Simple Hacks to Boost Curb Appeal",
      p2: "  * Landscaping: A neat yard with fresh mulch and colorful flowers creates a positive first impression. \n   * Power Washing: A quick power wash can remove dirt and grime, making your exterior sparkle. \n   * Minor Repairs: Fix any leaky faucets, loose doorknobs, or chipped paint to show buyers you've maintained the property.",
      img: "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/Gemini_Generated_Image_28okwf28okwf28ok.webp?v=1719844961", // Replace with the path to your image
      h3: "Pro Tip for Sellers",
      p3: "Stage your home for showings! Declutter, arrange furniture strategically, and add inviting touches to create a move-in-ready feel.",
    },
    {
      id: 3,
      h1: "The Investment Potential of Rental Properties",
      p1: "Considering becoming a landlord? This blog explores the potential benefits and considerations of rental properties.",
      h2: "Owning Rental Properties: Pros and Cons",
      p2: "  * Passive Income: Rents can provide a steady stream of income, even while you're not actively working. \n   * Long-Term Appreciation: Owning property can be a hedge against inflation, potentially appreciating in value over time.",
      img: "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/Gemini_Generated_Image_exeodcexeodcexeo.webp?v=1719844961", // Replace with the path to your image
      h3: "Important Consideration for Landlords",
      p3: "Being a landlord requires effort, including finding tenants, handling repairs, and collecting rent. Conduct thorough background checks on potential tenants to minimize risks.",
    },
  ];
  const id = Number(params.id);
  const blog = blogData.filter((post) => post.id === id);
  const post = blog[0];

  return (
    <>
      <div className="w-full h-full bg-[#1b1b1b]">
        <div className="max-w-3xl px-4 pt-24 sm:pt-28 lg:pt-32 pb-12 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-2xl">
            {/* Content */}
            <div className="space-y-5 md:space-y-5">
              <div className="space-y-3">
                <h2 className="text-2xl font-bold md:text-3xl text-white">
                  {post.h1}
                </h2>
                <p className="text-lg  text-white">{post.p1}</p>
              </div>

              <h2 className="text-lg font-bold text-white md:text-2xl">
                {post.h2}
              </h2>

              <p className="text-lg text-white">{post.p2}</p>
              <figure>
                <Image
                  width={600}
                  height={600}
                  className="w-full object-cover rounded-xl"
                  src={post.img}
                  alt="Image Description"
                />
              </figure>
              {/* <p className="text-lg text-gray-800">
                Whether they feature polarized lenses to reduce glare or
                UV-blocking coatings to shield your eyes from harmful rays,
                sunglasses for men at stores like Googlyensure that you not only
                look good but also safeguard your vision.
              </p> */}

              <h2 className="text-lg font-bold md:text-2xl text-white">
                {post.h3}
              </h2>

              <p className="text-lg text-white">{post.p3}</p>
            </div>
            {/* End Content */}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
