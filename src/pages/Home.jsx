import React from "react";

import { Outlet } from "react-router-dom";

const Home = ({ }) => {
  return (
    <div className="flex justify-center gap-3 w-full ">
      <div className="flex w-full max-w-4xl bg-red gap-3 ">
      
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
