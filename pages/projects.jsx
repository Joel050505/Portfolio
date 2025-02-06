import { useState } from "react";
import Footer from "./components/footer";
import { useContext } from "react";
import AppContext from "./contexts/PortfolioContext";

export default function Projects() {
  const { state, setState, projectsText, setprojectsText } =
    useContext(AppContext);

  return (
    <div>
      <div className="mt-10 flex flex-col container mx-auto mb-4">
        <div>
          {" "}
          <h1 className="text-center text-4xl font-bold text-gray-800">
            My projects
          </h1>{" "}
        </div>
        <div className="grid md:grid-cols-3 gap-8 p-10 ">
          {projectsText.map((item) => {
            return (
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src=""
                  alt="Infinity running game"
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.skillsUsed.map((item) => {
                      return (
                        <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs">
                          {item}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src=""
              alt="Infinity running game"
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Infinity running game
              </h3>
              <p className="text-gray-700">
                Infinity running game, with Javascript,Html & Css
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs">
                  Css
                </span>
                <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs">
                  Javascript
                </span>
                <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs">
                  Html
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src=""
              alt="Infinity running game"
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Infinity running game
              </h3>
              <p className="text-gray-700">
                Infinity running game, with Javascript,Html & Css
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs">
                  Css
                </span>
                <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs">
                  Javascript
                </span>
                <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs">
                  Html
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
