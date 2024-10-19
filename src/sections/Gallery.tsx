import React from "react";
import Header from '@/assets/JOIN THE COMMUNITY.svg'

import Image from "next/image";
import Image1 from "@/assets/image 1.png";
import Image2 from "@/assets/image 2.png";
import Image3 from "@/assets/image3.png";
import Image4 from "@/assets/image 4.png";
import Image5 from "@/assets/image 5.png";
import Image6 from "@/assets/image 6.png";
import Image7 from "@/assets/image 7.png";
import Image8 from "@/assets/image 8.png";
import Image9 from "@/assets/image 9.png";
import Image10 from "@/assets/image 10.png";
import Image11 from "@/assets/image 11.png";
import Image12 from "@/assets/image 12.png";

const Gallery = () => {
  return (
    <div className="flex justify-center">
      <div className="w-5/6  flex flex-col items-center gap-10 ">
        <div className=" max-w-full flex  items-center h-[375px] justify-center gap-10">
          <Image src={Image1} alt="" className="w-auto h-full " />
          <Image src={Image2} alt="" className="w-auto h-full saturate-0 hover:saturate-100" />
        </div>

        <div className=" flex w-full justify-center gap-10 ">
          <div className="w-[825px] flex flex-col gap-6">
            <div className=" h-[575px] relative">
              <Image src={Image4} alt="" className=" saturate-0 hover:saturate-100 " />
              <Header className="absolute top-[495px] left-3 z-30"/>
            </div>

            <div className="h-[537px] flex justify-between">
              <Image src={Image7} alt=""  />
              <Image src={Image8} alt="" className="" />
            </div>
          </div>

          <div className=" flex flex-col gap-10 w-[370px] -ml-[2px]">
            <Image src={Image5} alt="" className="h-[285px] saturate-0 hover:saturate-100" />
            <Image src={Image6} alt="" className=" h-[375px]" />
            <Image src={Image10} alt="" className=" h-[394px] saturate-0 hover:saturate-100" />
          </div>
        </div>

        <div>

        </div>
      </div>
    </div>
  );
};

export default Gallery;
