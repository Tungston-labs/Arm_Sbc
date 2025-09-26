import React from "react";
import { Input } from "antd";
import { StyledCollapse, StyledPanel } from "./CardsInput.styled";
import { specSections } from "./Spec-section"; 

export default function DemoCollapse() {
  return (
    <StyledCollapse accordion>
      {specSections.map((section) => (
        <StyledPanel header={section.title} key={section.key}>
          {section.fields.map((field, idx) => (
            <div
              key={idx}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
                marginBottom: "20px",
              }}
            >
              <Input placeholder={field} />
              <Input placeholder="overview" />
            </div>
          ))}
        </StyledPanel>
      ))}
    </StyledCollapse>
  );
}
