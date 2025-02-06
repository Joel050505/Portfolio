import { useContext } from "react";
import { useState } from "react";
import PortfolioContext from "./contexts/PortfolioContext";
export default function adminpage() {
  const {
    state,
    setState,
    projectsText,
    setprojectsText,
    handleAnswer,
    setProjectUrl,
    setSkills,
    setDescription,
    setTitle,
    description,
    title,
    skills,
    projectUrl,
  } = useContext(PortfolioContext);

  return (
    <div>
      <button
        onClick={() => {
          window.location.href = "/home";
        }}
        className="p-2 bg-red-600 text-white rounded-xl m-2"
      >
        Log out
      </button>
      <div className="flex flex-col w-56 gap-4">
        <input
          className="p-2 border border-gray-400 rounded-xl"
          type="text"
          placeholder="Enter a URL..."
          value={projectUrl}
          onChange={(e) => setProjectUrl(e.target.value)}
        />
        <input
          className="p-2 border border-gray-400 rounded-xl"
          type="text"
          placeholder="Enter a title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="p-2 border border-gray-400 rounded-xl"
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          value={skills}
          className="p-2 border border-gray-400 rounded-xl"
          type="text"
          placeholder="Enter skills..."
          onChange={(e) => setSkills(e.target.value)}
        />
        <button
          onClick={() => {
            handleAnswer();
          }}
          className="p-2 bg-blue-600 text-white rounded-xl w-56 font-bold hover:bg-blue-700 transition-all ease-out duration-300"
        >
          Create project card
        </button>
      </div>
      {projectsText.map((item, index) => {
        return (
          <div key={index} className="grid grid-cols-3 gap-8 p-10">
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <img
                src={`${item.ImgUrl}`}
                alt="Infinity running game"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {item.skillsUsed.map((item, index) => {
                    return (
                      <span
                        key={index}
                        className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs"
                      >
                        {item}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
