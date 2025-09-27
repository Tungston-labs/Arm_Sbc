// src/pages/AddViewProduct.jsx
import React, { useState } from "react";
import { Button } from "antd";
import { IoMdArrowRoundBack } from "react-icons/io";
import productImg from "../../assets/Comparison/chip.svg";
import addetionalData from "../../pages/product/data/AddetionalInformationData.json";
import descriptionData from "../../components/Addproduct/DescriptionDetails/DescriptionData.json";
import AddProductNavBar from "../../components/Addproduct/AddProductNavbar";
import AddProductDescriptionCard from "../../components/Addproduct/DescriptionDetails/DescriptionSection";

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
  DescriptionSection,
  ActionBar,
  EditButton,
  DeleteButton,
} from "./AddViewProduct.styled";
import AddetionalInformationCard from "../../Components/product/Specification/AddetionalInformationCard";

const AddViewProduct = () => {
  // track currently active tab
  const [activeTab, setActiveTab] = useState("Description");

  return (
    <AddContainer>
      <TopBar>
        <IoMdArrowRoundBack size={28} color="#fff" />
        <Header>Add product</Header>
       <ActionBar>
  <EditButton type="primary">Edit</EditButton>
  <DeleteButton danger>Delete</DeleteButton>
</ActionBar>

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
            <AddProductDescriptionCard allData={descriptionData} />
          ) : (
            <div>No description data available.</div>
          )}
        </div>
      )}

   

    {activeTab === "Additional Information" && (
        <DescriptionSection background="#ffffff1a">
          {addetionalData?.map((i, index) => (
            <AddetionalInformationCard data={i} key={index} />
          ))}
        </DescriptionSection>
      )}

      
    </AddContainer>
  );
};

export default AddViewProduct;
