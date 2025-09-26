import React from "react";
import { AddContainer, Header, Text } from "../addProduct.styled";
import {
  FormArea,
  FullWidth,
  Input,
  LabelInline,
  LabelInputBox,
  Row,
  TextArea,
  TextBox,
  TopBar,
  TwoCols,
} from "./addForm.styled";
import { IoMdArrowRoundBack } from "react-icons/io";
import ImageUploader from "../../../components/Addproduct/ImageUploadSection/ImageUpload";
import DemoCollapse from "../../../components/Addproduct/Ant-design/CardsAndInput";

const AddForm = () => {
  return (
    <AddContainer>
      <TopBar>
        <IoMdArrowRoundBack size={28} color="#fff" />
        <Header>Add Product</Header>
      </TopBar>

      <Text>
        Enter new products fast and accurately. Stay on top of your inventory.
      </Text>
      <ImageUploader />
      <LabelInputBox>
        <Row>
          <TextBox>
            <LabelInline>Base details</LabelInline>
          </TextBox>
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
        </Row>

        <Row>
          <TextBox>
            <LabelInline>Specifications</LabelInline>
          </TextBox>
          <FormArea>
            <DemoCollapse />
          </FormArea>
        </Row>

        <Row>
          <TextBox>
            <LabelInline>Additional information</LabelInline>
          </TextBox>
          <FormArea>
            <TwoCols>
              <Input placeholder="Enter product name" />
              <Input placeholder="Ram" />
            </TwoCols>
          </FormArea>
        </Row>
      </LabelInputBox>
    </AddContainer>
  );
};

export default AddForm;
