import { FaGithubSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex justify-center flex-col gap-4 items-center w-full absolute bottom-0">
      <h4 className="text-2xl font-bold text-center text-gray-800">
        Get in Touch
      </h4>
      <div className="text-center">
        <p className="text-gray-700">
          Interested in collaborating or have a project in mind? Feel free to
          reach out!
        </p>
      </div>
      <div className="flex gap-4">
        <FaGithubSquare
          size={35}
          className="hover:text-gray-700 hover:cursor-pointer"
        />
        <FaLinkedin
          size={35}
          className="hover:text-gray-700 hover:cursor-pointer"
        />

        <FaTwitterSquare
          size={35}
          className="hover:text-gray-700 hover:cursor-pointer"
        />
      </div>
      <div className="w-full bg-gray-700 text-white text-center p-4 font-bold">
        © 2025 Joel Kilic. All Rights Reserved.
      </div>
    </div>
  );
}
