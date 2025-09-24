import React from "react";
import { HeaderWrapper, ContentWrapper, LogoWrapper, LogoText, PossibilityText } from "./Banner.style";
import bgImage from "../../assets/main/banner.png"; 
import logo from "../../assets/main/logo2.svg"; // ✅ add your ARM SBC logo image here

const Banner = () => {
  return (
    <HeaderWrapper bg={bgImage}>
      <ContentWrapper>
        <LogoWrapper>
          <img src={logo} alt="ARM SBC Logo" />
      
        </LogoWrapper>
        <PossibilityText>
          Endless Possibilities_
        </PossibilityText>
      </ContentWrapper>
    </HeaderWrapper>
  );
};

export default Banner;
