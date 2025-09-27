import { useNavigate } from "react-router-dom";
import {
  ButtonRow,
  Card,
  CardButton,
  CardText,
  ImageContainer,
} from "./poductCard.style";

const ProductCard = ({ id, image, text, onCompare, display = "flex" }) => {
  const navigate = useNavigate();
  return (
    <Card onClick={() => navigate(`/product/${id}`)}>
      <ImageContainer>
        <img
          src={image}
          alt="Product"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </ImageContainer>
      <CardText>{text}</CardText>
      <ButtonRow display={display}>
        <CardButton
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/product/${id}`);
          }}
        >
          Read More
        </CardButton>
        <CardButton
          $bg="#0E0619"
          onClick={(e) => {
            e.stopPropagation();
            onCompare && onCompare();
          }}
        >
          Compare
        </CardButton>
      </ButtonRow>
    </Card>
  );
};

export default ProductCard;
