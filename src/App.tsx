import React from "react";
import logo from "./logo.svg";
import AllRoutes from "./components/AllRoutes/AllRoutes";
import AdminRoutes from "./components/AllRoutes/AdminRoutes";
function App() {
  return (
    <div>
      <AllRoutes />
      <AdminRoutes />
    </div>
  );
}

export default App;
