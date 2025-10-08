import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../Layout/Layout";
import {
  DashboardHeader,
  DashboardTitle,
  SubTitle,
  CardGrid,
  Card,
  CardHeader,
  CardTitle,
  CardIcon,
  CardValue,
} from "./Dashboard.Styles";

import { LuPackagePlus } from "react-icons/lu";
import { IoDocumentsOutline } from "react-icons/io5";
import { fetchDashboardCounts } from "../../redux/dashboardSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { counts, loading, error } = useSelector((state) => state.dashboard);
  const token = localStorage.getItem("accessToken");


  useEffect(() => {
    dispatch(fetchDashboardCounts());
  }, [dispatch]);

  useEffect(() => {
  }, [counts]);
  return (
    <Layout>
      <DashboardHeader>
        <DashboardTitle>Dashboard</DashboardTitle>
        <SubTitle>
          Glad to have you back. Check your dashboard for the latest product updates and manage your new enquiries seamlessly.
        </SubTitle>
      </DashboardHeader>

      {loading && <p>Loading...</p>}
      {/* {error && <p style={{ color: "red" }}>{error}</p>} */}

      <CardGrid>
        <Card>
          <CardHeader>
            <CardTitle>New enquiry</CardTitle>
            <CardIcon>
              <IoDocumentsOutline />
            </CardIcon>
          </CardHeader>
          <CardValue>{counts.new_inquiries_count || 0}</CardValue>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Products</CardTitle>
            <CardIcon>
              <LuPackagePlus />
            </CardIcon>
          </CardHeader>
          <CardValue>{counts.total_products_count || 0}</CardValue>
        </Card>
      </CardGrid>
    </Layout>
  );
};

export default Dashboard;
