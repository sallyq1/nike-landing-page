import React from "react";
import Header from '@/assets/SCROLL TO DISCOVER.svg'

import CarouselWide from "@/components/CarouselWide";

const Features = () => {
  return (
    <div className="py-10 overflow-x-clip  flex flex-col gap-16 items-center mt-[200px] ">
      <Header/>
      <p className="paragraph-text text-center flex justify-center w-[800px]">No two identities are the same, and neither are the soles that carry them. With Nike’s customization options, you can craft a shoe that is as unique as you are.</p>
     <button className="btn-large btn-primary -mt-5 z-30" >Start Customizing</button>
     <div className="">
     <CarouselWide />

     </div>


    </div>
  );
};

export default Features;
