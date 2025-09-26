
import React from "react";
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

const Dashboard = () => {
  return (
    <Layout>
      <DashboardHeader>
        <DashboardTitle>Dashboard</DashboardTitle>
        <SubTitle>
          Glad to have you back. Check your dashboard for the latest product updates and manage your new enquiries seamlessly.
        </SubTitle>
      </DashboardHeader>

      <CardGrid>
        <Card>
          <CardHeader>
            <CardTitle>New enquiry</CardTitle>
            <CardIcon>
              <FaClipboardList />
            </CardIcon>
          </CardHeader>
          <CardValue>23</CardValue>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Products</CardTitle>
            <CardIcon>
              <FaBox />
            </CardIcon>
          </CardHeader>
          <CardValue>44</CardValue>
        </Card>
      </CardGrid>
    </Layout>
  );
};

export default Dashboard;
