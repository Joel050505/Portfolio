import { useContext } from "react";
import PortfolioContext from "./contexts/PortfolioContext";
export default function adminpage() {
  const {} = useContext(PortfolioContext);

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
    </div>
  );
}
