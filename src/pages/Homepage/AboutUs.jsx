import React from "react";
import {
  AboutSection,
  Container,
  ImageWrapper,
  TextContent,
  Heading,
  Description,
} from "./AboutUs.style";

import aboutImage from "../../assets/main/background2.png";
import HotProducts from "./HotProducts";

const AboutUs = () => {
  return (
    <>
      <AboutSection>
        <Container>
          <ImageWrapper>
            <img src={aboutImage} alt="About ARMSBC" />
          </ImageWrapper>
          <TextContent>
            <Heading>About Us</Heading>
            <Description>
              We specialize in developing high-performance Single Board Computers (SBCs),
              Single Board PCs, and SBC board computers based on ARM architecture.
              Our mission is to deliver innovative, reliable, and versatile solutions,
              offering the best single board computers, industrial SBCs,
              automotive single board computers, and platforms like the Orange
              Pi 5 and Banana Pi PC, powering AI, IoT, robotics, and embedded systems.
            </Description>
          </TextContent>
        </Container>
      </AboutSection>
      <HotProducts />
    </>
  );
};

export default AboutUs;
