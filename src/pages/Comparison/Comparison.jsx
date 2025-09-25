import React, { useState } from "react";
import {
  Container, Header, FeatureName, ProductInfoCell,
  FeatureCell, RowBox, Button, RowCell, RemoveButton
} from "./Comparison.styled";
import Navbar from "../../Components/Navbar/Navbar";
import { featureOrder } from "./SmallRows";
import initialData from "./SmallRows";
import ModalWithCards from "../../Components/Comparison/ModalWithCards";

const Comparison = () => {
  const [items, setItems] = useState(initialData);
  const [showModal, setShowModal] = useState(false);

  const handleAddProduct = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleRemove = (index) =>
    setItems((prev) => prev.filter((_, i) => i !== index));

  return (
    <Container>
      <Navbar />
      <Header>
        Comparison Chart
        <Button onClick={handleAddProduct}>Compare Product</Button>
      </Header>

      <RowCell>
        <RowBox count={items.length}>
          <FeatureName>Product Info</FeatureName>
          {items.map((item, idx) => (
            <ProductInfoCell key={`info-${idx}`}>
              <RemoveButton onClick={() => handleRemove(idx)}>×</RemoveButton>

              <img src={item.productInfo.img} alt="product" />
              <p>{item.productInfo.text}</p>
              <button>Read More</button>
            </ProductInfoCell>
          ))}
        </RowBox>

        {featureOrder.map((feature) => (
          <RowBox key={feature} count={items.length}>
            <FeatureName>{feature}</FeatureName>
            {items.map((item, idx) => (
              <FeatureCell key={`${feature}-${idx}`}>
                {item[feature]}
              </FeatureCell>
            ))}
          </RowBox>
        ))}
      </RowCell>

      {showModal && <ModalWithCards onClose={handleCloseModal} />}
    </Container>
  );
};

export default Comparison;
