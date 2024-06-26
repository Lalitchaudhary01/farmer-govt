import React, { useState } from "react";
import { FaFacebookF, FaGoogle, FaTwitter, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { login, register } from "./auth";
import { useAuth } from "./AuthContext";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/body");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register(email, password);
      navigate("/body");
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10">
      {/* Pills navs */}
      <ul className="flex justify-around mb-3" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${
              activeTab === "login" ? "bg-blue-500 text-white" : "bg-gray-200"
            } py-2 px-4 rounded`}
            onClick={() => setActiveTab("login")}
            role="tab"
            aria-controls="pills-login"
            aria-selected={activeTab === "login"}
          >
            Login
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${
              activeTab === "register"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            } py-2 px-4 rounded`}
            onClick={() => setActiveTab("register")}
            role="tab"
            aria-controls="pills-register"
            aria-selected={activeTab === "register"}
          >
            Register
          </button>
        </li>
      </ul>
      {/* Pills navs */}

      {/* Pills content */}
      <div className="tab-content">
        {activeTab === "login" && (
          <div
            className="tab-pane fade show active"
            id="pills-login"
            role="tabpanel"
            aria-labelledby="tab-login"
          >
            <form
              className="bg-white p-6 rounded shadow-md"
              onSubmit={handleLogin}
            >
              <div className="text-center mb-3">
                <p>Sign in with:</p>
                <div className="flex justify-center space-x-3">
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <FaFacebookF />
                  </button>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <FaGoogle />
                  </button>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <FaTwitter />
                  </button>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <FaGithub />
                  </button>
                </div>
              </div>

              <p className="text-center">or:</p>

              {/* Email input */}
              <div className="mb-4">
                <input
                  type="email"
                  id="loginName"
                  className="form-control w-full border border-gray-300 p-2 rounded"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="loginName" className="form-label">
                  Email or username
                </label>
              </div>

              {/* Password input */}
              <div className="mb-4">
                <input
                  type="password"
                  id="loginPassword"
                  className="form-control w-full border border-gray-300 p-2 rounded"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="loginPassword" className="form-label">
                  Password
                </label>
              </div>

              {/* 2 column grid layout */}
              <div className="flex justify-between items-center mb-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="loginCheck"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="loginCheck">
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
                <a href="#!" className="text-blue-500">
                  Forgot password?
                </a>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded"
              >
                Sign in
              </button>

              {/* Register buttons */}
              <div className="text-center mt-4">
                <p>
                  Not a member?{" "}
                  <a
                    href="#!"
                    className="text-blue-500"
                    onClick={() => setActiveTab("register")}
                  >
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        )}
        {activeTab === "register" && (
          <div
            className="tab-pane fade"
            id="pills-register"
            role="tabpanel"
            aria-labelledby="tab-register"
          >
            <form
              className="bg-white p-6 rounded shadow-md"
              onSubmit={handleRegister}
            >
              <div className="text-center mb-3">
                <p>Sign up with:</p>
                <div className="flex justify-center space-x-3">
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <FaFacebookF />
                  </button>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <FaGoogle />
                  </button>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <FaTwitter />
                  </button>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <FaGithub />
                  </button>
                </div>
              </div>

              <p className="text-center">or:</p>

              {/* Name input */}
              <div className="mb-4">
                <input
                  type="text"
                  id="registerName"
                  className="form-control w-full border border-gray-300 p-2 rounded"
                />
                <label htmlFor="registerName" className="form-label">
                  Name
                </label>
              </div>

              {/* Username input */}
              <div className="mb-4">
                <input
                  type="text"
                  id="registerUsername"
                  className="form-control w-full border border-gray-300 p-2 rounded"
                />
                <label htmlFor="registerUsername" className="form-label">
                  Username
                </label>
              </div>

              {/* Email input */}
              <div className="mb-4">
                <input
                  type="email"
                  id="registerEmail"
                  className="form-control w-full border border-gray-300 p-2 rounded"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="registerEmail" className="form-label">
                  Email
                </label>
              </div>

              {/* Password input */}
              <div className="mb-4">
                <input
                  type="password"
                  id="registerPassword"
                  className="form-control w-full border border-gray-300 p-2 rounded"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="registerPassword" className="form-label">
                  Password
                </label>
              </div>

              {/* Repeat Password input */}
              <div className="mb-4">
                <input
                  type="password"
                  id="registerRepeatPassword"
                  className="form-control w-full border border-gray-300 p-2 rounded"
                />
                <label htmlFor="registerRepeatPassword" className="form-label">
                  Repeat password
                </label>
              </div>

              {/* Checkbox */}
              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="registerCheck"
                  defaultChecked
                  aria-describedby="registerCheckHelpText"
                />
                <label className="form-check-label" htmlFor="registerCheck">
                  {" "}
                  I have read and agree to the terms{" "}
                </label>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded"
              >
                Sign up
              </button>
            </form>
          </div>
        )}
      </div>
      {/* Pills content */}
    </div>
  );
};

export default Admin;
