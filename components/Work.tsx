import React from "react";

import WorkCard from "@/components/WorkCard";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const Work = () => {
  return (
    <>
      <section className="relative py-16 bg-gray-100">
        <div className="container mx-auto px-10">
          <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <WorkCard
              src="/images/work/html css.png"
              width={400}
              height={400}
              h3="Landing Page"
              p="Join Kids Can Code to unleash your creativity and learn web development through fun, interactive projects!"
              projectLink="https://sadafshahab12.github.io/Creativee-Freelance-hub-task-2/"
            />
            <WorkCard
              src="/images/work/bootstrapwebsite.PNG"
              width={400}
              height={400}
              h3="Techno-Web"
              p="Unlock your potential in web development and learn to create stunning, interactive websites that bring your ideas to life!"
              projectLink="https://sadafshahab12.github.io/Bootstrap-Website/"
            />
            <WorkCard
              src="/images/work/bootstrapwebsite2.png"
              width={400}
              height={400}
              h3="Cake Website"
              p="Indulge in a delightful experience with our cake website, showcasing a tempting array of handcrafted cakes made with love and creativity!"
              projectLink="https://sadafshahab12.github.io/Fluffy-Delights---Self-Created/"
            />
          </div>
        </div>
        <div className="bg-orange-600 text-white p-4 text-center mx-10 rounded-lg my-8">
          <h2 className="text-lg md:text-xl font-bold">Check Out My Work!</h2>
          <p className="mt-2">
            For more projects and updates, visit my GitHub.
          </p>
          <Link
            href="https://github.com/sadafshahab12"
            className="mt-4 bg-white text-orange-600 py-2 px-4 rounded hover:bg-gray-200 transition flex justify-center items-center gap-2 md:w-64 w-25  mx-auto"
          >
            <FontAwesomeIcon icon={faGithub} width={25} height={25} />
            Visit GitHub
          </Link>
        </div>
      </section>
    </>
  );
};

export default Work;
