import React from "react";
import {
  SpecCard,
  SpecGrid,
  Section,
  SectionHeader,
  Row,
  Label,
  Value,
} from "./DescriptionSectio.styles";

const AddProductDescriptionCard = ({ allData }) => {
  const mid = Math.ceil(allData.length / 2);
  const left = allData.slice(0, mid);
  const right = allData.slice(mid);

  const renderColumn = (sections) =>
    sections.map((sec, idx) => (
      <Section key={idx}>
        <SectionHeader>{sec.header}</SectionHeader>
        {sec.items.map((item, i) => (
          <Row key={i}>
            <Label>{item.label}</Label>
            <Value>{item.value}</Value>
          </Row>
        ))}
      </Section>
    ));

  return (
    <SpecCard>
      <SpecGrid>
        <div>{renderColumn(left)}</div>
        <div>{renderColumn(right)}</div>
      </SpecGrid>
    </SpecCard>
  );
};

export default AddProductDescriptionCard;
