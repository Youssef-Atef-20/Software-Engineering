import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./layout/Layout";
import Auth from "./components/Auth";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import Snowfall from "react-snowfall";

function App() {
  const isAuth = localStorage.getItem("isAuth");

  return (
    
    <Layout>
      <Routes>

        <Snowfall color="#82C3D9" />
        <Route
          path="/"
          element={
            isAuth ? <Navigate to="/dashboard" /> : <Login />
          }
        />

        <Route path="/signup" element={<SignUp />} />

       
        <Route
          path="/dashboard"
          element={
            <Auth>
              <Dashboard />
            </Auth>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </Layout>
  );
}

export default App;
