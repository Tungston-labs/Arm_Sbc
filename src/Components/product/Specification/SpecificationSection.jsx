import {
  DescriptionSection,
  ReviewHeader,
  SpecificationContainer,
} from "../../../pages/product/singleProduct.style";
import SpecificationNavBar from "./SpecificationNavBar";
import SpecificationDescriptionCard from "./SpecificationDescriptionCard";
import descriptionData from "../../../pages/product/data/specificationData.json";
import addetionalData from "../../../pages/product/data/AddetionalInformationData.json";
import { useState } from "react";
import AddetionalInformationCard from "./AddetionalInformationCard";
import ReviewFrom from "./ReviewFrom";

const SpecificationSection = () => {
  const [activeIndex, setActiveIndex] = useState("Description");
  const navItem = ["Description", "Additional Information", "Reviews"];

  return (
    <SpecificationContainer>
      <h2>Specifications</h2>
      <SpecificationNavBar
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        navItem={navItem}
      />
      {activeIndex === navItem[0] && (
        <DescriptionSection>
          {descriptionData?.map((i, index) => (
            <SpecificationDescriptionCard data={i} key={index} />
          ))}
        </DescriptionSection>
      )}
      {activeIndex === navItem[1] && (
        <DescriptionSection background="#ffffff1a">
          {addetionalData?.map((i, index) => (
            <AddetionalInformationCard data={i} key={index} />
          ))}
        </DescriptionSection>
      )}
      {activeIndex === navItem[2] && (
        <DescriptionSection background="none" display="block">
          <ReviewHeader>
            <h4>Reviews</h4>
            <p>
              Your email address will not be published. Required fields are
              marked <span>*</span>
            </p>
          </ReviewHeader>

          <ReviewFrom />
        </DescriptionSection>
      )}
    </SpecificationContainer>
  );
};

export default SpecificationSection;
