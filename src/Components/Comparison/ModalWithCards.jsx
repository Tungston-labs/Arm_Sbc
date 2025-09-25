import React, { useState } from "react";
import Chip from "../../assets/Comparison/chip.svg";
import {
  CompareButton,
  InnerGrid,
  ModalCard,
  Overlay,
  ProductCard,
  SubHeader,
  Title,
} from "./ModalWithCards.styled";

const productInfo = [
  { img: Chip, text: "ARM Development Board Rockchip 3288, Quad Core 1.7 GHz. This board is perfect for embedded systems and high-performance applications." },
  { img: Chip, text: "ARM Development Board Rockchip 3288, Quad Core 1.7 GHz. Great for embedded projects and prototyping." },
  { img: Chip, text: "ARM Development Board Rockchip 3288, Quad Core 1.7 GHz. Built for high-performance embedded systems." },
  { img: Chip, text: "ARM Development Board Rockchip 3288 ..." },
  { img: Chip, text: "ARM Development Board Rockchip 3288 ..." },
  { img: Chip, text: "ARM Development Board Rockchip 3288 ..." },
];

export default function ModalWithCards({ onClose }) {
  const [selectedIds, setSelectedIds] = useState([]);

  return (
    <Overlay>
      <ModalCard>
        <Title>Product Comparison</Title>
        <SubHeader>Choose products to compare</SubHeader>

        <InnerGrid>
          {productInfo.map((item, idx) => (
            <ProductCard
              key={idx}
              $selected={selectedIds.includes(idx)}
              onClick={() => {
                setSelectedIds((prev) =>
                  prev.includes(idx)
                    ? prev.filter((id) => id !== idx)
                    : [...prev, idx]
                );
              }}
            >
              <img src={item.img} alt="product" />
              <p>{item.text}</p>
            </ProductCard>
          ))}
        </InnerGrid>

        <CompareButton onClick={onClose}>Compare</CompareButton>
      </ModalCard>
    </Overlay>
  );
}
