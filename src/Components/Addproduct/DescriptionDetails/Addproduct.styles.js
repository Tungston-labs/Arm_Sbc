// src/components/addProduct/addProductNav.style.js
import styled from "styled-components";

export const AddProductNav = styled.nav`
  display: flex;                 /* center the ul horizontally */
  justify-content: center;       /* center the ul horizontally */
  margin-top: 30px;
  padding-block: 1rem;

  ul {
    display: flex;
    list-style: none;
    justify-content: center;     
    font-size: 0.75rem;
    color: white;
    margin: 0;                  
    padding: 0;                  
  }

  @media (width >= 1024px) {
    width: 50%;
    ul {
      font-size: 1rem;
    }
  }
  @media (width >= 1280px) {
    ul {
      font-size: 1.25rem;
    }
  }
  @media (width >= 1536px) {
    ul {
      font-size: 1.5rem;
    }
  }
  @media (width >= 2560px) {
    ul {
      font-size: 2rem;
    }
  }
  @media (width >= 3840px) {
    ul {
      font-size: 3rem;
    }
  }
`;

export const AddNavItem = styled.li`
  padding: 0.5rem 0.7rem;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0%;
    background: linear-gradient(90deg, #ffffff 20.67%, #47336d 69.71%);
    transition: width 0.3s ease;
  }

  ${(props) =>
    props.active &&
    `
      &::after {
        width: 100%;
      }
    `}

  @media (width >= 1536px) {
    padding: 1rem 1.5rem;
  }
  @media (width >= 2560px) {
    padding: 1.5rem 2.5rem;
  }
  @media (width >= 3840px) {
    padding: 2.5rem 3.5rem;
    &::after {
      height: 5px;
    }
  }
`;
