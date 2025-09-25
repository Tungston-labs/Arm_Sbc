// src/components/Navbar.jsx
import React from "react";
import { NavBar, LogoSection, Logo, BrandName, Hamburger } from "./Topbar.Styles";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/main/logo.svg";
const Navbar = ({ setSidebarOpen }) => {
  return (
    <NavBar>
      <LogoSection>
<Logo>
  <img src={logo} alt="ARM SBC" />
</Logo>
      </LogoSection>
      <Hamburger onClick={() => setSidebarOpen(true)}>
        <FaBars />
      </Hamburger>
    </NavBar>
  );
};

export default Navbar;
