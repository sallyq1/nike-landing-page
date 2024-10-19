import Image from "next/image";
import Header1 from "@/assets/STEP INTO WHO YOU ARE.svg"

import NikeShoe from "@/assets/4x/nike-green-shoe.png";
import Carousel from "@/components/Carousel";

export const Hero = () => {
  return (
    <section className="overflow-x-clip ">
    
    <div className="flex justify-center p-32 pt-20 overflow-x-clip relative">

 
      <div className="w-full flex flex-col gap-10">
        <h3 className="font-semibold tracking-widest text-3xl text-black italic mt-20 font-futura">
          YOUR SOLE, YOUR IDENTITY
        </h3>
        <Header1/>


        <p className="paragraph-text ">
        At Nike, we believe that your shoes are more than just footwear—they are an extension of your identity. Walk with purpose. Walk with pride.
        </p>
        <button className="btn btn-primary w-56">Shop Now</button>
      </div>

      <div className="h-auto absolute -right-[500px] -top-32  scale-y-[-1]">
        <Carousel/>
        {/* <Image src={NikeShoe} alt="Nike Shoe"  className="w-[700px] h-auto absolute right-32 top-72 rotate-[45deg] scale-x-[-1]"/> */}
      </div>
      </div>
     
    </section>
  );
};
