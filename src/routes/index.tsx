import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { FinalizingPurchase } from "../pages/Finishing";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { Profile } from "../pages/Profile";
import { ProductRegistration } from "../pages/ProductRegistration";
import { WaitingConfirmation } from "../pages/WaitingConfirmation";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/finalizingPurchase" element={<FinalizingPurchase />} />
      <Route path="/waitingConfirmation" element={<WaitingConfirmation />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/product" element={<ProductRegistration />} />
    </Routes>
  );
};
