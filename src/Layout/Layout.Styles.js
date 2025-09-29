
import styled, { css } from "styled-components";

export const PageWrapper = styled.div`
  min-height: 100vh;
  /* background: radial-gradient(circle at top left, #2b1a42, #0d0d0d); */
background: radial-gradient(
  circle 950px at top left,
  rgb(77, 52, 126) 0%,
  rgb(22, 5, 46) 35%,
 rgba(3, 2, 6, 1)80%
);





  color: #fff;
  font-family: "Satoshi", sans-serif;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Content = styled.main`
  flex: 1;
  padding: clamp(1rem, 2vw, 3rem);

  @media (min-width: 2560px) {
    padding: 4rem;
  }
  @media (min-width: 3840px) { 
    padding: 6rem;
  }
  @media (min-width: 5120px) { 
    padding: 8rem;
  }
  @media (min-width: 7680px) { 
    padding: 10rem;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  z-index: 999;
`;

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: clamp(280px, 4vw, 480px);
  height: 100%;
  background: #222228;
  padding: 0.9rem;
  transition: transform 0.3s ease-in-out, width 0.3s ease-in-out, padding 0.3s ease-in-out;
  z-index: 1000;
  display: flex;
  flex-direction: column;

  transform: ${({ $open }) => ($open ? "translateX(0)" : "translateX(100%)")};

  @media (min-width: 1719px) {
    width: 320px;
    padding: 1.5rem;
  }
  @media (min-width: 1990px) {
    width: 520px;
    padding: 1.5rem;
  }
  @media (min-width: 2560px) {
    width: 520px;
    padding: 1.5rem;
  }
  @media (min-width: 3840px) {
    width: 520px;
    padding: 1.5rem;
  }
  @media (min-width: 5120px) {
    width: 600px;
    padding: 2rem;
  }
  @media (min-width: 7680px) {
    width: 720px;
    padding: 2.5rem;
  }
`;

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    background: none;
    border: none;
    color: #fff;
    font-size: clamp(1.2rem, 2vw, 1.8rem);
    cursor: pointer;

    @media (min-width: 3840px) {
      font-size: 2.2rem;
    }
    @media (min-width: 7680px) {
      font-size: 3rem;
    }
  }
`;

export const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.8rem, 1vw, 1.5rem);
  margin-top: clamp(1rem, 2vw, 2rem);

  @media (min-width: 3840px) {
    gap: 2rem;
    margin-top: 3rem;
  }
  @media (min-width: 7680px) {
    gap: 3rem;
    margin-top: 4rem;
  }
`;

export const SidebarFooter = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: clamp(0.8rem, 1vw, 1.5rem);
  padding: clamp(1rem, 2vw, 2rem);
  margin-bottom: clamp(1rem, 2vw, 2rem);

  @media (min-width: 3840px) {
    gap: 2rem;
    padding: 3rem;
    margin-bottom: 3rem;
  }
  @media (min-width: 7680px) {
    gap: 3rem;
    padding: 4rem;
    margin-bottom: 4rem;
  }
`;

export const SidebarButton = styled.button`
  background: transparent;
  border: 1px solid;
  border-radius: clamp(4px, 0.5vw, 8px);
  padding: clamp(0.4rem, 0.8vw, 0.8rem) clamp(0.8rem, 1.5vw, 1.5rem);
  font-size: clamp(0.8rem, 1vw, 2rem);
  cursor: pointer;
  transition: all 0.2s ease;

  ${({ $variant }) =>
    $variant === "purple" &&
    css`
      color: #9d4edd;
      border-color: #9d4edd;
      &:hover {
        background: rgba(157, 78, 221, 0.1);
      }
    `}

  ${({ $variant }) =>
    $variant === "red" &&
    css`
      color: #ff4d4f;
      border-color: #ff4d4f;
      &:hover {
        background: rgba(255, 77, 79, 0.1);
      }
    `}
`;

export const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(0.5rem, 1vw, 1rem);
  padding: clamp(0.5rem, 1vw, 1rem) clamp(0.8rem, 1.5vw, 1.5rem);
  border-radius: clamp(6px, 1vw, 12px);
  cursor: pointer;
  font-size: clamp(0.85rem, 1vw, 2.05rem);
  transition: background 0.2s ease, color 0.2s ease;

  ${({ $active }) =>
    $active
      ? css`
          background: #9d4edd;
          color: white;
        `
      : css`
          color: #d1d1d1;
          &:hover {
            background: rgba(255, 255, 255, 0.05);
            color: white;
          }
        `}

  @media (min-width: 3840px) {
    font-size: 2.2rem;
    padding: 1.5rem 2.5rem;
  }
  @media (min-width: 7680px) {
    font-size: 3rem;
    padding: 2rem 3rem;
  }
`;
