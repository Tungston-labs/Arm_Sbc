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
import { FaBox, FaClipboardList } from "react-icons/fa";
import { fetchDashboardCounts } from "../../redux/dashboardSlice";

const Dashboard = () => {
  const dispatch = useDispatch();

  // Get state from Redux
  const { counts, loading, error } = useSelector((state) => state.dashboard);

  // Get token (from localStorage / Redux auth slice)
  const token = localStorage.getItem("token"); 

  useEffect(() => {
    if (token) {
      dispatch(fetchDashboardCounts(token));
    }
  }, [dispatch, token]);

  return (
    <Layout>
      <DashboardHeader>
        <DashboardTitle>Dashboard</DashboardTitle>
        <SubTitle>
          Glad to have you back. Check your dashboard for the latest product updates and manage your new enquiries seamlessly.
        </SubTitle>
      </DashboardHeader>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <CardGrid>
        <Card>
          <CardHeader>
            <CardTitle>New enquiry</CardTitle>
            <CardIcon>
              <FaClipboardList />
            </CardIcon>
          </CardHeader>
          <CardValue>{counts.new_enquiries || 0}</CardValue>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Products</CardTitle>
            <CardIcon>
              <FaBox />
            </CardIcon>
          </CardHeader>
          <CardValue>{counts.products || 0}</CardValue>
        </Card>
      </CardGrid>
    </Layout>
  );
};

export default Dashboard;
