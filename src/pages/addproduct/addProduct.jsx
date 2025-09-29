import React from "react";
import {
  AddContainer,
  TopBar,
  Header,
  Button,
  Text,
} from "./addProduct.styled";
import SmallCard from "../../Components/Addproduct/SmallCard";
import Layout from "../../Layout/Layout";

import { useNavigate } from "react-router-dom";
import CustomPagination from "../../Components/paginaton/CustomPagination";
const AddProduct = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/addform");
  };
  return (
    <Layout>
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
    </Layout>
  );
};

export default AddProduct;
