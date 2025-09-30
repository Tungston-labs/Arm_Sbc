import {
  StartContainer,
  TotalReviewCardContainer,
} from "../../../pages/product/singleProduct.style";
import StarToggle from "./StarToggle";

const TotalReviewCard = ({ rating, total }) => {
  const safeRating = Math.min(Math.max(Number(rating) || 0, 0), 5);
  const safeTotal = Number(total) >= 0 ? Number(total) : 0;
  return (
    <TotalReviewCardContainer>
      <h4>Reviews</h4>
      <h5>{safeRating.toFixed(1)}</h5>
      <StartContainer>
        {[...Array(5)].map((_, index) => (
          <StarToggle key={index} readOnly filled={index < safeRating} />
        ))}
      </StartContainer>
      <p>
        Based on {safeTotal} {safeTotal === 1 ? "review" : "reviews"}
      </p>
    </TotalReviewCardContainer>
  );
};

export default TotalReviewCard;
