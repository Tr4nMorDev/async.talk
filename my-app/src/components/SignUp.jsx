// src/pages/SignUp.jsx
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md flex w-[800px]">
        <div className="w-1/2 pr-6">
          <h2 className="text-3xl font-bold mb-6">Sign up</h2>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border px-4 py-2 mb-3 rounded"
          />
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
          <input
            type="password"
            placeholder="Repeat your password"
            className="w-full border px-4 py-2 mb-3 rounded"
          />
          <div className="mb-3">
            <label className="text-sm">
              <input type="checkbox" className="mr-2" />I agree all statements
              in{" "}
              <a href="#" className="text-blue-500 underline">
                Terms of service
              </a>
            </label>
          </div>
          <button className="bg-blue-500 text-white px-6 py-2 rounded">
            Register
          </button>
          <p className="mt-4 text-sm">
            <Link to="/login" className="text-blue-500 underline">
              I am already member
            </Link>
          </p>
        </div>
        <div className="w-1/2">
          <img src="/6b854167-9e9c-45f1-92b7-425194394721.png" alt="desk" />
        </div>
      </div>
    </div>
  );
}
