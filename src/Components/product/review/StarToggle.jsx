import { Star } from "lucide-react";
import styled, { keyframes, css } from "styled-components";

const popIn = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.3); }
  100% { transform: scale(1); }
`;

const StyledStar = styled(Star)`
  cursor: pointer;
  transition: fill 0.3s ease, stroke 0.3s ease;

  ${(props) =>
    props.animFill &&
    css`
      animation: ${popIn} 0.3s ease;
    `}
`;

export default function StarToggle({
  filled = false,
  readOnly = false,
  onClick,
}) {
  return (
    <StyledStar
      onClick={() => !readOnly && onClick?.()}
      animFill={filled}
      strokeWidth={1.5}
      stroke={filled ? "#FFB531" : "#817878"}
      fill={filled ? "#FFB531" : "none"}
      style={{ cursor: readOnly ? "default" : "pointer" }}
    />
  );
}
