import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    setError("");

    if (
      !form.name ||
      !form.username ||
      !form.password ||
      !form.confirmPassword
    ) {
      return setError("All fields are required");
    }

    if (form.password !== form.confirmPassword) {
      return setError("Passwords do not match");
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find(
      (u) => u.username === form.username
    );

    if (exists) {
      return setError("Username already exists");
    }

    const newUser = {
      name: form.name,
      username: form.username,
      password: form.password,
      accountNumber: Math.floor(10000000000 + Math.random() * 90000000000),
      balance: 0,
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    localStorage.setItem("isAuth", "true");

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center">
      <div className="w-[420px] bg-[#0b1220] rounded-2xl overflow-hidden shadow-2xl text-white">

        
        <div className="bg-blue-500 py-5 text-center font-semibold">
          💳 BANK'S SYSTEM
        </div>

      
        <div className="p-6">
          <div className="bg-[#121a2a] rounded-xl p-5">

            <h2 className="text-lg font-semibold mb-1">👤 Sign Up</h2>
            <p className="text-gray-400 text-sm mb-4">
              Create a new account to use the bank system
            </p>

            <div className="grid grid-cols-1 gap-4 mb-4">
  <div>
    <label className="label">Full Name</label>
    <input
      name="name"
      placeholder="Enter your full name"
      className="atm-input"
      onChange={handleChange}
    />
  </div>

  <div>
    <label className="label">Username</label>
    <input
      name="username"
      placeholder="Choose a username"
      className="atm-input"
      onChange={handleChange}
    />
  </div>

  <div>
    <label className="label">Password</label>
    <input
      type="password"
      name="password"
      placeholder="Create a password"
      className="atm-input"
      onChange={handleChange}
    />
  </div>

  <div>
    <label className="label">Confirm Password</label>
    <input
      type="password"
      name="confirmPassword"
      placeholder="Re-enter your password"
      className="atm-input"
      onChange={handleChange}
    />
  </div>
</div>


            <div className="bg-blue-900/40 border border-blue-500 text-blue-300 text-sm rounded-lg p-3 mb-3">
              Your account number will be automatically generated
            </div>

            {error && (
              <p className="text-red-400 text-sm mb-2">{error}</p>
            )}

            <button
              onClick={handleSignup}
              className="w-full py-2 bg-black rounded-lg hover:bg-gray-900 transition"
            >
              Sign Up
            </button>

            <p className="text-center text-blue-400 text-sm mt-4">
              Already have an account?{" "}
              <Link to="/login">Login</Link>
            </p>
          </div>
        </div>

        
        <div className="text-center text-gray-400 text-sm py-3 border-t border-gray-700">
          Thank you for using our banking service
        </div>
      </div>
    </div>
  );
};

export default SignUp;
