import {
  DescriptionSection,
  SpecificationContainer,
} from "../../../pages/product/singleProduct.style";
import SpecificationNavBar from "./SpecificationNavBar";
import SpecificationDescriptionCard from "./SpecificationDescriptionCard";
import descriptionData from "../../../pages/product/data/specificationData.json";
import addetionalData from "../../../pages/product/data/AddetionalInformationData.json";
import { useState } from "react";
import AddetionalInformationCard from "./AddetionalInformationCard";
import ReviewFormcontainer from "./ReviewFormcontainer";
import ReviewCardSContainer from "./ReviewCardSContainer";

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
        <DescriptionSection display="block">
          <ReviewFormcontainer />
          <ReviewCardSContainer />
        </DescriptionSection>
      )}
    </SpecificationContainer>
  );
};

export default SpecificationSection;
