import {
  Descriptioncard,
  DescriptionHeader,
  DescriptionLabel,
  DescriptionTextContainer,
  DescriptionValue,
} from "../../../pages/product/singleProduct.style";

const SpecificationDescriptionCard = ({ data }) => {
  return (
    <Descriptioncard>
      <DescriptionHeader>{data?.header}</DescriptionHeader>
      {data?.items?.map((i) => (
        <DescriptionTextContainer>
          <DescriptionLabel>{i?.label}</DescriptionLabel>
          <DescriptionValue>{i?.value} </DescriptionValue>
        </DescriptionTextContainer>
      ))}
    </Descriptioncard>
  );
};

export default SpecificationDescriptionCard;
