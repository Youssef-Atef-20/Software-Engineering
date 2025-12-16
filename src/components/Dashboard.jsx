import { useState } from "react";
import UserInfo from "./UserInfo";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("info");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("isAuth");
    navigate("/");
  };

  return (
    <div className="w-[520px] bg-[#0b1220] rounded-2xl overflow-hidden shadow-2xl text-white">

      {/* Header */}
      <div className="bg-blue-500 px-6 py-4 flex justify-between items-center">
        <span className="font-semibold">💳 BANK'S SYSTEM</span>
        <button
          onClick={logout}
          className="bg-red-500 px-4 py-1 rounded-md text-sm"
        >
          Logout
        </button>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-3 gap-2 p-4 bg-[#0f172a]">
        <Tab label="User Info" active={activeTab === "info"} onClick={() => setActiveTab("info")} />
        <Tab label="Deposit" active={activeTab === "deposit"} onClick={() => setActiveTab("deposit")} />
        <Tab label="Withdraw" active={activeTab === "withdraw"} onClick={() => setActiveTab("withdraw")} />
      </div>

      {/* Content */}
      <div className="p-5 bg-[#0f172a]">
        {activeTab === "info" && <UserInfo />}
        {activeTab === "deposit" && <Deposit />}
        {activeTab === "withdraw" && <Withdraw />}
      </div>

      {/* Footer */}
      <div className="text-center text-gray-400 text-sm py-3 border-t border-gray-700">
        Thank you for using our banking service
      </div>
    </div>
  );
};

const Tab = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`py-3 rounded-lg text-sm font-medium ${
      active ? "bg-black text-white" : "bg-white text-black"
    }`}
  >
    {label}
  </button>
);

export default Dashboard;
