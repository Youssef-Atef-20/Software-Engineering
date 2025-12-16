import { useState } from "react";

const Withdraw = () => {
  const [amount, setAmount] = useState("");

  const handleWithdraw = () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (Number(amount) > user.balance) return;

    const users = JSON.parse(localStorage.getItem("users"));

    user.balance -= Number(amount);

    const updatedUsers = users.map(u =>
      u.username === user.username ? user : u
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("currentUser", JSON.stringify(user));

    setAmount("");
  };

  return (
    <div className="bg-[#1e293b] rounded-xl p-4 space-y-4">
      <p className="text-gray-400">Current Balance</p>
      <p className="text-green-400 text-lg">${JSON.parse(localStorage.getItem("currentUser")).balance}</p>

      <input
        type="number"
        placeholder="Enter amount"
        className="atm-input"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button
        onClick={handleWithdraw}
        className="w-full bg-black py-2 rounded-lg"
      >
        Withdraw
      </button>
    </div>
  );
};

export default Withdraw;
