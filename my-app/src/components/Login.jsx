// src/pages/Login.jsx
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md flex w-[800px]">
        <div className="w-1/2 pr-6">
          <h2 className="text-3xl font-bold mb-6">Login</h2>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border px-4 py-2 mb-3 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border px-4 py-2 mb-3 rounded"
          />
          <button className="bg-blue-500 text-white px-6 py-2 rounded">
            Login
          </button>
          <p className="mt-4 text-sm">
            <Link to="/signup" className="text-blue-500 underline">
              Don't have an account? Sign up
            </Link>
          </p>
        </div>
        <div className="w-1/2">
          <img src="/tumblr_mvi9vtykKP1sezokho1_250.gif" alt="desk" />
        </div>
      </div>
    </div>
  );
}
