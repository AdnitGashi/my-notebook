import React from "react";
import Sidebar from "../Sidebar";
import Dashboard from "../Dashboard";

const Home = () => {
  return (
    <div className="flex justify-between">
      <Sidebar />
      <Dashboard />
    </div>
  );
};
export default Home;
