import TotalReviewCard from "./TotalReviewCard";
import ReviewCardComponent from "../review/ReviewCardComponent";
import { useSelector } from "react-redux";
import { CenterContainer } from "../../../pages/product/product.style";
import OvalSpinner from "../../spinner/OvalSpinner";

const ReviewCardSContainer = () => {
  const { items, loading } = useSelector((state) => state.reviews);
 
  return (
    <>
      {loading ? (
        <CenterContainer>
          <OvalSpinner />
        </CenterContainer>
      ) : (
        <>
          <TotalReviewCard
            rating={items?.avg_rating}
            total={items?.total_reviews}
          />
          <div>
            {items?.reviews?.map((i) => (
              <ReviewCardComponent review={i} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ReviewCardSContainer;
