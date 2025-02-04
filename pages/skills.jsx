export default function Skills() {
  return (
    <div className="mt-10 flex flex-col justify-center">
      <div className="grid grid-cols-2 p-20 gap-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl mb-8 text-gray-800 font-bold">
            Technical Skills
          </h2>
          <div className="flex justify-between">
            {" "}
            <span>React</span>
            <span>60%</span>{" "}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              class="bg-blue-600 h-3 rounded-full"
              style={{ width: 60 + "%" }}
            ></div>
          </div>
          <div className="flex justify-between">
            {" "}
            <span>Javascript</span>
            <span>70%</span>{" "}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              class="bg-blue-600 h-3 rounded-full"
              style={{ width: 70 + "%" }}
            ></div>
          </div>
          <div className="flex justify-between">
            {" "}
            <span>Html</span>
            <span>85%</span>{" "}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              class="bg-blue-600 h-3 rounded-full"
              style={{ width: 85 + "%" }}
            ></div>
          </div>

          <div className="flex justify-between">
            {" "}
            <span>Css</span>
            <span>80%</span>{" "}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              class="bg-blue-600 h-3 rounded-full"
              style={{ width: 80 + "%" }}
            ></div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl mb-8 text-gray-800 font-bold">Soft Skills</h2>
          <div className="flex flex-wrap gap-4">
            {" "}
            <span class="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-base">
              Problem Solving
            </span>{" "}
            <span class="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-base">
              Teamwork
            </span>
            <span class="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-base">
              Communication
            </span>
            <span class="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-base">
              Creativity
            </span>
            <span class="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-base">
              Adaptability
            </span>
            <span class="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-base">
              Adaptability
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
