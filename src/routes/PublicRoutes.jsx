import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = ({ isLoggin }) => {
  return isLoggin ? <Navigate to="/Landingpage" replace /> : <Outlet />;
};

export default PublicRoutes;