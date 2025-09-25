import React from "react";
import {
  HeaderWrapper,
  Content,
  Title,
  Description,
  ExploreButton,
} from "./Header.style";
import backgroundImage from "../../assets/main/background.svg";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { FiArrowUpRight } from "react-icons/fi";
import AboutUs from "./AboutUs";

const Header = () => {
  return (
    <>
      <Navbar />
      <HeaderWrapper backgroundImage={backgroundImage}>
        <Content>
          <Title>The Future of Compact Computing</Title>
          <Description>
            ARMSBC your trusted source for high-performance single board computers (SBCs) and
            single board PCs. We provide advanced SBC boards, ARM SBCs, AMD SBCs, and leading
            platforms like the Orange Pi 5, Banana Pi PC, and Linux-based SBCs. Designed for
            reliability and speed, our solutions power industrial automation, automotive systems,
            AI, IoT, robotics, and embedded applications, making ARMSBC the destination for the
            best single board computers.
          </Description>
          <ExploreButton>
            Explore <span><FiArrowUpRight /></span>
          </ExploreButton>

        </Content>
      </HeaderWrapper>
      <AboutUs />
      <Footer />
    </>
  );
};

export default Header;
