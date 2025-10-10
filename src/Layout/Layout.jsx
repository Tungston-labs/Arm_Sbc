import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();
  const navigate = useNavigate();

  const getActive = () => {
    if (location.pathname.includes("/dashboard")) return "dashboard";
    if (location.pathname.includes("/enquiry-page")) return "enquiry";
    if (location.pathname.includes("/addproduct")) return "product";
    return "";
  };

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
            $active={getActive() === "dashboard"}
            onClick={() => navigate("/dashboard")}
          >
            <FaTachometerAlt /> Dashboard
          </SidebarItem>

          <SidebarItem
            $active={getActive() === "enquiry"}
            onClick={() => navigate("/enquiry-page")}
          >
            <FaClipboardList /> Enquiry
          </SidebarItem>

          <SidebarItem
            $active={getActive() === "product"}
            onClick={() => navigate("/addproduct")}
          >
            <FaBox /> Product
          </SidebarItem>



        </SidebarMenu>

        <SidebarFooter>
          <SidebarButton
            $variant="purple"
            onClick={() => setShowModal(true)}
          >
            Change password
          </SidebarButton>

          <SidebarButton
            $variant="red"
            onClick={() => setShowLogout(true)}
          >
            Log out
          </SidebarButton>
        </SidebarFooter>
      </Sidebar>

      <Content>{children}</Content>

      {showModal && <ChangePasswordModal onClose={() => setShowModal(false)} />}
      {showLogout && (
        <LogoutModal
          onConfirm={() => {
            console.log("Logging out...");
            localStorage.removeItem("token");
            setShowLogout(false);
            navigate("/login");
          }}
          onCancel={() => setShowLogout(false)}
        />
      )}
    </PageWrapper>
  );
};

export default Layout;
