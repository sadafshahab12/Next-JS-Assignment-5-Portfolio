import React from "react";

interface TCard {
  h3: string;
  p: string;
}
const ServiceCard = (props: TCard) => {
  return (
    <>
      <h3 className="text-xl font-semibold mb-2">{props.h3}</h3>
      <p className=" mb-4">{props.p}</p>
      <a
        href="#"
        className="text-orange-600 hover:text-orange-500 font-semibold"
      >
        Learn More
      </a>
    </>
  );
};

export default ServiceCard;
