"use client";

import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { companies } from "@/assets/companies";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export const Carousells = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent className="flex gap-5 sm:gap-20 items-center">
        {companies.map((company, index) => (
          <CarouselItem key={index} className="basis-auto">
            <div className="flex items-center justify-center p-2">
              <Image
                src={company}
                alt={`Company ${index}`}
                width={280}
                className="mix-blend-multiply"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
