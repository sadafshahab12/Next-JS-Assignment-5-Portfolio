import Image from "next/image";
import React from "react";
const About = () => {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
          <div className="flex flex-col md:flex-row items-center md:space-x-10">
            <div className="md:w-1/2 mb-10 md:mb-0 relative">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8 md:text-left text-center md:hidden block">
                About Me
              </h2>
              <Image
                src="/images/about.png"
                alt="Profile Picture"
                width={700}
                height={700}
                className="relative rounded-lg z-10"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8 md:text-left text-center md:block hidden">
                About Me
              </h2>
              <p className="text-gray-700 mb-6 md:text-left text-justify">
                Welcome to My Portfolio! I am a Bachelor of Commerce graduate
                and an enthusiastic online tutor with a passion for technology.
                As a front-end developer, I specialize in{" "}
                <strong>React.js</strong> and <strong>Tailwind CSS</strong>,
                crafting intuitive and visually appealing web applications.
                Currently, I am expanding my skill set by pursuing
                certifications in <strong>Cloud Applied Generative AI</strong>{" "}
                and <strong>Web & Mobile App Development</strong>.
              </p>
              <p className="mb-6 text-justify bg-orange-500 text-white font-bold p-3 rounded-lg shadow-md md:text-left">
                Explore my work, which reflects my commitment to seamless user
                experiences and innovative solutions. Lets connect and discuss
                how I can help bring your ideas to life!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
