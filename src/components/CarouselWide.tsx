"use client";

import Image from "next/image";

import NikeShoe from "@/assets/4x/nike-green-shoe.png";
import NikeShoe2 from "@/assets/4x/Asset 3.png";
import NikeShoe3 from "@/assets/4x/Asset 4.png";
import NikeShoe4 from "@/assets/4x/Asset 5.png";
import NikeShoe5 from "@/assets/4x/Asset 6.png";
import NikeShoe6 from "@/assets/4x/Asset 7.png";
import NikeShoe7 from "@/assets/4x/Asset 8.png";
import NikeShoe8 from "@/assets/4x/Asset 9.png";
import NikeShoe9 from "@/assets/4x/Asset 10.png";
import NikeShoe10 from "@/assets/4x/Asset 11.png";

// components/Carousel.tsx
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CarouselWide: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768; // Mobile detection

  useEffect(() => {
    if (carouselRef.current) {
      const slides = gsap.utils.toArray(
        carouselRef.current.querySelectorAll(".carousel-item")
      ) as HTMLElement[];

      // Set initial angles based on mobile or desktop
      slides.forEach((slide, i) => {
        const angle = isMobile ? i * 10 : i * 10 - 10;
        gsap.set(slide, {
          rotation: angle,
          transformOrigin: "0% 3000px",
        });
      });

      const speed = isMobile ? 50 : 60;

      // ScrollTrigger setup
      ScrollTrigger.create({
        trigger: carouselRef.current,
        start: "top+= center",
        end: "bottom+=1500 bottom",
        onUpdate: (self) => {
          gsap.to(slides, {
            rotation: (i) => {
              const baseAngle = isMobile ? i * 10 : i * 10 - 10;
              return baseAngle - self.progress * speed;
            },
          });
        },
      });
    }
  }, [isMobile]);

  return (
    <div className="">
      <div className="carousel-container" ref={carouselRef}>
        <div className="carousel-item">
          <Image
            src={NikeShoe}
            alt="Nike Shoe"
            className="h-full w-full rotate-[330deg] scale-x-[-1]"
          />
        </div>
        <div className="carousel-item ">
          <Image
            src={NikeShoe2}
            alt="Nike Shoe"
            className="h-full w-full rotate-[320deg] scale-x-[-1]"
          />
        </div>
        <div className="carousel-item">
          <Image
            src={NikeShoe3}
            alt="Nike Shoe"
            className="h-full w-full rotate-[320deg] scale-x-[-1]"
          />
        </div>
        <div className="carousel-item">
          <Image
            src={NikeShoe4}
            alt="Nike Shoe"
            className="h-full w-full rotate-[320deg] scale-x-[-1]"
          />
        </div>

        <div className="carousel-item">
          <Image
            src={NikeShoe5}
            alt="Nike Shoe"
            className="h-full w-full rotate-[320deg] scale-x-[-1]"
          />
        </div>

        <div className="carousel-item">
          <Image
            src={NikeShoe6}
            alt="Nike Shoe"
            className="h-full w-full  rotate-[320deg] scale-x-[-1]"
          />
        </div>
        <div className="carousel-item">
          <Image
            src={NikeShoe7}
            alt="Nike Shoe"
            className="h-full w-full rotate-[320deg] scale-x-[-1]"
          />
        </div>
        <div className="carousel-item">
          <Image
            src={NikeShoe8}
            alt="Nike Shoe"
            className="h-full w-full rotate-[320deg] scale-x-[-1]"
          />
        </div>









      </div>
    </div>
  );
};

export default CarouselWide;
