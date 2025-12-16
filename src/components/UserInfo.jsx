const UserInfo = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <div className="bg-[#1e293b] rounded-xl p-4 space-y-4">
      <Info label="Account Holder" value={user.name} />
      <Info label="Account Number" value={user.accountNumber} />
      <Info label="Username" value={user.username} />
      <Info label="Current Balance" value={`$${user.balance}`} highlight />
    </div>
  );
};

const Info = ({ label, value, highlight }) => (
  <div>
    <p className="text-gray-400 text-sm">{label}</p>
    <p className={`text-lg ${highlight ? "text-green-400" : ""}`}>{value}</p>
  </div>
);

export default UserInfo;
