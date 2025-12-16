const Layout = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center">
      {children}
    </div>
  );
};

export default Layout;
