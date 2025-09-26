import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  max-width: 280px;
  background: #ffffff26;
  border-radius: 1rem;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.75rem 0.5rem;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 4px 16px rgba(138, 56, 245, 0.15);
  }
  @media (width>=1024px) {
    max-width: 18rem;
    padding: 1rem 1.5rem;
  }
  @media (width>=1280px) {
    max-width: 20rem;
    padding: 1.25rem 1.75rem;
  }
  @media (width>=1536px) {
    max-width: 23.3125rem;
    padding: 1.5rem 2rem;
  }
  @media (width>=2560px) {
    max-width: 26rem;
    padding: 2rem 2.5rem;
  }
  @media (width>=3840px) {
    max-width: 40rem;
    padding: 3rem 3.5rem;
    border-radius: 2rem;
  }
`;

export const ImageContainer = styled.div`
  width: 5.31rem;
  height: 5.31rem;
  margin: auto;
  @media (width>=1024px) {
    width: 8rem;
    height: 8rem;
  }
  @media (width>=1280px) {
    width: 9.5rem;
    height: 9.5rem;
  }

  @media (width>=1536px) {
    width: 10.5rem;
    height: 10.5rem;
  }
  @media (width>=2560px) {
    width: 13rem;
    height: 13rem;
  }
  @media (width>=3840px) {
    width: 16rem;
    height: 16rem;
  }
`;
export const CardText = styled.p`
  padding-block: 1rem;
  font-size: 0.63rem;
  font-weight: 400;
  text-align: center;
  @media (width>=1024px) {
    font-size: 0.8rem;
    padding-block: 1rem;
  }
  @media (width>=1280px) {
    font-size: 1rem;
  }
  @media (width>=1536px) {
    font-size: 1.25rem;
  }
  @media (width>=2560px) {
    font-size: 2rem;
  }
  @media (width>=3840px) {
    font-size: 2.5rem;
    padding-block: 2rem;
  }
`;
export const ButtonRow = styled.div`
  display: none;
  justify-content: space-between;
  @media (min-width: 640px) {
    display: ${(props) => (props.display ? props.display : "flex")};
    width: 100%;
  }
`;
export const CardButton = styled.button`
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #8a38f5;
  color: #fff;
  background: ${(props) => (props.bgColor ? props.bgColor : "transparent")};
  cursor: pointer;
  font-size: 0.63rem;
  transition: background 0.2s, color 0.2s;
  &:hover {
    box-shadow: 0 4px 16px rgba(138, 56, 245, 0.15);
  }
  &:active {
    transform: scale(0.95);
  }

  @media (width>=1280px) {
    font-size: 0.9rem;
    padding: 0.63rem 1.25rem;
  }
  @media (width>=1536px) {
    font-size: 0.7rem;
    padding: 0.63rem 1.25rem;
  }
  @media (width>=2560px) {
    font-size: 1.2rem;
    padding: 1rem 2rem;
  }
  @media (width>=3840px) {
    font-size: 2rem;
    padding: 1rem 2rem;
    border-radius: 1rem;
  }
`;

const ProductCard = ({
  image = "https://placehold.co/600x400",
  text = "ARM Develeopment Board Rockchip 3288, Quad Core 1.7 GHz",
  onReadMore,
  onCompare,
}) => (
  <Card>
    <ImageContainer>
      <img
        src={image}
        alt="Product"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </ImageContainer>
    <CardText>{text}</CardText>
    <ButtonRow>
      <CardButton onClick={onReadMore}>Read More</CardButton>
      <CardButton bgColor="#0E0619" onClick={onCompare}>
        Compare
      </CardButton>
    </ButtonRow>
  </Card>
);

export default ProductCard;
