import React from "react";
import {
  AddContainer,
  TopBar,
  Header,
  Button,
  Text,
} from "./addProduct.styled";
import SmallCard from "../../components/Addproduct/SmallCard";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/addform");
  };
  return (
    <AddContainer>
      <TopBar>
        <Header>Products</Header>
        <Button onClick={handleNavigate}>Add Product</Button>
      </TopBar>

      <Text>
        Enter new products fast and accurately. Stay on top of your inventory.
      </Text>
      <SmallCard />
    </AddContainer>
  );
};

export default AddProduct;
