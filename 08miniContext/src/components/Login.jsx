import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    //by default values wil go somewhere through url and post method
    setUser({ username, password });
  };
  return (
    <div>
      <h2 className="mb-7  text-3xl text-center">Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
        className="mb-3 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-4 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
      />
      <button
        onClick={handleSubmit}
        className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-200"
      >
        Submit
      </button>
    </div>
  );
}

export default Login;
