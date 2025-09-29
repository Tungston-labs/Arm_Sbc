import {
  AddetionalInformationTextContainer,
  DescriptionLabel,
  DescriptionValue,
} from "../../../pages/product/singleProduct.style";

const AddetionalInformationCard = ({ data }) => {
  return (
    <AddetionalInformationTextContainer>
      <DescriptionLabel width="50%" border={true} padding={true}>
        {data?.label}
      </DescriptionLabel>
      <DescriptionValue width="50%" border={true} padding={true}>
        {data?.value}
      </DescriptionValue>
    </AddetionalInformationTextContainer>
  );
};

export default AddetionalInformationCard;
