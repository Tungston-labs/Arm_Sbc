import React from "react";
import { Button } from "antd";
import { IoMdArrowRoundBack } from "react-icons/io";
import productImg from "../../assets/Comparison/chip.svg";

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
} from "./AddViewProduct.styled";

const AddViewProduct = () => {
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
    </AddContainer>
  );
};

export default AddViewProduct;
