import Image from "next/image";
import React from "react";

const StatsSection: React.FC = () => {
  return (
    <>
      
      <section className="bg-[#f9f9f9] py-24 flex flex-wrap w-[100%] ">
        {/* HEADING SECTION */}
        <div className="text-center w-[100%]">
          <span className="block text-2xl font-extrabold opacity-20 mb-1">02</span>
          <h4 className="block text-2xl mb-1"><span className="text-[#9f8054]">Homepark</span> Property</h4>
          <h3 className="font-semibold text-2xl">Decorated Flats in Pozniaky - Kiev</h3>
        </div>
         {/* ICONS SECTION */}
      <div className="mt-6 flex px-4">
        
          <div className="">
          <Image width={70} height={70} alt="Icon" src={'https://themezinho.net/hompark/images/icon-benefits01.png'}/>
          <h6>Near To Subway</h6>
          </div>
            
              
      
      </div>
      </section>
    </>
  );
};

export default StatsSection;
