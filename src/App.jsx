import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";

import AppRoutes from "./routes/App.routes"

const App = () => {
  return (
    <>
      <BrowserRouter>
      <AuthProvider> 
             <AppRoutes />
      </AuthProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
