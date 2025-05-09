// src/pages/SignUp.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css"; // Optional: Import any specific styles

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log(form);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-xl w-[900px] flex">
        {/* Form Section */}
        <div className="w-1/2 p-10">
          <h2 className="text-3xl font-bold mb-6">Sign up</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full border-b py-2 focus:outline-none"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full border-b py-2 focus:outline-none"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full border-b py-2 focus:outline-none"
              value={form.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="repeatPassword"
              placeholder="Repeat your password"
              className="w-full border-b py-2 focus:outline-none"
              value={form.repeatPassword}
              onChange={handleChange}
              required
            />

            <div className="flex items-center">
              <input
                type="checkbox"
                name="agree"
                checked={form.agree}
                onChange={handleChange}
                className="mr-2"
                required
              />
              <label>
                I agree all statements in{" "}
                <a href="#" className="text-blue-600 underline">
                  Terms of service
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600"
            >
              Register
            </button>
          </form>
          <p className="mt-4 text-sm">
            <Link to="/login" className="text-blue-500 underline">
              I am already a member
            </Link>
          </p>
        </div>

        {/* Image Section */}
        <div className="w-1/2 flex items-center justify-center p-10">
          <img
            src="/tumblr_mvi9vtykKP1sezokho1_250.gif"
            alt="signup illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
