import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface Props {
  // Add props here
  sliderList: any;
}

interface Image {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: object; // Define this if the structure of `formats` is known
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: object | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface SliderItem {
  id: number;
  documentId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: Image;
}


const Slider: React.FC<Props> = ({ sliderList }) => {

  return (
    <Carousel>
      <CarouselContent>
        {sliderList.map((slider:SliderItem, index: any) => (
          <CarouselItem key={index}>
            <Image
              alt={"test"}
              width={1000}
              height={400}
              src={
                process.env.NEXT_PUBLIC_BACKEND_BASE_URL + slider?.image?.url
              }
              className="w-full h-[200px] md:h-[400px] object-cover rounded-2xl"
            />
      
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Slider;
