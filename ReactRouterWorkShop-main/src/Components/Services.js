import React from "react";
import { Link, Outlet } from "react-router-dom";

const Services = () => {
  return (
    <div>
      Welcome everyone, these are our services
      <div>
        <Link to="/services/marketing">Marketing</Link>

        <Link to="/services/development">Development</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Services;
