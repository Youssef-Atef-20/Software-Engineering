import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [accountNumber, setAccountNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    setError("");

    if (!accountNumber || !password) {
      return setError("Please fill all fields");
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) =>
        u.accountNumber.toString() === accountNumber && u.password === password
    );

    if (!user) {
      return setError("Invalid account number or password");
    }

    localStorage.setItem("currentUser", JSON.stringify(user));
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

            <h2 className="text-lg font-semibold mb-1">→ Login</h2>
            <p className="text-gray-400 text-sm mb-4">
              Enter your credentials to access the bank system
            </p>

            <label className="label">Account Number</label>
            <input
              type="text"
              placeholder="Enter your account number"
              className="atm-input"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
            />

            <label className="label">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="atm-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && (
              <p className="text-red-400 text-sm mb-2">{error}</p>
            )}

            <button
              onClick={handleLogin}
              className="w-full mt-4 py-2 bg-black rounded-lg hover:bg-gray-900 transition"
            >
              Login
            </button>

            <p className="text-center text-blue-400 text-sm mt-4">
              Don’t have an account? <Link to="/signup">Sign up</Link>
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

export default Login;
