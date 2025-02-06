import { createContext, useState, useEffect } from "react";

// Create context
const AppContext = createContext();

// Provider component
export const AppProvider = ({ children }) => {
  const [state, setState] = useState("Hello from Context!");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState("");
  const [projectUrl, setProjectUrl] = useState("");

  const [projectsText, setProjectsText] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedProjects = localStorage.getItem("Projects");
      if (storedProjects) {
        setProjectsText(JSON.parse(storedProjects));
      }
    }
  }, []); // Runs only once when the component mounts

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("Projects", JSON.stringify(projectsText));
    }
  }, [projectsText]); // Runs when projectsText changes

  function handleAnswer() {
    const newProject = {
      ImgUrl: projectUrl.trim(),
      title: title.trim(),
      description: description.trim(),
      skillsUsed: skills.split(" ").map((skill) => skill.trim()),
    };

    const updatedProjects = [...projectsText, newProject];
    setProjectsText(updatedProjects);

    if (typeof window !== "undefined") {
      localStorage.setItem("Projects", JSON.stringify(updatedProjects));
    }

    // Reset form fields
    setTitle("");
    setDescription("");
    setSkills("");
    setProjectUrl("");

    console.log("Updated projects:", updatedProjects);
  }

  return (
    <AppContext.Provider
      value={{
        state,
        setState,
        projectsText,
        setProjectsText,
        handleAnswer,
        setProjectUrl,
        setSkills,
        setDescription,
        setTitle,
        description,
        title,
        skills,
        projectUrl,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
