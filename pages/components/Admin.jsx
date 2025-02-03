import { useState } from "react";

export default function Admin() {
  const [inputValues, setInputValues] = useState({
    username: "",
    password: "",
  });
  const [loggedIn, setLoggedIn] = useState(false);

  const credentials = {
    username: process.env.NEXT_PUBLIC_USERNAME,
    password: process.env.NEXT_PUBLIC_PASSWORD,
  };

  function handleLogin() {
    if (
      inputValues.password == credentials.password &&
      inputValues.username == credentials.username
    ) {
      setLoggedIn(true);
    } else {
      alert("Username or password was wrong");
    }
  }

  function handleLoggut() {
    setLoggedIn(false);
    setInputValues({ ...credentials, username: "", password: "" });
  }

  if (!loggedIn) {
    return (
      <div className="border-2 p-20 border-gray rounded-2xl flex gap-4">
        <input
          type="text"
          name=""
          id=""
          className="bg-gray-300 p-2 rounded-xl"
          placeholder="UserName..."
          onChange={(e) => {
            setInputValues({ ...credentials, username: e.target.value });
          }}
        />

        <input
          onChange={(e) => {
            setInputValues({ ...credentials, password: e.target.value });
          }}
          className="bg-gray-300 p-2 rounded-xl"
          type="password"
          placeholder="Password..."
        />
        <button
          onClick={handleLogin}
          className="p-2 bg-green-400 rounded-2xl w-44"
        >
          Log in
        </button>
      </div>
    );
  }

  return (
    <div className="border-gray rounded-xl flex flex-col border-2 p-20">
      <h1>Du är nu inloggad </h1>
      <button
        className="p-2 bg-red-500 text-white border-2 rounded-xl"
        onClick={handleLoggut}
      >
        Log out
      </button>
    </div>
  );
}
