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
    handleDelete,
    newSkills,
    setNewSkills,
    newDescription,
    setNewDescription,
    newTitle,
    setNewTitle,
    handleEdit,
    newProjectUrl,
    setNewProjectUrl,
  } = useContext(PortfolioContext);

  return (
    <div>
      <button
        onClick={() => {
          window.location.href = "/";
        }}
        className="p-2 bg-red-600 text-white rounded-xl m-2"
      >
        Log out
      </button>
      <div className="flex gap-10">
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
        <div className="flex flex-col w-56 gap-4">
          <input
            className="p-2 border border-gray-400 rounded-xl"
            type="text"
            placeholder="Enter a URL..."
            value={newProjectUrl}
            onChange={(e) => setNewProjectUrl(e.target.value)}
          />
          <input
            className="p-2 border border-gray-400 rounded-xl"
            type="text"
            placeholder="Enter a title..."
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <input
            className="p-2 border border-gray-400 rounded-xl"
            type="text"
            placeholder="Enter description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <input
            value={newSkills}
            className="p-2 border border-gray-400 rounded-xl"
            type="text"
            placeholder="Enter skills..."
            onChange={(e) => setNewSkills(e.target.value)}
          />
          <button className="p-2 bg-blue-600 text-white rounded-xl w-56 font-bold hover:bg-blue-700 transition-all ease-out duration-300">
            Save edit
          </button>
        </div>
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
                <div className="flex gap-4 mt-2">
                  <button
                    className="bg-red-500 text-white rounded p-2 font-bold"
                    onClick={() => {
                      handleDelete(index);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      setNewDescription(item.description);
                      setNewProjectUrl(item.ImgUrl);
                      setNewTitle(item.title);
                      setNewSkills(item.skillsUsed);
                    }}
                    className="p-2 bg-orange-500 text-white font-bold rounded-md"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      const updatedProject = {
                        ImgUrl: newProjectUrl,
                        title: newTitle,
                        description: newDescription,
                        skills: newSkills,
                      };
                      handleEdit(index, updatedProject);
                      setNewDescription("");
                      setNewProjectUrl("");
                      setNewSkills("");
                      setNewTitle("");
                    }}
                    className="p-2 bg-blue-600 text-white rounded-xl w-56 font-bold hover:bg-blue-700 transition-all ease-out duration-300"
                  >
                    Save edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
