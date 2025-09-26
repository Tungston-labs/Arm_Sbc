
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
import ChangePasswordModal from "../Components/ChangePasswordModal/ChangePasswordModal";
import LogoutModal from "../Components/LogoutModal/LogoutModal";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [active, setActive] = useState("dashboard");
  const [showModal, setShowModal] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  return (
    <PageWrapper>
      <Topbar setSidebarOpen={setSidebarOpen} />
      {sidebarOpen && <Overlay onClick={() => setSidebarOpen(false)} />}
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
          <SidebarButton $variant="purple"
             onClick={() => setShowModal(true)}>
            Change password</SidebarButton>
          <SidebarButton $variant="red"
           onClick={() => setShowLogout(true)}>Log out</SidebarButton>
        </SidebarFooter>
      </Sidebar>
      <Content>{children}</Content>
  {showModal && <ChangePasswordModal onClose={() => setShowModal(false)} />}
    {showLogout && (
  <LogoutModal
    onConfirm={() => {
      console.log("Logging out...");
      setShowLogout(false);
    }}
    onCancel={() => setShowLogout(false)}
  />
)}
    </PageWrapper>
  );
};

export default Layout;
