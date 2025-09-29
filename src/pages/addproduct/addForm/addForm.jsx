import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewProduct } from "../../../redux/productSlice";
import { AddContainer, Header, Text } from "../addProduct.styled";
import Layout from "../../../Layout/Layout"
import {
  AddButton,
  ButtonContainer,
  CancelButton,
  FormArea,
  FullWidth,
  Input,
  LabelInline,
  LabelInputBox,
  Row,
  TextBox,
  TopBar,
  TwoCols,
  TextArea,
} from "./addForm.styled";
import { IoMdArrowRoundBack } from "react-icons/io";
import ImageUploader from "../../../Components/Addproduct/ImageUploadSection/ImageUpload";
import DemoCollapse from "../../../Components/Addproduct/Ant-design/CardsAndInput";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddForm = () => {
  // const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    ram: "",
    core: "",
    storage: "",
    description: "",
    specifications: {},
    additional_info: { weight: "", dimension: "" },
    images: [],
  });

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("accessToken");

      const fd = new FormData();
      fd.append("name", formData.name);
      fd.append("ram", formData.ram);
      fd.append("cores", formData.core);
      fd.append("storage", formData.storage);
      fd.append("description", formData.description);

      fd.append(
        "additional_info",
        JSON.stringify({
          weight: formData.additional_info.weight,
          dimension: formData.additional_info.dimension,
        })
      );

      fd.append("specs", JSON.stringify(formData.specifications));

      if (formData.images?.[0]) {
        fd.append("image", formData.images[0]);
      }

      await axios.post("http://178.248.112.16:8002/api/products/create/", fd, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      Swal.fire({
        title: "Product Created!",
        text: "Your product was added successfully.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/addproduct");
      });
    } catch (error) {
      console.error("Error creating product:", error);

      Swal.fire({
        title: "Error",
        text: "Failed to create product. Please try again.",
        icon: "error",
        confirmButtonText: "Close",
      });
    }
  };
  return (
   <Layout>
     <AddContainer as="form" onSubmit={handleSubmit}>
      <TopBar>
        <IoMdArrowRoundBack size={28} color="#fff" />
        <Header>Add Product</Header>
      </TopBar>

      <Text>
        Enter new products fast and accurately. Stay on top of your inventory.
      </Text>

      <ImageUploader
        images={formData.images}
        onImagesChange={(imgs) => updateFormData("images", imgs)}
      />

      <LabelInputBox>
        <Row>
          <TextBox>
            <LabelInline>Base details</LabelInline>
          </TextBox>
          <FormArea>
            <TwoCols>
              <Input
                placeholder="Enter product name"
                value={formData.name}
                onChange={(e) => updateFormData("name", e.target.value)}
              />
              <Input
                placeholder="Ram"
                value={formData.ram}
                onChange={(e) => updateFormData("ram", e.target.value)}
              />
            </TwoCols>
            <TwoCols>
              <Input
                placeholder="Core"
                value={formData.core}
                onChange={(e) => updateFormData("core", e.target.value)}
              />
              <Input
                placeholder="Storage"
                value={formData.storage}
                onChange={(e) => updateFormData("storage", e.target.value)}
              />
            </TwoCols>
            <FullWidth>
              <TextArea
                placeholder="Add description"
                value={formData.description}
                onChange={(e) => updateFormData("description", e.target.value)}
              />
            </FullWidth>
          </FormArea>
        </Row>

        <Row>
          <TextBox>
            <LabelInline style={{ marginTop: "60px" }}>
              Specifications
            </LabelInline>
          </TextBox>
          <FormArea>
            <DemoCollapse
              specs={formData.specifications}
              onSpecsChange={(specs) => updateFormData("specifications", specs)}
            />
          </FormArea>
        </Row>

        <Row>
          <TextBox>
            <LabelInline>Additional information</LabelInline>
          </TextBox>
          <FormArea>
            <TwoCols>
              <Input
                placeholder="Weight"
                value={formData.additional_info.weight || ""}
                onChange={(e) =>
                  updateFormData("additional_info", {
                    ...formData.additional_info,
                    weight: e.target.value,
                  })
                }
              />
              <Input
                placeholder="Dimension"
                value={formData.additional_info.dimension || ""}
                onChange={(e) =>
                  updateFormData("additional_info", {
                    ...formData.additional_info,
                    dimension: e.target.value,
                  })
                }
              />
            </TwoCols>
          </FormArea>
        </Row>
      </LabelInputBox>

      <ButtonContainer>
        <CancelButton type="button">Cancel</CancelButton>
        <AddButton type="submit">Save</AddButton>
      </ButtonContainer>
    </AddContainer>
   </Layout>
  );
};

export default AddForm;
