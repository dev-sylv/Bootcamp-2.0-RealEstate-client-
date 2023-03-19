import React from "react";
import AllRoutes from "./components/AllRoutes/AllRoutes";
import UserRoutes from "./components/AllRoutes/UserRoutes";
import Footer from "./components/Footer/Footer";
// import AdminRoutes from './component/AllRoutes/AdminRoutes';
// import AgentRoutes from './component/AllRoutes/AgentRoutes';
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <AllRoutes />
      {/* <AdminRoutes />  */}
      {/* {/* <AgentRoutes /> */}
      {/* <UserRoutes /> */}
      <Footer />
    </div>
  );
}

export default App;
