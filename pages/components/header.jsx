import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import Link from "next/link";

export default function Header() {
  const [activePage, SetActivePage] = useState("home");

  function handleClick(page) {
    SetActivePage(page);
  }

  return (
    <div className="p-4 flex justify-between shadow-lg items-center">
      {" "}
      <div className="pl-16">
        <h1 className="text-2xl font-bold text-gray-800">Joel Kilic</h1>
      </div>{" "}
      <div className="flex space-x-6">
        <Link
          onClick={() => {
            handleClick("home");
          }}
          className={`${
            activePage === "home"
              ? "text-blue-600 font-bold underline underline-offset-8"
              : "text-black"
          }`}
          href="/home"
        >
          Home
        </Link>
        <Link
          onClick={() => {
            handleClick("about");
          }}
          className={`${
            activePage === "about"
              ? "text-blue-600 font-bold underline underline-offset-8"
              : "text-black"
          }`}
          href="/about"
        >
          About
        </Link>
        <Link
          onClick={() => {
            handleClick("projects");
          }}
          className={`${
            activePage === "projects"
              ? "text-blue-600 font-bold underline underline-offset-8"
              : "text-black"
          }`}
          href="/projects"
        >
          Projects
        </Link>
        <Link
          onClick={() => {
            handleClick("skills");
          }}
          className={`${
            activePage === "skills"
              ? "text-blue-600 font-bold underline underline-offset-8"
              : "text-black"
          }`}
          href="/skills"
        >
          Skills
        </Link>
        <Link
          onClick={() => {
            handleClick("contact");
          }}
          className={`${
            activePage === "contact"
              ? "text-blue-600 font-bold underline underline-offset-8"
              : "text-black"
          }`}
          href="/contact"
        >
          Contact
        </Link>
      </div>
      <div className="pr-16">
        <button className="p-2 bg-blue-600 text-white rounded-xl w-24 font-bold">
          Hire Me
        </button>
      </div>
    </div>
  );
}
