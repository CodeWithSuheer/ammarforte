import React from "react";

const Blogs = () => {
  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-4 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
            Customer stories
          </h2>
          <p className="mt-1 text-gray-600">
            See how game-changing companies are making the most of every
            engagement with Preline.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="group hover:bg-gray-100 rounded-xl p-0 sm:p-2 lg:p-5 transition-all">
            <div className="aspect-w-16 aspect-h-10">
              <img
                alt="Image Description"
                className="w-full object-cover rounded-xl h-60"
                src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
              />
            </div>
            <h3 className="mt-5 text-xl text-gray-800">
              Unity’s inside sales team drives 80% of its revenue with Preline.
            </h3>
            <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800">
              Learn more
              <svg
                className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </div>
          <div className="group hover:bg-gray-100 rounded-xl p-0 sm:p-2 lg:p-5 transition-all">
            <div className="aspect-w-16 aspect-h-10">
              <img
                alt="Image Description"
                className="w-full object-cover rounded-xl h-60"
                src="https://images.unsplash.com/photo-1669739432571-aee1f057c41f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80"
              />
            </div>
            <h3 className="mt-5 text-xl text-gray-800">
              Living Spaces creates a unified experience across the customer
              journey.
            </h3>
            <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800">
              Learn more
              <svg
                className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </div>
          <div className="group hover:bg-gray-100 rounded-xl p-0 sm:p-2 lg:p-5 transition-all">
            <div className="aspect-w-16 aspect-h-10">
              <img
                alt="Image Description"
                className="w-full object-cover rounded-xl h-60"
                src="https://images.unsplash.com/photo-1657299171054-e679f630a776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              />
            </div>
            <h3 className="mt-5 text-xl text-gray-800">
              Atlassian powers sales and support at scale with Preline.
            </h3>
            <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800">
              Learn more
              <svg
                className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
