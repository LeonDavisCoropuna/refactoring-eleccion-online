import React, { useState } from "react";
import { Auth } from "./interfaces/auth.interface";
import { loginService } from "./services/loginService";

export const Login = () => {
  const [auth, setAuth] = useState<Auth>({ password: "", username: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuth({ ...auth, [e.target.name]: e.target.value });
    setError(null);
  };

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!auth.password || !auth.username) {
      setError("Todos los campos son obligatorios");
      return;
    }

    const loginError = await loginService(auth);

    if (loginError) {
      setError(loginError);
    } else {
      // Inicio de sesión exitoso, puedes redirigir al usuario a otra página o realizar otras acciones
      console.log("Login exitoso");
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-5 bg-gray-800 p-10 rounded-2xl shadow-md shadow-slate-950">
        <div className="flex">
          <h1 className="w-24">Authname:</h1>
          <input
            className="w-48 rounded-md py-1 text-black pl-2"
            value={auth.username}
            onChange={handleChange}
            name="Authname"
          />
        </div>
        <div className="flex">
          <h1 className="w-24">Password:</h1>
          <input
            className="w-48 rounded-md py-1 text-black pl-2"
            value={auth.password}
            onChange={handleChange}
            name="password"
            type="password"
          />
        </div>
        {error && <h1 className="text-red-500 font-light">{error}</h1>}
        <div>
          <button
            className="bg-blue-700 rounded-md hover:bg-sky-300 hover:text-black w-72 py-2"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};