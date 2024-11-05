import React from "react";
import Image from "next/image";

interface TypeTestiCard {
  src: string;
  h4: string;
  p1: string;
  p2: string;
}
const TestimoCard = (props: TypeTestiCard) => {
  return (
    <>
      <div className="w-24 h-24 mb-4">
        <Image
          src={props.src}
          alt="Client Image"
          className="w-full h-full rounded-full object-cover"
          width={400}
          height={400}
        />
      </div>
      <p className="text-gray-700 text-center mb-4">{props.p1}</p>
      <h4 className="font-semibold">{props.h4}</h4>
      <p className="text-gray-500">{props.p2}</p>
    </>
  );
};

export default TestimoCard;
