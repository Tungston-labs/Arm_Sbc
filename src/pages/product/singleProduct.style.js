import styled from "styled-components";

export const HeaderContainer = styled.section`
  width: 100%;
  display: flex;
  padding: 5rem;
  padding-bottom: 7rem;
  box-sizing: border-box;
  background: #0e0619;
  color: white;
  @media (max-width: 480px) {
    flex-direction: column;
    padding: 2rem 1rem;
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    padding: 3rem;
    padding-bottom: 5rem;
  }
`;
export const DividerDiv = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    width: 100%;
  }
`;
export const HeaderImageContainer = styled.section`
  padding-block: 3rem;
  img {
    width: 70%;
    min-width: 600px;
    height: auto;
  }
  @media (max-width: 480px) {
    padding-block: 1rem;
    display: flex;
    justify-content: center;
    img {
      width: 70%;
      min-width: 250px;
      height: auto;
    }
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    img {
      width: 70%;
      min-width: 300px;
      height: auto;
    }
  }
  @media (width >= 2560px) {
    img {
      min-width: 700px;
      height: auto;
    }
  }
  @media (width >= 3840px) {
    img {
      min-width: 900px;
      height: auto;
    }
  }
`;
export const HeaderTextContainer = styled.section`
  padding-inline: 3rem;
  h2 {
    font-size: 1.75rem;
    padding-bottom: 2rem;
    font-weight: 600;
  }
  p,
  li {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2.1rem;
  }
  p:nth-of-type(2) {
    padding-bottom: 2rem;
  }
  ul {
    padding-bottom: 2rem;
    padding-left: 2.5rem;
  }
  @media (max-width: 480px) {
    padding-inline: 0rem;
    h2 {
      font-size: 1.12rem;
      padding-bottom: 0rem;
    }
    p,
    li {
      font-size: 0.8rem;
      line-height: 1.5rem;
    }
    ul {
      padding-bottom: 1rem;
      padding-left: 1.5rem;
    }
    p:nth-of-type(2) {
      padding-bottom: 0.5rem;
    }
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    padding-inline: 1rem;
    h2 {
      font-size: 1.5rem;
      padding-bottom: 0.8rem;
      font-weight: 600;
    }
    p,
    li {
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.6rem;
    }
    p:nth-of-type(2) {
      padding-bottom: 1rem;
    }
    ul {
      padding-bottom: 1rem;
      padding-left: 1.5rem;
    }
  }
  @media (width >= 2560px) {
    padding-inline: 3rem;
    h2 {
      font-size: 2.5rem;
    }
    p,
    li {
      font-size: 2rem;
      line-height: 3rem;
    }
    ul {
      padding-left: 3.5rem;
    }
  }
  @media (width >= 3840px) {
    padding-inline: 3rem;
    h2 {
      font-size: 4rem;
    }
    p,
    li {
      font-size: 3rem;
      line-height: 4rem;
    }
    ul {
      padding-left: 5rem;
    }
  }
`;

export const ButtonSection = styled.div`
  display: ${(props) => props.display || "none"};
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-block: 2rem;
  @media (max-width: 480px) {
    display: ${(props) => (props.display === "flex" ? "none" : "flex")};
    padding-block: 1rem;
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    padding-block: 1rem;
  }
`;

export const CompareButton = styled.button`
  background: transparent;
  border: 1px solid #8a38f5;
  border-radius: 0.5rem;
  padding: 0.5rem 3rem;
  color: white;
  font-size: 0.7rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    transform: scale(0.95);
  }
  @media (max-width: 480px) {
    margin: 0 auto;
  }
  @media (width >= 2560px) {
    font-size: 1.5rem;
  }
  @media (width >= 3840px) {
    font-size: 2.5rem;
    border-radius: 1rem;
  }
