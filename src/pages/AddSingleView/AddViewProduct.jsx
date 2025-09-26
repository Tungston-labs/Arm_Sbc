// src/pages/AddViewProduct.jsx
import React, { useState } from "react";
import { Button } from "antd";
import { IoMdArrowRoundBack } from "react-icons/io";
import productImg from "../../assets/Comparison/chip.svg";

import descriptionData from "../../components/Addproduct/DescriptionData.json";
import AddProductNavBar from "../../components/Addproduct/AddProductNavbar";
import AddProductDescriptionCard from "../../components/Addproduct/DescriptionSection";

import {
  AddContainer,
  TopBar,
  Header,
  SubText,
  ImageRow,
  ImageWrapper,
  ImageContainer,
  FormBlock,
  HeadingBox,
  FormArea,
  TwoCols,
  FullWidth,
  Input,
  TextArea,
  NavbarContainer,
} from "./AddViewProduct.styled";

const AddViewProduct = () => {
  // track currently active tab
  const [activeTab, setActiveTab] = useState("Description");

  return (
    <AddContainer>
      <TopBar>
        <IoMdArrowRoundBack size={28} color="#fff" />
        <Header>Add product</Header>
        <div style={{ marginLeft: "auto" }}>
          <Button type="primary" style={{ marginRight: 12 }}>
            Edit
          </Button>
          <Button danger>Delete</Button>
        </div>
      </TopBar>

      <SubText>
        Enter new products fast and accurately. Stay on top of your inventory.
      </SubText>

      <ImageRow>
        <ImageWrapper>
          <ImageContainer src={productImg} alt="Product preview" />
        </ImageWrapper>

        <FormBlock>
          <HeadingBox>Base details</HeadingBox>

          <FormArea>
            <TwoCols>
              <Input placeholder="Enter product name" />
              <Input placeholder="Ram" />
            </TwoCols>
            <TwoCols>
              <Input placeholder="Core" />
              <Input placeholder="Storage" />
            </TwoCols>
            <FullWidth>
              <TextArea placeholder="Add description" />
            </FullWidth>
          </FormArea>
        </FormBlock>
      </ImageRow>

      <NavbarContainer>
        <AddProductNavBar activeTab={activeTab} setActiveTab={setActiveTab} />
      </NavbarContainer>

      {activeTab === "Description" && (
        <div style={{ marginTop: "2rem" }}>
          {Array.isArray(descriptionData) && descriptionData.length ? (
            descriptionData.map((section, idx) => (
              <AddProductDescriptionCard key={idx} data={section} />
            ))
          ) : (
            <div>No description data available.</div>
          )}
        </div>
      )}

      {activeTab === "Additional Information" && (
        <div style={{ marginTop: "2rem" }}>
          <p style={{ color: "#ccc" }}>Additional information content goes here.</p>
        </div>
      )}
    </AddContainer>
  );
};

export default AddViewProduct;
