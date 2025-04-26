import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Inventory from "./pages/Inventory";
import Conversations from "./pages/Conversations";
import Settings from "./pages/Settings";
import NewInventory from "./pages/New-Inventory";
import Login from "./Component/Login";
import Signin from "./Component/SignIn";
import DesktopOnly from "./Component/DesktopOnly";
import { AppContext } from "./Contaxt";

function App() {
  const navigate = useNavigate();
  const {isLoggedIn , setIsLoggedIn } = AppContext()

  useEffect(() => {
    const checkLogin = () => {
      setIsLoggedIn(!!localStorage.getItem("Islogin"));
    };
    window.addEventListener("storage", checkLogin);
    return () => window.removeEventListener("storage", checkLogin);
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <Routes>
        {isLoggedIn ? (
          <Route
            path="/"
            element={
              <DesktopOnly>
                <Layout />
              </DesktopOnly>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/Customers" element={<Customers />} />
            <Route path="/Inventory">
              <Route index element={<Inventory />} />
              <Route path="new-inventory" element={<NewInventory />} />
            </Route>
            <Route path="/Conversations" element={<Conversations />} />
            <Route path="/Settings" element={<Settings />} />
          </Route>
        ) : (
          <>
            <Route path="*" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/signin" element={<Signin setIsLoggedIn={setIsLoggedIn} />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;