`;
export const AddToCartButton = styled.button`
  background: #facc15;
  border: 1px solid #facc15;
  border-radius: 0.5rem;
  padding: 0.7rem 1.2rem;
  color: #000;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.6rem 1rem;
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    padding: 0.7rem 1.2rem;
    color: #000;
    font-size: 0.8rem;
    gap: 0.4rem;
  }
  @media (width >= 2560px) {
    font-size: 2rem;
  }
  @media (width >= 3840px) {
    font-size: 3rem;
    padding: 1rem 1.8rem;
    border-radius: 1rem;
  }
`;

export const Link = styled.a`
  color: #06b6d4;
  text-decoration: underline;
  font-size: 1.5rem;
  cursor: pointer;

  &:active {
    transform: scale(0.98);
  }
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    font-size: 0.8rem;
  }
  @media (width >= 2560px) {
    font-size: 2rem;
  }
  @media (width >= 3840px) {
    font-size: 3rem;
  }
`;

export const SpecificationContainer = styled.section`
  width: 100%;
  padding: 2rem 1rem;
  box-sizing: border-box;
  background: #0e0619;
  color: white;

  h2 {
    width: 100%;
    color: #8a38f5;
    text-align: center;
    font-size: 1.25rem;
    font-family: "Montserrat", sans-serif;
  }
  @media (width >= 1024px) {
    padding-block: 2rem;
    padding-inline: 4rem;
    h2 {
      font-size: 3.1rem;
      padding-bottom: 1rem;
    }
  }
  @media (width >= 1280px) {
    padding-block: 3rem;
    padding-inline: 5rem;
    h2 {
      font-size: 3.8rem;
      padding-bottom: 2.5rem;
    }
  }
  @media (width >= 1536px) {
    padding-block: 4rem;
    padding-inline: 10rem;
    h2 {
      font-size: 4.38rem;
      padding-bottom: 4rem;
    }
  }
  @media (width >= 2560px) {
    h2 {
      font-size: 5rem;
    }
  }
  @media (width >= 3840px) {
    h2 {
      font-size: 7rem;
    }
  }
`;

export const SpecificationNav = styled.nav`
  padding-block: 1rem;
  ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
    font-size: 0.75rem;
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
export const NavItem = styled.li`
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

export const DescriptionSection = styled.div`
  width: 100%;
  background: ${(props) => (props.background ? props.background : "none")};
  border-radius: 0.25rem;
  padding-inline: 1rem;
  @media (width >= 1024px) {
    display: ${(props) => props.display || "flex"};
    flex-wrap: wrap;
    background: ${(props) =>
      props.background ? props.background : "#ffffff1a"};
    border-radius: 0.63rem;
    padding: 1.6rem 2.1rem;
  }
  @media (width >= 1280px) {
    padding: 2rem 2.6rem;
  }
  @media (width >= 1536px) {
    padding: 2.6rem 3.1rem;
  }
  @media (width >= 2560px) {
    padding: 3rem 3.6rem;
    border-radius: 1rem;
    margin-top: 1rem;
  }
  @media (width >= 3840px) {
    padding: 4rem 5.6rem;
    border-radius: 1.5rem;
    margin-top: 2rem;
  }
`;
export const Descriptioncard = styled.div`
  width: 100%;
  @media (width >= 1024px) {
    width: 50%;
    padding: 0.5rem;
  }
`;

export const DescriptionHeader = styled.h4`
  color: #8a38f5;
  font-size: 0.88rem;
  font-weight: 400;
  margin-bottom: 1rem;
  font-family: "Montserrat", sans-serif;

  @media (width >= 1024px) {
    font-weight: 600;
    font-size: 0.9rem;
  }
  @media (width >= 1280px) {
    font-size: 1rem;
  }
  @media (width >= 1536px) {
    font-size: 1.13rem;
  }
  @media (width >= 2560px) {
    font-size: 1.8rem;
    margin-bottom: 1.9rem;
  }
  @media (width >= 3840px) {
    font-size: 2.8rem;
    margin-bottom: 2.5rem;
  }
