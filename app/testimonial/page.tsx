import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import TestimoCard from "../components/TestimoCard";

const Testimonial = () => {
  return (
    <section className="py-10 bg-orange-300" id="testimonials">
      <div className="container mx-auto px-10">
        <div className="flex justify-center mb-6">
          <FontAwesomeIcon
            icon={faUsers}
            width={100}
            height={100}
            className="text-4xl text-gray-700"
          />
        </div>
        <h2 className="text-3xl font-semibold text-center mb-8">
          Client Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <TestimoCard
              src="/images/client.webp"
              p1="Working with Sadaf was a fantastic experience! Their attention
              to detail and creative solutions made a huge difference in our
              project."
              h4="RockCell"
              p2="Tech-Titans"
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <TestimoCard
              src="/images/client.webp"
              p1="Working with Sadaf was a fantastic experience! Their attention
              to detail and creative solutions made a huge difference in our
              project."
              h4="RockCell"
              p2="Tech-Titans"
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <TestimoCard
              src="/images/client.webp"
              p1="Working with Sadaf was a fantastic experience! Their attention
              to detail and creative solutions made a huge difference in our
              project."
              h4="RockCell"
              p2="Tech-Titans"
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <TestimoCard
              src="/images/client.webp"
              p1="Working with Sadaf was a fantastic experience! Their attention
              to detail and creative solutions made a huge difference in our
              project."
              h4="RockCell"
              p2="Tech-Titans"
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <TestimoCard
              src="/images/client.webp"
              p1="Working with Sadaf was a fantastic experience! Their attention
              to detail and creative solutions made a huge difference in our
              project."
              h4="RockCell"
              p2="Tech-Titans"
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <TestimoCard
              src="/images/client.webp"
              p1="Working with Sadaf was a fantastic experience! Their attention
              to detail and creative solutions made a huge difference in our
              project."
              h4="RockCell"
              p2="Tech-Titans"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
