import {
  ReviewCard,
  ReviewCardHeader,
  StartContainer,
} from "../../../pages/product/singleProduct.style";
import StarToggle from "./StarToggle";
import { CircleUser } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { useState } from "react";

const ReviewCardComponent = ({ review }) => {
  const [expanded, setExpanded] = useState(false);
  const MAX_LENGTH = 600;
  return (
    <ReviewCard>
      <ReviewCardHeader>
        <div className="review-header__left-container">
          <CircleUser />
          <div>
            <h6>{review?.name || "Anonymous"}</h6>
            <StartContainer className="review-header__star-container">
              {[...Array(5)].map((_, index) => (
                <StarToggle
                  key={index}
                  readOnly={true}
                  filled={index < (Number(review?.rating) || 0)}
                />
              ))}
            </StartContainer>
          </div>
        </div>
        <span>
          {review?.created_at
            ? formatDistanceToNow(new Date(review.created_at), {
                addSuffix: true,
              })
            : "N/A"}
        </span>
      </ReviewCardHeader>
      <p
        style={{
          cursor:
            review?.review && review.review.length > MAX_LENGTH
              ? "pointer"
              : "default",
        }}
        onClick={() =>
          review?.review && review.review.length > MAX_LENGTH
            ? setExpanded(!expanded)
            : null
        }
      >
        {review?.review
          ? expanded
            ? review.review
            : review.review.length > MAX_LENGTH
            ? review.review.slice(0, MAX_LENGTH) + "..."
            : review.review
          : "No review provided"}
      </p>
    </ReviewCard>
  );
};

export default ReviewCardComponent;
