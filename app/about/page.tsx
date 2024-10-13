import Image from "next/image";
import React from "react";
import Link from "next/link";
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
      <section className="py-20 bg-slate-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 text-center">
          <h3 className="text-2xl font-bold mb-4 text-white">
            Why You Should Hire Me!
          </h3>
          <p className="text-gray-100 mb-6">
            I am committed to delivering high-quality work and exceeding client
            expectations. My strong problem-solving skills and attention to
            detail ensure that your project will be in capable hands. Lets work
            together to turn your vision into reality!
          </p>

          <div className="mt-10">
            <Link
              href="#contact"
              className="bg-orange-600 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 text-center mt-10">
          <h3 className="text-2xl font-bold mb-4 text-white">Skills</h3>
          <div className="mt-8 w-full md:w-[50rem] mx-auto">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-200">React.js</span>
                <span className="text-gray-200">{`85%`}</span>
              </div>
              <div className="h-2 bg-gray-200 rounded w-full md:w-1/2 mx-auto">
                <div
                  className="bg-orange-500 h-full rounded"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-200">Tailwind CSS</span>
                <span className="text-gray-200">{`80%`}</span>
              </div>
              <div className="h-2 bg-gray-200 rounded w-full md:w-1/2 mx-auto">
                <div
                  className="bg-orange-500 h-full rounded"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-200">HTML & CSS</span>
                <span className="text-gray-200">{`90%`}</span>
              </div>
              <div className="h-2 bg-gray-200 rounded w-full md:w-1/2 mx-auto">
                <div
                  className="bg-orange-500 h-full rounded"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-200">JavaScript</span>
                <span className="text-gray-200">{`75%`}</span>
              </div>
              <div className="h-2 bg-gray-200 rounded w-full md:w-1/2 mx-auto">
                <div
                  className="bg-orange-500 h-full rounded"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
