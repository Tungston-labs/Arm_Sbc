import {
  DescriptionSection,
  SpecificationContainer,
} from "../../../pages/product/singleProduct.style";
import SpecificationNavBar from "./SpecificationNavBar";
import SpecificationDescriptionCard from "./SpecificationDescriptionCard";
import { useState } from "react";
import AddetionalInformationCard from "./AddetionalInformationCard";
import ReviewFormcontainer from "../review/ReviewFormcontainer";
import ReviewCardSContainer from "../review/ReviewCardSContainer";
import { CenterContainer } from "../../../pages/product/product.style";

const SpecificationSection = ({ description, addetionalInformation,productId }) => {
  const [activeIndex, setActiveIndex] = useState("Description");
  const navItem = ["Description", "Additional Information", "Reviews"];

  return (
    <SpecificationContainer id="specification">
      <h2>Specifications</h2>
      <SpecificationNavBar
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        navItem={navItem}
      />
      {activeIndex === navItem[0] && (
        <DescriptionSection>
          {description?.length > 0 ? (
            description?.map((i, index) => (
              <SpecificationDescriptionCard data={i} key={index} />
            ))
          ) : (
            <CenterContainer>
              <p>No description available for this product. </p>
            </CenterContainer>
          )}
        </DescriptionSection>
      )}
      {activeIndex === navItem[1] && (
        <DescriptionSection background="#ffffff1a">
          {addetionalInformation?.length > 0 ? (
            addetionalInformation?.map((i, index) => (
              <AddetionalInformationCard data={i} key={index} />
            ))
          ) : (
            <CenterContainer>
              <p>No additional information available. </p>
            </CenterContainer>
          )}
        </DescriptionSection>
      )}
      {activeIndex === navItem[2] && (
        <DescriptionSection display="block">
          <ReviewFormcontainer productId={productId}/>
          <ReviewCardSContainer/>
        </DescriptionSection>
      )}
    </SpecificationContainer>
  );
};

export default SpecificationSection;
