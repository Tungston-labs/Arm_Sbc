import React from "react";
import {
  FooterContainer,
  LogoSection,
  Logo,
  Heading,
  Subtitle,
  SocialIcons,
  Icon,
  BottomBar,
  Links,
  CopyRight,
} from "./Footer.Styles";

import { FaWhatsapp, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import logo from "../../assets/main/logo.svg";

const Footer = () => {
  return (
    <FooterContainer>

   <LogoSection>
      <Logo src={logo} alt="ARM SBC Logo" />
    </LogoSection>

 
      <Heading>Keep in Touch</Heading>
      <Subtitle>
        Subscribe to get updates, news, and special offers delivered straight to your inbox.
      </Subtitle>


      <SocialIcons>
        <Icon href="#"><FaWhatsapp /></Icon>
        <Icon href="#"><FaInstagram /></Icon>
        <Icon href="#"><FaLinkedin /></Icon>
        <Icon href="#"><FaFacebook /></Icon>
      </SocialIcons>
      <BottomBar>
    <CopyRight>© Copyright 2025. ARM-SBC. Designed by Tungston Labs.</CopyRight>
        <Links>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
        </Links>

      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;