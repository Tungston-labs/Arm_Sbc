import React from "react";
import { CardGrid, Card, CardImage, CardTitle, CardDetail, CardDetailsWrap} from "./SmallCard.styles";
import Chip from "../../assets/Comparison/chip.svg";

const SmallCard = () => {
  const productInfo = [
    {
      img: Chip,
      text: "ARM Development Board Rockchip 3288, Quad Core 1.7 GHz. This board is perfect for embedded systems and high-performance applications.",
      price: "₹3000",
      Ram: "8GB Core",
      Storage: "64GB Storage",
    },
    {
      img: Chip,
      text: "ARM Development Board Rockchip 3288, Quad Core 1.7 GHz. Great for embedded projects and prototyping.",
      price: "₹3000",
      Ram: "8GB Core",
      Storage: "64GB Storage",
    },
    {
      img: Chip,
      text: "ARM Development Board Rockchip 3288, Quad Core 1.7 GHz. Great for embedded projects and prototyping.",
      price: "₹3000",
      Ram: "8GB Core",
      Storage: "64GB Storage",
    },
     {
      img: Chip,
      text: "ARM Development Board Rockchip 3288, Quad Core 1.7 GHz. Great for embedded projects and prototyping.",
      price: "₹3000",
      Ram: "8GB Core",
      Storage: "64GB Storage",
    },
     {
      img: Chip,
      text: "ARM Development Board Rockchip 3288, Quad Core 1.7 GHz. Great for embedded projects and prototyping.",
      price: "₹3000",
      Ram: "8GB Core",
      Storage: "64GB Storage",
    },
      {
      img: Chip,
      text: "ARM Development Board Rockchip 3288, Quad Core 1.7 GHz. Great for embedded projects and prototyping.",
      price: "₹3000",
      Ram: "8GB Core",
      Storage: "64GB Storage",
    },
      {
      img: Chip,
      text: "ARM Development Board Rockchip 3288, Quad Core 1.7 GHz. Great for embedded projects and prototyping.",
      price: "₹3000",
      Ram: "8GB Core",
      Storage: "64GB Storage",
    },
      {
      img: Chip,
      text: "ARM Development Board Rockchip 3288, Quad Core 1.7 GHz. Great for embedded projects and prototyping.",
      price: "₹3000",
      Ram: "8GB Core",
      Storage: "64GB Storage",
    },
      {
      img: Chip,
      text: "ARM Development Board Rockchip 3288, Quad Core 1.7 GHz. Great for embedded projects and prototyping.",
      price: "₹3000",
      Ram: "8GB Core",
      Storage: "64GB Storage",
    },
      {
      img: Chip,
      text: "ARM Development Board Rockchip 3288, Quad Core 1.7 GHz. Great for embedded projects and prototyping.",
      price: "₹3000",
      Ram: "8GB Core",
      Storage: "64GB Storage",
    },
      {
      img: Chip,
      text: "ARM Development Board Rockchip 3288, Quad Core 1.7 GHz. Great for embedded projects and prototyping.",
      price: "₹3000",
      Ram: "8GB Core",
      Storage: "64GB Storage",
    },
      {
      img: Chip,
      text: "ARM Development Board Rockchip 3288, Quad Core 1.7 GHz. Great for embedded projects and prototyping.",
      price: "₹3000",
      Ram: "8GB Core",
      Storage: "64GB Storage",
    },
      {
      img: Chip,
      text: "ARM Development Board Rockchip 3288, Quad Core 1.7 GHz. Great for embedded projects and prototyping.",
      price: "₹3000",
      Ram: "8GB Core",
      Storage: "64GB Storage",
    },
      {
      img: Chip,
      text: "ARM Development Board Rockchip 3288, Quad Core 1.7 GHz. Great for embedded projects and prototyping.",
      price: "₹3000",
      Ram: "8GB Core",
      Storage: "64GB Storage",
    },
      {
      img: Chip,
      text: "ARM Development Board Rockchip 3288, Quad Core 1.7 GHz. Great for embedded projects and prototyping.",
      price: "₹3000",
      Ram: "8GB Core",
      Storage: "64GB Storage",
    },
      {
      img: Chip,
      text: "ARM Development Board Rockchip 3288, Quad Core 1.7 GHz. Great for embedded projects and prototyping.",
      price: "₹3000",
      Ram: "8GB Core",
      Storage: "64GB Storage",
    },
    

  ];

  return (
    <CardGrid>
      {productInfo.map((item, i) => (
        <Card key={i}>
          <CardImage src={item.img} alt="chip" />
          <CardTitle>{item.text}</CardTitle>
          <CardDetailsWrap>
    <CardDetail>{item.price}</CardDetail>
    <CardDetail> {item.Ram}</CardDetail>
    <CardDetail> {item.Storage}</CardDetail>
  </CardDetailsWrap>
        </Card>
      ))}
    </CardGrid>
  );
};

export default SmallCard;
