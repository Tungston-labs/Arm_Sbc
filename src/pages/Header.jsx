// Header.jsx
import React from "react";
import {
  HeaderWrapper,
  Content,
  Title,
  Description,
  ExploreButton,
} from "./Header.style";
import bgImage from "../assets/board.png";  // <-- import the image

const Header = () => {
  return (
    <HeaderWrapper bgImage={bgImage}>
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
          Explore <span>↗</span>
        </ExploreButton>
      </Content>
    </HeaderWrapper>
  );
};

export default Header;
