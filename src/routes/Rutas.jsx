import React from "react";
import { Route, Routes } from "react-router-dom";
import ModalLogin from "../features/home/login/ModalLogin";
import ModalCreateCuenta from "../features/home/login/ModalCreateCuenta";

import Major from "../features/pages/Major";

// import Inicio from "../features/home/views/Inicio";
import Home from "../features/pages/Home";
import Logout from "../features/home/logout/Logout";

const rutas = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<div>404</div>} />
        <Route path="" element={<Home />} />
        <Route path="login" element={<ModalLogin />} />
        {/* <Route path="inicio" element={<Inicio />} /> */}
        <Route path="create" element={<ModalCreateCuenta />} />
        <Route path="major" element={<Major />} />
        <Route path="logout" element={<Logout />} />
      </Routes>
    </>
  );
};

export default rutas;
