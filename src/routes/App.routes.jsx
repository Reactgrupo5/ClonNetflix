import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../features/pages/Home"

import ProtectedRoute from "./ProtectedRoutes";
import PublicRoute from "./PublicRoute";
import ModalLogin from "../features/home/login/ModalLogin";
import ModalCreateCuenta from "../features/home/login/ModalCreateCuenta";
import Major from "../features/pages/Major";
import Logout from "../features/home/logout/Logout";

const AppRoutes = () => {
  return (
    
      <Routes>
        <Route
          path="major"
          element={
            <ProtectedRoute>
              <Major />
            </ProtectedRoute>
          }
        />
        
        <Route path="" element={<Home />} />
        <Route path="login" element={<ModalLogin />} />
        <Route path="create" element={<ModalCreateCuenta />} />
        <Route path="logout" element={<Logout />} />
      </Routes>
   
  );
};

export default AppRoutes;