`;
export const DescriptionTextContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  @media (width >= 2560px) {
    margin-bottom: 1.9rem;
  }
  @media (width >= 3840px) {
    margin-bottom: 2.5rem;
  }
`;

export const DescriptionLabel = styled.h5`
  font-size: 0.88rem;
  font-weight: 400;
  width: ${(props) => props.width || "35%"};
  border-right: ${(props) => props.border && "1px solid #696464"};
  padding: ${(props) => props.padding && "1rem"};
  @media (width >= 1024px) {
    font-weight: 600;
    font-size: 0.9rem;
  }
  @media (width >= 1280px) {
    font-size: 1rem;
  }
  @media (width >= 1536px) {
    font-size: 1.1rem;
  }
  @media (width >= 2560px) {
    font-size: 1.8rem;
  }
  @media (width >= 3840px) {
    font-size: 2.8rem;
    border-right: ${(props) => props.border && "3px solid #696464"};
  }
`;
export const DescriptionValue = styled.p`
  width: ${(props) => props.width || "65%"};
  padding: ${(props) => props.padding && "1rem"};

  font-size: 0.88rem;
  font-weight: 400;
  @media (width >= 2560px) {
    font-size: 1.6rem;
  }
  @media (width >= 3840px) {
    font-size: 2.6rem;
  }
`;

export const AddetionalInformationTextContainer = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid #696464;
  padding-block: 1rem;

  &:first-child {
    border-top: none;
  }
  @media (width >= 1024px) {
    padding-block: 0.5rem;
  }
  @media (width >= 1280px) {
    padding-block: 1rem;
  }
  @media (width >= 2560px) {
    padding: 2rem;
  }
  @media (width >= 3840px) {
    padding: 4rem;
    border-top: 3px solid #696464;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const ReviewHeader = styled.div`
  h4 {
    font-size: 0.88rem;
    font-weight: 700;
    padding-bottom: 1rem;
  }
  p {
    font-size: 0.88rem;
    font-weight: 400;
    span {
      color: #b70505;
    }
  }
  @media (width >= 1024px) {
    h4 {
      font-size: 1rem;
      padding-bottom: 0.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
  @media (width >= 1280px) {
    h4 {
      font-size: 1.2rem;
      padding-bottom: 0.8rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
  @media (width >= 1536px) {
    h4 {
      font-size: 1.5rem;
      padding-bottom: 1rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
`;
export const FormRow = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  @media (width >= 1280px) {
    gap: 1.5rem;
  }
  @media (width >= 1536px) {
    gap: 2rem;
  }
`;
export const FormInputGroup = styled.div`
  width: ${(props) => props.width || "100%"};
  display: flex;
  flex-direction: column;
`;
export const FormLabel = styled.label`
  font-size: 0.88rem;
  span {
    color: #b70505;
  }
  padding: 1rem 0 0.5rem 0;
  @media (width >= 1280px) {
    font-size: 1.2rem;
    padding: 1.5rem 0 0.5rem 0;
  }
  @media (width >= 1536px) {
    font-size: 1.5rem;
    padding: 2rem 0 1rem 0;
  }
`;
export const TextInput = styled.input`
  border: 1px solid #817878;
  border-radius: 0.5rem;
  width: 100%;
  padding: 0.7rem;
  background: transparent;
  color: white;
  font-size: 0.7rem;
  @media (width >= 1280px) {
    padding: 1rem;
      font-size: 1.5rem;

  }
  &[as="textarea"],
  textarea& {
    min-height: 120px;

    @media (width >= 1280px) {
      min-height: 200px;
    }
  }
`;

export const StartContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;
export const FormButton = styled.button`
  background: #8a38f5;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px solid #8a38f5;
  border-radius: 0.5rem;
  color: white;
  padding: 0.6rem 1.2rem;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    transform: scale(0.95);
  }
  margin-block: 1rem;
  @media (width >= 1280px) {
    font-size: 1.2rem;
  }
  @media (width >= 1536px) {
    font-size: 1.5rem;
  }
`;
