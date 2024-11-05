import React from "react";
import Post from "../components/Post";

const Blog = () => {
  return (
    <>
      <section className="py-20 bg-gray-800 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-white">
            Latest Blog Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Post
              src="/images/css grid.png"
              alt="css grid"
              width={400}
              height={400}
              h3="Understanding CSS Grid"
              p=" A comprehensive guide to CSS Grid layout, including examples and best practices."
            />

            <Post
              src="/images/es6Feature.png"
              alt="es6 feature"
              width={400}
              height={400}
              h3="JavaScript ES6 Features"
              p="Explore the new features introduced in ES6 and how they improve your coding experience."
            />

            <Post
              src="/images/respdes.webp"
              alt="responsive"
              width={400}
              height={400}
              h3="A Guide to Responsive Design"
              p="Learn how to create responsive designs that look great on all devices."
            />

            <Post
              src="/images/webdev.jpg"
              alt="css grid"
              width={400}
              height={400}
              h3="Accessibility in Web Development"
              p="Best practices for creating accessible web applications and ensuring inclusivity."
            />

            <Post
              src="/images/anim.jpg"
              alt="css animation"
              width={400}
              height={400}
              h3="CSS Animations for Beginners"
              p="An introduction to CSS animations and how to create engaging user experiences."
            />

            <Post
              src="/images/reactvue.jpg"
              alt="react vs vue comparison"
              width={400}
              height={400}
              h3="React vs. Vue: A Comparison"
              p="A detailed comparison of React and Vue.js, their pros and cons, and when to use each."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
