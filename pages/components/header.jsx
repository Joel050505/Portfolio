import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { RxCrossCircled } from "react-icons/rx";

export default function Header() {
  const [activePage, SetActivePage] = useState("home");
  const [showModal, setShowModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const credentials = {
    username: process.env.NEXT_PUBLIC_USERNAME,
    password: process.env.NEXT_PUBLIC_PASSWORD,
  };

  const [inputValues, setInputValues] = useState({
    username: "",
    password: "",
  });

  function handleLogin() {
    if (
      inputValues.password == credentials.password &&
      inputValues.username == credentials.username
    ) {
      setLoggedIn(true);
      window.location.href = "/admin";
    } else {
      alert("Username or password was wrong");
    }
  }

  function handleClick(page) {
    SetActivePage(page);
  }

  return (
    <div>
      <div className="p-4 flex justify-between shadow-lg items-center">
        {" "}
        <div className="pl-16">
          <h1 className="text-2xl font-bold text-gray-800">Joel Kilic</h1>
        </div>{" "}
        <div className="flex space-x-6 items-center">
          <Link
            onClick={() => {
              handleClick("home");
            }}
            className={`${
              activePage === "home"
                ? "text-blue-600 font-bold underline underline-offset-8"
                : "text-black"
            }`}
            href="/home"
          >
            Home
          </Link>
          <Link
            onClick={() => {
              handleClick("about");
            }}
            className={`${
              activePage === "about"
                ? "text-blue-600 font-bold underline underline-offset-8"
                : "text-black"
            }`}
            href="/about"
          >
            About
          </Link>
          <Link
            onClick={() => {
              handleClick("projects");
            }}
            className={`${
              activePage === "projects"
                ? "text-blue-600 font-bold underline underline-offset-8"
                : "text-black"
            }`}
            href="/projects"
          >
            Projects
          </Link>
          <Link
            onClick={() => {
              handleClick("skills");
            }}
            className={`${
              activePage === "skills"
                ? "text-blue-600 font-bold underline underline-offset-8"
                : "text-black"
            }`}
            href="/skills"
          >
            Skills
          </Link>
          <Link
            onClick={() => {
              handleClick("contact");
            }}
            className={`${
              activePage === "contact"
                ? "text-blue-600 font-bold underline underline-offset-8"
                : "text-black"
            }`}
            href="/contact"
          >
            Contact
          </Link>
        </div>
        <div className="pr-16 flex items-center gap-10">
          <button className="p-2 bg-blue-600 text-white rounded-xl w-24 font-bold hover:bg-blue-700 transition-all ease-out duration-300">
            Hire Me
          </button>
          <button
            onClick={() => {
              if (!showModal) {
                setShowModal(true);
                console.log(showModal);
              } else if (showModal) {
                setShowModal(false);
                console.log(showModal);
              }
            }}
          >
            <CgProfile size={40} className="hover:text-gray-600" />
          </button>
        </div>
      </div>
      {showModal ? (
        <div className="flex justify-center">
          <div className="flex flex-col justify-center items-center gap-4 bg-white shadow-md w-74 p-10 absolute rounded-xl mt-10 ">
            <RxCrossCircled
              onClick={() => {
                setShowModal(false);
              }}
              size={25}
              className=" text-red-500 absolute right-4 top-4 cursor-pointer hover:text-red-700 bg-white"
            />

            <p className="bg-white font-bold underline underline-offset-2">
              Admin log in page
            </p>
            <div className="bg-white flex flex-col">
              <label htmlFor="" className="bg-white">
                Enter username
              </label>
              <input
                onChange={(e) => {
                  setInputValues({ ...credentials, username: e.target.value });
                }}
                className="p-2 rounded-md border-2 border-gray-500 bg-white"
                type="text"
                placeholder="Username..."
              />
            </div>
            <div className="bg-white flex flex-col">
              <label className="bg-white" htmlFor="password">
                Enter password
              </label>
              <input
                onChange={(e) => {
                  setInputValues({ ...credentials, password: e.target.value });
                }}
                id="password"
                className="bg-white p-2 rounded-md border-2 border-gray-500"
                type="text"
                placeholder="Password"
              />
            </div>
            <div>
              <button
                onClick={handleLogin}
                className="p-2 bg-gray-200 w-28 rounded-xl hover:bg-gray-300"
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
