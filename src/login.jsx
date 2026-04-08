import { useState, useContext } from "react";
import API from "../api/axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await API.post("/auth/login", {
      email,
      password,
    });

    login(res.data);

    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center h-screen">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 shadow-lg"
      >

        <h2 className="text-2xl mb-4">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-3"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-3"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-red-600 text-white p-2 w-full">
          Login
        </button>

      </form>

    </div>
  );
};

export default Login;