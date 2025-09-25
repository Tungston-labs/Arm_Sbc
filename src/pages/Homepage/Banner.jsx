import React from "react";
import {
  HeaderWrapper,
  ContentWrapper,
  LogoWrapper,
  LogoText,
  PossibilityText,
} from "./Banner.style";
import backgroundImage from "../../assets/main/banner.svg";
import logo from "../../assets/main/logo2.svg";

const Banner = () => {
  return (
    <HeaderWrapper bg={backgroundImage}>
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
