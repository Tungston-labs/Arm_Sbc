import {
  ReviewCard,
  ReviewCardHeader,
  StartContainer,
} from "../../../pages/product/singleProduct.style";
import StarToggle from "./StarToggle";
import { CircleUser } from "lucide-react";

const ReviewCardComponent = () => {
  const filledStars = 4;
  return (
    <ReviewCard>
      <ReviewCardHeader>
        <div className="review-header__left-container">
          <CircleUser />
          <div>
            <h6>Abcdefghi@gmail.com</h6>
            <StartContainer className="review-header__star-container">
              {[...Array(5)].map((_, index) => (
                <StarToggle
                  key={index}
                  readOnly={true}
                  filled={index < filledStars}
                />
              ))}
            </StartContainer>
          </div>
        </div>
        <span>1 day ago</span>
      </ReviewCardHeader>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
        molestiae vel, voluptatem dicta commodi sequi non dolores architecto.
        Similique sed quod, quidem quaerat sequi error odio nemo quam pariatur.
        Recusandae? Nesciunt, facere in similique fuga eveniet cumque maxime
        reiciendis architecto nihil temporibus eius molestias blanditiis
        obcaecati eum doloremque saepe assumenda iure quidem eligendi qui nobis.
        Aut in voluptate tempora aspernatur? Quibusdam, eligendi! Sed ex minima,
        ab a eum provident fugit asperiores repellendus quae voluptas facere
        magni officia porro sint voluptatum reiciendis architecto autem iste
        accusantium dolor! Possimus id facere vitae!
      </p>
    </ReviewCard>
  );
};

export default ReviewCardComponent;
