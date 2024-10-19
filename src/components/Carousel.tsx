"use client";

import Image from "next/image";

import NikeShoe from "@/assets/4x/nike-green-shoe.png";

// components/Carousel.tsx
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Carousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (carouselRef.current) {
      const items = gsap.utils.toArray(carouselRef.current.querySelectorAll('.carousel-item')) as HTMLElement[];
      const totalItems = items.length;
      const anglePerItem = 360 / totalItems;
      const radius = 400; // Distance from the center point

      // Arrange items in a circular layout
      items.forEach((item, i) => {
        const angle = i * anglePerItem * (Math.PI / 180); // Convert degrees to radians
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        gsap.set(item, {
          x: x,
          y: y,
        });
      });

      // Create scroll-triggered animation
      gsap.to(carouselRef.current, {
        rotation: 370, // One full rotation
        ease: 'power1.out', // Use an easing curve that smoothly slows down
        scrollTrigger: {
          trigger: carouselRef.current,
          start: 'top center', // Start animation when the carousel enters the viewport
          end: 'bottom+=2000 center', // End when the bottom of the carousel leaves the viewport
          scrub: true, // Makes the animation tied to the scroll position
        },
        roundProps: 'rotation', // This will round the rotation value to avoid shaking

      });
    }
  }, []);

  return (
    <div>
      <div className="carousel-container" ref={carouselRef}>
        <div className="carousel-item">
          
          <Image
            src={NikeShoe}
            alt="Nike Shoe"
            className="h-full w-full"
          />
        </div>
        <div className="carousel-item ">
         
        
        <Image
            src={NikeShoe}
            alt="Nike Shoe"
            className="h-full w-full  rotate-[45deg]"
          />
        </div>
        <div className="carousel-item">
          
        
        <Image
            src={NikeShoe}
            alt="Nike Shoe"
            className="h-full w-full  rotate-[90deg]"
          />
        </div>
        <div className="carousel-item">
         
        <Image
            src={NikeShoe}
            alt="Nike Shoe"
            className="h-full w-full  scale-x-[-1] rotate-[315deg]"
          />
        </div>
        <div className="carousel-item">
     
        
        <Image
            src={NikeShoe}
            alt="Nike Shoe"
            className="h-full w-full scale-x-[-1]"
          />
        </div>

        <div className="carousel-item">
     
        
     <Image
         src={NikeShoe}
         alt="Nike Shoe"
         className="h-full w-full  scale-x-[-1] rotate-[45deg] "
       />
     </div>
     <div className="carousel-item">
     
        
     <Image
         src={NikeShoe}
         alt="Nike Shoe"
         className="h-full w-full  rotate-[90deg] scale-x-[-1]"
       />
     </div>
     <div className="carousel-item">
     
        
     <Image
         src={NikeShoe}
         alt="Nike Shoe"
         className="h-full w-full rotate-[135deg]  scale-x-[-1]"
       />
     </div>
      </div>

 
    </div>
  );
};

export default Carousel;
