import React from "react";
import Link from "next/link";
const Skills = () => {
  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 text-center">
          <h3 className="text-2xl font-bold mb-4">Why You Should Hire Me!</h3>
          <p className="text-gray-700 mb-6">
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
          <h3 className="text-2xl font-bold mb-4 ">Skills</h3>
          <div className="mt-8 w-full md:w-[50rem] mx-auto">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700">React.js</span>
                <span className="text-gray-700">{`85%`}</span>
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
                <span className="text-gray-700">Tailwind CSS</span>
                <span className="text-gray-700">{`80%`}</span>
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
                <span className="text-gray-700">HTML & CSS</span>
                <span className="text-gray-700">{`90%`}</span>
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
                <span className="text-gray-700">JavaScript</span>
                <span className="text-gray-700">{`75%`}</span>
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

export default Skills;
