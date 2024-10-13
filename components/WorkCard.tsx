import React from "react";
import Image from "next/image";
import Link from "next/link";

interface TWork {
  src: string;
  width: number;
  height: number;
  h3: string;
  p: string;
  projectLink: string;
}
const WorkCard = (props: TWork) => {
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="transition-transform transform hover:scale-105">
          <Image
            src={props.src}
            alt="Project 1"
            className="w-full h-[15rem] object-cover transition-transform duration-300 hover:scale-110"
            width={props.width}
            height={props.height}
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{props.h3}</h3>
          <p className="text-gray-700 mb-4">{props.p}</p>
          <Link
            href={props.projectLink}
            className="text-orange-500 hover:text-orange-700 cursor-pointer"
          >
            View Project
          </Link>
        </div>
      </div>
    </>
  );
};

export default WorkCard;
