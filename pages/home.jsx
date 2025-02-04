import { useState } from "react";
import Admin from "./components/Admin";
import Link from "next/link";
import { useAppContext } from "./contexts/PortfolioContext";

export default function Home() {
  const { state, setState } = useAppContext();

  return (
    <div className="flex justify-center items-center gap-20 mt-10 bg-gray-50">
      <div className="flex flex-col gap-2">
        {" "}
        <h1 className="text-gray-800 font-bold text-5xl">
          Hello, I'm <span className="text-blue-600">Joel Kilic</span>
        </h1>
        <p className="text-xl flex items-center text-gray-600 mb-8">
          Front end Developer | Student | Chas Academy{" "}
        </p>
        <div className="flex gap-4">
          <button className="p-2 bg-blue-600 text-white rounded-md w-32">
            <Link href="/projects" className="bg-blue-600">
              View Projects
            </Link>
          </button>
          <button className="p-2 bg-gray-200 rounded-md w-32">
            Download CV
          </button>
        </div>
      </div>
      <div>
        <img
          src=""
          alt="Profile"
          className="h-96 w-96 object-cover rounded-full shadow-lg"
        />
      </div>
    </div>
  );
}
