import TotalReviewCard from "./TotalReviewCard";
import ReviewCardComponent from "../review/ReviewCardComponent";

const ReviewCardSContainer = () => {
  return (
    <>
      <TotalReviewCard />
      <div>
        {[...Array(5)].map((i) => (
          <ReviewCardComponent />
        ))}
      </div>
    </>
  );
};

export default ReviewCardSContainer;
