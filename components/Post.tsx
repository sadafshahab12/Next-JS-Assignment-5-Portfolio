import React from "react";
import Image from "next/image";
interface Tblog {
  src: string;
  alt: string;
  width: number;
  height: number;
  h3: string;
  p: string;
}
const Post = (props: Tblog) => {
  return (
    <>
      <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
        <Image
          src={props.src}
          alt={props.alt}
          className="w-full h-48 object-cover"
          width={props.width}
          height={props.height}
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{props.h3}</h3>
          <p className="text-gray-700 mb-4">{props.p}</p>
          <a
            href="#"
            className="text-orange-600 hover:text-orange-500 font-semibold"
          >
            Read More
          </a>
        </div>
      </div>
    </>
  );
};

export default Post;
