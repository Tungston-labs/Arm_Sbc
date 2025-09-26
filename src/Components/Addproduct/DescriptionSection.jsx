import React from "react";
import {
  DescriptionCard,
  DescriptionHeader,
  DescriptionLabel,
  DescriptionValue,
} from "./DescriptionSectio.styles";

const AddProductDescriptionCard = ({ data }) => {
  return (
    <DescriptionCard>
      <DescriptionHeader>{data?.header}</DescriptionHeader>
      {data?.items?.map((item, index) => (
        <React.Fragment key={index}>
          <DescriptionLabel>{item?.label}</DescriptionLabel>
          <DescriptionValue>{item?.value}</DescriptionValue>
        </React.Fragment>
      ))}
    </DescriptionCard>
  );
};

export default AddProductDescriptionCard;
