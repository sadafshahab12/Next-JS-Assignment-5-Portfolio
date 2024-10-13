import React from "react";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  return (
    <>
      <section className="py-20 bg-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-white">
            My Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-orange-100 rounded-lg shadow-lg p-6">
              <ServiceCard
                h3="Web Development"
                p="Building responsive and accessible websites using modern web technologies."
              />
            </div>

            <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-orange-500">
              <ServiceCard
                h3="UI/UX Design"
                p=" Creating user-friendly interfaces with a focus on user experience."
              />
            </div>

            <div className="bg-orange-100 rounded-lg shadow-lg p-6">
              <ServiceCard
                h3="Performance Optimization"
                p="Improving website speed and performance to enhance user engagement. "
              />
            </div>

            <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-orange-500">
              <ServiceCard
                h3="SEO Services"
                p="Optimizing websites for search engines to improve visibility and traffic."
              />
            </div>

            <div className="bg-orange-100  rounded-lg shadow-lg p-6">
              <ServiceCard
                h3="Content Management"
                p="Implementing content management systems to simplify website updates. "
              />
            </div>

            <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-orange-500">
              <ServiceCard
                h3="Consulting"
                p="Providing expert advice on web technologies and best practices."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
