import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout";
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
function App() {
  return (
    <>
      <Routes>
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
        <Route path="*" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </>
  );
}

export default App;
