// src/layout/Layout.jsx
import React, { useState } from "react";

import {
  PageWrapper,
  Content,
  Overlay,
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarItem,
  SidebarFooter,
  SidebarButton,
} from "./Layout.Styles";

import Topbar from "../Components/Topbar/Topbar";
import { FaTachometerAlt, FaClipboardList, FaBox } from "react-icons/fa";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [active, setActive] = useState("dashboard");

  return (
    <PageWrapper>
      <Topbar setSidebarOpen={setSidebarOpen} />

      {/* Sidebar Overlay */}
      {sidebarOpen && <Overlay onClick={() => setSidebarOpen(false)} />}

      {/* Sidebar */}
      <Sidebar $open={sidebarOpen}>
        <SidebarHeader>
          <button onClick={() => setSidebarOpen(false)}>✕</button>
        </SidebarHeader>

        <SidebarMenu>
          <SidebarItem
            $active={active === "dashboard"}
            onClick={() => setActive("dashboard")}
          >
            <FaTachometerAlt /> Dashboard
          </SidebarItem>
          <SidebarItem
            $active={active === "enquiry"}
            onClick={() => setActive("enquiry")}
          >
            <FaClipboardList /> Enquiry
          </SidebarItem>
          <SidebarItem
            $active={active === "product"}
            onClick={() => setActive("product")}
          >
            <FaBox /> Product
          </SidebarItem>
        </SidebarMenu>

        <SidebarFooter>
          <SidebarButton $variant="purple">Change password</SidebarButton>
          <SidebarButton $variant="red">Log out</SidebarButton>
        </SidebarFooter>
      </Sidebar>

      {/* Page content */}
      <Content>{children}</Content>
    </PageWrapper>
  );
};

export default Layout;
