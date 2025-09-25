import { useState } from "react";
import { Star } from "lucide-react";
import styled, { keyframes, css } from "styled-components";

const popIn = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.3); }
  100% { transform: scale(1); }
`;

const StyledStar = styled(Star)`
  cursor: pointer;
  transition: fill 1s ease, stroke 1s ease;

  ${(props) =>
    props.animFill &&
    css`
      animation: ${popIn} 0.3s ease;
    `}
`;

export default function StarToggle() {
  const [filled, setFilled] = useState(false);
  const [animFill, setAnimFill] = useState(false);

  const handleClick = () => {
    if (!filled) {
      setAnimFill(false);
      requestAnimationFrame(() => setAnimFill(true));
    }
    setFilled(!filled);
  };

  return (
    <StyledStar
      onClick={handleClick}
      animFill={animFill}
      strokeWidth={1.5}
      stroke="#817878"
      fill={filled ? "#817878" : "none"}
    />
  );
}
