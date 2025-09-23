import React, { useState } from "react";
import {
  Container,
  Header,
  HeaderCard,
  Box,
  BoxText,
  ReadMoreButton,
  RemoveButton,
} from "./Comparison.styled";
import Chip from "../../assets/Comparison/chip.svg";
import Navbar from "../../Components/Navbar/Navbar";
import smallRows from "./SmallRows";
const Comparison = () => {
  const row1 = [
    { text: "Product Info" },
    {
      img: Chip,
      text: "ARM Development Board Rockchip 3288, Quad Core 1.7 GHz. This board is perfect for embedded systems and high-performance applications.",
    },
    {
      img: Chip,
      text: "ARM Development Board Rockchip 3288, Quad Core 1.7 GHz. Includes GPU acceleration and multiple interfaces for flexible usage.",
    },
    {
      img: Chip,
      text: "ARM Development Board Rockchip 3288, Quad Core 1.7 GHz. Ideal for IoT, robotics, and edge computing projects.",
    },
  ];

 
  const handleRemove = (index) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  const [expanded, setExpanded] = useState({});

  const toggleReadMore = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const renderRow = (data) =>
    data.map((item, index) => {
      const isExpanded = expanded[index];
      const shouldTruncate = item.text && item.text.length > 60;
      const displayText =
        shouldTruncate && !isExpanded
          ? item.text.slice(0, 60) + "..."
          : item.text;

      return (
        <Box key={index}>
          {/* X Icon */}
          {item.img && (
            <RemoveButton onClick={() => handleRemove(index)}>×</RemoveButton>
          )}
          <div className="image-scroll"></div>
          {item.img && <img src={item.img} alt={`box-${index}`} />}
          {item.text && (
            <>
              <BoxText>{displayText}</BoxText>
              {shouldTruncate && (
                <ReadMoreButton onClick={() => toggleReadMore(index)}>
                  {isExpanded ? "Read Less" : "Read More"}
                </ReadMoreButton>
              )}
            </>
          )}
        </Box>
      );
    });

  return (
<Container>
  <Navbar />
  <Header>Comparison Chart</Header>

  <div className="scroll-wrapper">
    <HeaderCard>{renderRow(row1)}</HeaderCard>

    {smallRows.map((row, rowIndex) => (
      <HeaderCard small key={rowIndex}>
        {row.map((item, index) => (
          <Box key={index} small>
            {item.img && <img src={item.img} alt={`box-${index}`} />}
            {item.text && <BoxText small>{item.text}</BoxText>}
          </Box>
        ))}
      </HeaderCard>
    ))}
  </div>
</Container>

  );
};

export default Comparison;
