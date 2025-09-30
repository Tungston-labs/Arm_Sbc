
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // import useNavigate
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
} from "./Comparison.styled";
import Navbar from "../../Components/Navbar/Navbar";
import ModalWithCards from "../../Components/Comparison/ModalWithCards";
import { Main } from "../Homepage/Header.style";

// Define the order of features for the table
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
  const navigate = useNavigate(); // initialize navigate

  useEffect(() => {
    const stored = localStorage.getItem("comparisonProducts");
    if (stored) {
      setItems(JSON.parse(stored));
    }
  }, []);

  const handleAddProduct = () => setShowModal(true);

  const handleCloseModal = () => {
    setShowModal(false);
  
    // Read the updated comparison list from localStorage
    const stored = localStorage.getItem("comparisonProducts");
    if (stored) setItems(JSON.parse(stored));
  
    // Notify other components (like Navbar) that comparison updated
    window.dispatchEvent(new Event("comparisonUpdated"));
  };
  

  const handleRemove = (id) => {
    const updated = items.filter((item) => item.id !== id);
    setItems(updated);
    localStorage.setItem("comparisonProducts", JSON.stringify(updated));
  };

  // Map nested fields to flatten for table display
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
    <> 
    <Main>
     <Navbar />
    <Container>
    
      <Header>
        Comparison Chart
        <Button onClick={handleAddProduct}>Compare Product</Button>
      </Header>

      <RowCell>
        <RowBox count={items.length}>
          <FeatureName>Product Info</FeatureName>
          {items.map((item) => (
            <ProductInfoCell key={item.id}>
              <RemoveButton onClick={() => handleRemove(item.id)}>×</RemoveButton>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>
                {item.ram} || {item.cores} || {item.storage}
              </p>
              <button onClick={() => navigate(`/product/${item.id}`)}>
                Read More
              </button>
            </ProductInfoCell>
          ))}
        </RowBox>

        {featureOrder.map((feature) => (
          <RowBox key={feature} count={items.length}>
            <FeatureName>{feature}</FeatureName>
            {items.map((item) => (
              <FeatureCell key={`${feature}-${item.id}`}>
                {feature === "description"
                  ? (getFeatureValue(item, feature) || "").replace(/\\n/g, ". ")
                  : getFeatureValue(item, feature)}
              </FeatureCell>
            ))}
          </RowBox>
        ))}

      </RowCell>

      {showModal && <ModalWithCards onClose={handleCloseModal} />}
    </Container>
    </Main>
    </>
  );
};

export default Comparison;

