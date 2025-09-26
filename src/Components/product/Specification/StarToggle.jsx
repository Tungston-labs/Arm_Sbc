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

export default function StarToggle({
  readOnly = false,
  filled: initialFilled = false,
}) {
  const [filled, setFilled] = useState(initialFilled);
  const [animFill, setAnimFill] = useState(false);

  const handleClick = () => {
    if (readOnly) return;
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
      stroke={filled ? "#FFB531" : "#817878"}
      fill={filled ? "#FFB531" : "none"}
      style={{ cursor: readOnly ? "default" : "pointer" }}
    />
  );
}
