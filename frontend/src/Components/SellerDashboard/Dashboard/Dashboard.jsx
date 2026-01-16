import React from "react";
import Layout from "../../SellerLayout/Layout/Layout";
import { Outlet } from "react-router-dom";

export const Dashboard = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

