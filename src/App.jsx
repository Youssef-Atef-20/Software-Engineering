import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./layout/Layout";
import Auth from "./components/Auth";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";


function App() {
  return (
    <Layout>
      <Routes>
        
        <Route
          path="/"
          element={
            <Auth>
              <Login />
            </Auth>
          }
        />

        
        <Route path="/signup" element={<SignUp />} />

        
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

       
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}

export default App;
