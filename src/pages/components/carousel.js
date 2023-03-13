import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function MyCarousel() {
  const elements = [
    {
      id: 1,
      image: "https://picsum.photos/1100/300",
      description: "This is the first slider images",
    },
    {
      id: 2,
      image: "https://source.unsplash.com/random/1100x300",
      description: "This is the second slider images",
    },
    {
      id: 3,
      image: "https://picsum.photos/1100/300",
      description: "This is the third slider images",
    },
  ];
  return (
    <Carousel
      className="w-full mx-auto"
      showIndicators={false}
      showThumbs={false}
      showArrows={true}
      showStatus={false}
      autoPlay={true}
      infiniteLoop={true}
    >
      {elements.map((element) => (
        <div key={element.id}>
          <img
            src={element.image}
            alt="random"
            className="object-cover h-[300px] w-[700px]"
          />
          <p className="text-white font-bold text-4xl text-center relative bottom-56 z-20 w-fit mx-auto">
            {element.description}
          </p>
        </div>
      ))}
    </Carousel>
  );
}
