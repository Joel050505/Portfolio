import Footer from "./components/footer";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

export default function Skills() {
  return (
    <div>
      <div className="mt-10 flex flex-col justify-center mb-20">
        <div className="grid grid-cols-2 p-20 gap-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl mb-8 text-gray-800 font-bold">
              Technical Skills
            </h2>
            <div className="flex justify-between items-center">
              {" "}
              <span className="flex items-center gap-2">
                React <FaReact className="text-blue-400" size={25} />
              </span>
              <span>60%</span>{" "}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-blue-600 h-3 rounded-full"
                style={{ width: 60 + "%" }}
              ></div>
            </div>
            <div className="flex justify-between items-center">
              {" "}
              <span className="flex items-cente gap-2">
                Javascript{" "}
                <IoLogoJavascript size={25} className="text-yellow-500" />
              </span>
              <span>70%</span>{" "}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-blue-600 h-3 rounded-full"
                style={{ width: 70 + "%" }}
              ></div>
            </div>
            <div className="flex justify-between">
              {" "}
              <span className="flex items-center gap-2">
                Html <FaHtml5 className="text-orange-500" size={25} />
              </span>
              <span>85%</span>{" "}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-blue-600 h-3 rounded-full"
                style={{ width: 85 + "%" }}
              ></div>
            </div>

            <div className="flex justify-between">
              {" "}
              <span className="flex items-center gap-2">
                Css
                <FaCss3Alt size={25} className="text-blue-600" />
              </span>
              <span>80%</span>{" "}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-blue-600 h-3 rounded-full"
                style={{ width: 80 + "%" }}
              ></div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl mb-8 text-gray-800 font-bold">
              Soft Skills
            </h2>
            <div className="flex flex-wrap gap-4">
              {" "}
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-base">
                Problem Solving
              </span>{" "}
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-base">
                Teamwork
              </span>
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-base">
                Communication
              </span>
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-base">
                Creativity
              </span>
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-base">
                Adaptability
              </span>
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-base">
                Adaptability
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
