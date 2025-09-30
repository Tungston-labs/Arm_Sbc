import React from "react";
import { Input } from "antd";
import { StyledCollapse, StyledPanel } from "./CardsInput.styled";
import { specSections } from "./Spec-section";

export default function DemoCollapse({ specs, onSpecsChange }) {
  const handleChange = (sectionKey, field, value) => {
    onSpecsChange({
      ...specs,
      [sectionKey]: {
        ...specs?.[sectionKey],
        [field]: value,
      },
    });
  };

  return (
    <StyledCollapse accordion>
      {specSections.map((section) => (
        <StyledPanel header={section.title} key={section.key}>
          {section.fields.map((field) => {
            const currentValue = specs?.[section.key]?.[field] || "";
            const isEmpty = currentValue === "";

            return (
              <div
                key={field}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                  marginBottom: "20px",
                }}
              >
                <Input value={field} disabled />
                <Input
                  placeholder={isEmpty ? "Overview" : ""}
                  value={currentValue}
                  onFocus={(e) => (e.target.placeholder = "")} 
                  onBlur={(e) => {
                    if (!e.target.value) e.target.placeholder = "Overview";
                  }}
                  onChange={(e) =>
                    handleChange(section.key, field, e.target.value)
                  }
                />
              </div>
            );
          })}
        </StyledPanel>
      ))}
    </StyledCollapse>
  );
}
