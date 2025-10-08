import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Header,
  FeatureName,
  ProductInfoCell,
  FeatureCell,
  RowBox,
  Button,
  RowCell,
  RemoveButton,
  RowSpacer,
  Main,
  EmptyState,
} from "./Comparison.styled";
import Navbar from "../../Components/Navbar/Navbar";
import ModalWithCards from "../../Components/Comparison/ModalWithCards";
import Empty from "../../assets/Comparison/picture.svg";
import Footer from "../../Components/Footer/Footer";

// feature order stays the same
export const featureOrder = [
  "dimension",
  "price",
  "rating",
  "description",
  "sku",
  "availability",
  "weight",
  "ram",
  "cores",
  "storage",
  "processor_cpu",
  "memory_capacity",
  "memory_technology",
  "storage_M2",
  "storage_SATA",
  "graphics_controller",
];

const Comparison = () => {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("comparisonProducts");
    if (stored) setItems(JSON.parse(stored));
  }, []);

  const handleAddProduct = () => setShowModal(true);

  const handleCloseModal = () => {
    setShowModal(false);
    const stored = localStorage.getItem("comparisonProducts");
    if (stored) setItems(JSON.parse(stored));
    window.dispatchEvent(new Event("comparisonUpdated"));
  };

  const handleRemove = (id) => {
    const updated = items.filter((item) => item.id !== id);
    setItems(updated);
    localStorage.setItem("comparisonProducts", JSON.stringify(updated));
  };

  const getFeatureValue = (item, feature) => {
    switch (feature) {
      case "dimension":
        return item.additional_info?.dimension || "-";
      case "weight":
        return item.additional_info?.weight || "-";
      case "processor_cpu":
        return item.specs?.processor?.cpu || "-";
      case "memory_capacity":
        return item.specs?.memory?.capacity || "-";
      case "memory_technology":
        return item.specs?.memory?.technology || "-";
      case "storage_M2":
        return item.specs?.storage?.["M.2"] || "-";
      case "storage_SATA":
        return item.specs?.storage?.SATA || "-";
      case "graphics_controller":
        return item.specs?.graphics?.controller || "-";
      default:
        return item[feature] || "-";
    }
  };

  return (
    <Main>
      <Navbar />
      <Container>
        <Header>
          <h1>Comparison </h1>
          <Button onClick={handleAddProduct}>Compare Product</Button>
        </Header>

        {items.length < 2 ? (
          <EmptyState>
            <img src={Empty} alt="No products" />
            <p>
              Please select at least <strong>two products</strong> to compare
            </p>
          </EmptyState>
        ) : (
          <RowCell>
            <RowBox count={items.length} isHeader>
              <FeatureName isHeader>Product Info</FeatureName>
              {items.map((item) => (
                <ProductInfoCell key={item.id}>
                  <RemoveButton onClick={() => handleRemove(item.id)}>
                    ×
                  </RemoveButton>
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p style={{ fontWeight: 400, opacity: 0.9 }}>
                    {item.ram || "-"} &nbsp;|&nbsp; {item.cores || "-"}{" "}
                    &nbsp;|&nbsp; {item.storage || "-"}
                  </p>
                  <button onClick={() => navigate(`/product/${item.id}`)}>
                    Read more
                  </button>
                </ProductInfoCell>
              ))}
            </RowBox>

            <RowSpacer />

            {featureOrder.map((feature) => (
              <RowBox key={feature} count={items.length}>
                <FeatureName>
                  {feature.charAt(0).toUpperCase() + feature.slice(1)}
                </FeatureName>
                {items.map((item) => (
                  <FeatureCell key={`${feature}-${item.id}`}>
                    {feature === "description"
                      ? (getFeatureValue(item, feature) || "").replace(
                          /\\n/g,
                          ". "
                        )
                      : getFeatureValue(item, feature)}
                  </FeatureCell>
                ))}
              </RowBox>
            ))}
          </RowCell>
        )}

        {showModal && <ModalWithCards onClose={handleCloseModal} />}
      </Container>
      <Footer/>
    </Main>
  );
};

export default Comparison;
