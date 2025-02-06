import { createContext, useContext, useState } from "react";

// Create context
const AppContext = createContext();

// Provider component
export const AppProvider = ({ children }) => {
  const [state, setState] = useState("Hello from Context!");

  // const [title, setTitle] = useState("");
  // const [description, Setdescription] = useState("");
  const [projectsText, setprojectsText] = useState([
    {
      id: 0,
      title: "Javascript project first ever",
      description:
        "This is one of the best project i have ever done in my entire life sheeesh",
      skillsUsed: ["Javascript", "html", "Css", "React", "typescript"],
    },
    {
      id: 0,
      title: "Javascript project first ever",
      description:
        "This is one of the best project i have ever done in my entire life sheeesh",
      skillsUsed: ["Javascript", "html", "Css", "React", "typescript"],
    },
  ]);

  return (
    <AppContext.Provider
      value={{ state, setState, projectsText, setprojectsText }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
