import React from "react";

const Gallery = () => {
  return (
    <>
      <section className="bg-[#f9f9f9] py-24 flex flex-wrap w-[100%] ">
        {/* HEADING SECTION */}
        <div className="text-center w-[100%] px-4 lg:px-0">
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

        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <div className="space-y-2">
              <img
                alt="Image Description"
                className="w-full h-auto object-cover"
                src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              />
              <img
                alt="Image Description"
                className="w-full h-auto object-cover"
                src="https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80"
              />
              <img
                alt="Image Description"
                className="w-full h-auto object-cover"
                src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              />
            </div>
            <div className="space-y-2">
              <img
                alt="Image Description"
                className="w-full h-auto object-cover"
                src="https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
              />
              <img
                alt="Image Description"
                className="w-full h-auto object-cover"
                src="https://images.unsplash.com/photo-1664574654529-b60630f33fdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              />
            </div>
            <div className="space-y-2">
              <img
                alt="Image Description"
                className="w-full h-auto object-cover"
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              />
              <img
                alt="Image Description"
                className="w-full h-auto object-cover"
                src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
              />
              <img
                alt="Image Description"
                className="w-full h-auto object-cover"
                src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              />
            </div>
            <div className="space-y-2">
              <img
                alt="Image Description"
                className="w-full h-auto object-cover"
                src="https://images.unsplash.com/photo-1668869713519-9bcbb0da7171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
              />
              <img
                alt="Image Description"
                className="w-full h-auto object-cover"
                src="https://images.unsplash.com/photo-1668584054035-f5ba7d426401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3465&q=80"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
