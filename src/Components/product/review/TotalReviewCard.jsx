import { StartContainer, TotalReviewCardContainer } from "../../../pages/product/singleProduct.style";
import StarToggle from "./StarToggle";

const TotalReviewCard = () => {
  const filledStars = 2;
  return (
    <TotalReviewCardContainer>
      <h4>Reviews</h4>
      <h5>4.0</h5>
      <StartContainer>
        {[...Array(5)].map((_, index) => (
          <StarToggle
            key={index}
            readOnly={true}
            filled={index < filledStars}
          />
        ))}
      </StartContainer>
      <p>Based on 00 reviews</p>
    </TotalReviewCardContainer>
  );
};

export default TotalReviewCard;
