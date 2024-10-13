import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between px-14 space-y-6 md:space-y-0 md:space-x-10">
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold pb-2">Sadaf Shahab</h2>

            <form className="mt-4 flex flex-col md:flex-row md:items-center">
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 md:mr-2 mb-2 md:mb-0"
                required
              />
              <button
                type="submit"
                className="p-2 rounded bg-blue-600 hover:bg-blue-500"
              >
                Subscribe
              </button>
            </form>
          </div>

          <nav className="mb-6 md:mb-0">
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center md:justify-items-start">
              <li>
                <Link href="/" className="hover:text-gray-300 hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-300 hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gray-300 hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gray-300 hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-gray-300 hover:underline">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/testimonial" className="hover:text-gray-300 hover:underline">
                  Testimonial
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300 hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-8 justify-items-center mb-2">
            <Link
              href="https://www.linkedin.com/in/sadaf-shahab-ssr123"
              target="_blank"
              className="hover:text-gray-300"
            >
              <FontAwesomeIcon icon={faLinkedin} width={25} height={25} />
            </Link>
            <Link
              href="https://www.github.com/sadafshahab12"
              target="_blank"
              className="hover:text-gray-300"
            >
              <FontAwesomeIcon icon={faGithub} width={25} height={25} />
            </Link>
            <Link
              href="https://x.com/sadafshahab12"
              target="_blank"
              className="hover:text-gray-300"
            >
              <FontAwesomeIcon icon={faTwitter} width={25} height={25} />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61556555833599"
              target="_blank"
              className="hover:text-gray-300"
            >
              <FontAwesomeIcon icon={faFacebook} width={25} height={25} />
            </Link>
            <Link
              href="https://www.instagram.com/sadafshahab12/"
              target="_blank"
              className="hover:text-gray-300"
            >
              <FontAwesomeIcon icon={faInstagram} width={25} height={25} />
            </Link>
            <Link
              href="http://www.youtube.com/@SadafShahab-ssr12-Webdeveloper"
              target="_blank"
              className="hover:text-gray-300"
            >
              <FontAwesomeIcon icon={faYoutube} width={25} height={25} />
            </Link>
          </div>
        </div>
      </footer>
      <div className="bg-orange-300 h-20 pb-4 flex justify-center items-center text-center">
  <p className="text-gray-900 text-sm md:text-base lg:text-lg">
    © 2024 Sadaf Shahab. All rights reserved.
  </p>
</div>

    </>
  );
};

export default Footer;
