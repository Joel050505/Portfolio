import { useState } from "react";
import { FaGithubSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <div className="md:flex-row flex-col flex justify-center items-center gap-20 mt-10 mb-28 bg-gray-50">
        <div className="flex flex-col gap-2">
          {" "}
          <h1 className="text-gray-800 font-bold text-5xl">
            Hello, I'm <span className="text-blue-600">Joel Kilic</span>
          </h1>
          <p className="text-xl flex items-center text-gray-600 mb-8">
            Front end Developer | Student | Chas Academy{" "}
          </p>
          <div className="flex gap-4">
            <Link href="/projects">
              <button className="p-2 bg-blue-600 text-white rounded-md w-32 hover:bg-blue-700 transition-all ease-out duration-300">
                View Projects
              </button>
            </Link>
            <button className="p-2 bg-gray-200 rounded-md w-32 hover:bg-gray-300 transition-all ease-out duration-300">
              Download CV
            </button>
          </div>
        </div>
        <div>
          <img
            src="/blank-profile-pic.webp"
            alt="Profile"
            className="h-96 w-96 object-cover rounded-full shadow-lg"
          />
        </div>
      </div>
      {/* <div className="flex justify-center flex-col gap-4 items-center w-full sticky sm:absolute bottom-0 pt-10">
        <h4 className="text-2xl font-bold text-center text-gray-800">
          Get in Touch
        </h4>
        <div className="text-center">
          <p className="text-gray-700">
            Interested in collaborating or have a project in mind? Feel free to
            reach out!
          </p>
        </div>
        <div className="flex gap-4">
          <FaGithubSquare
            size={35}
            className="hover:text-gray-700 hover:cursor-pointer"
          />
          <FaLinkedin
            size={35}
            className="hover:text-gray-700 hover:cursor-pointer"
          />

          <FaTwitterSquare
            size={35}
            className="hover:text-gray-700 hover:cursor-pointer"
          />
        </div>
        <div className="w-full bg-gray-700 text-white text-center p-4 font-bold">
          © 2025 Joel Kilic. All Rights Reserved.
        </div>
      </div> */}
      <Footer />
    </div>
  );
}
