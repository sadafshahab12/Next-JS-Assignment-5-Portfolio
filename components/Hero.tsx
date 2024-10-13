import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <>
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
              Welcome to
            </h1>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-10">
              My Portfolio
            </h2>
            <p className="text-lg md:text-3xl mb-4">
              I am <span className="text-3xl font-semibold">Sadaf Shahab</span>
            </p>
            <p className="mb-6">Building Seamless Experiences</p>
            <p className="mb-6">
              As a front-end developer, I specialize in crafting intuitive and
              visually appealing user experiences. With a passion for clean code
              and responsive design, I transform concepts into dynamic web
              applications that not only look great but also perform seamlessly
              across all devices.
            </p>
            <a
              href="#portfolio"
              className="bg-orange-500 hover:bg-orange-400 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 sm:text-lg text-[0.7rem]"
            >
              Lets create something amazing together!
            </a>
          </div>

          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <Image
              src="/images/home 2.png"
              alt="Sadaf Shahab"
              width={300}
              height={300}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
