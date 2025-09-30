import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewProduct, fetchProductAdmin } from "../../../redux/productSlice";
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
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const AddForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productId } = useParams();
  const { productDetailAdmin } = useSelector((state) => state.product);
  const [formData, setFormData] = useState({
    name: "",
    ram: "",
    cores: "",
    storage: "",
    description: "",
    specifications: {},
    additional_info: { weight: "", dimension: "" },
    images: [],
  });

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductAdmin(productId));
    }
  }, [dispatch, productId]);
  useEffect(() => {
    if (productId && productDetailAdmin) {
      setFormData({
        name: productDetailAdmin.name || "",
        ram: productDetailAdmin.ram || "",
        cores: productDetailAdmin.cores || "",
        storage: productDetailAdmin.storage || "",
        description: productDetailAdmin.description || "",
        additional_info: productDetailAdmin.additional_info || {
          weight: "",
          dimension: "",
        },
        specifications:
          productDetailAdmin.specifications || productDetailAdmin.specs || {},
        images: productDetailAdmin.image
          ? [String(productDetailAdmin.image)]
          : [],
      });
    }
  }, [productId, productDetailAdmin]);
async function urlToFile(url, filename, token) {
  const headers = token ? { Authorization: `Bearer ${token}` } : {};
  const res = await fetch(url, { headers });
  if (!res.ok) throw new Error('Failed to fetch image');
  const blob = await res.blob();
  return new File([blob], filename || 'image', { type: blob.type || 'image/jpeg' });
}

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const token = localStorage.getItem("accessToken");
    const fd = new FormData();

    fd.append("name", formData.name);
    fd.append("ram", parseInt(formData.ram, 10) || 0);
    fd.append("cores", parseInt(formData.cores, 10) || 0);
    fd.append("storage", parseInt(formData.storage, 10) || 0);
    fd.append("description", formData.description || "");
    fd.append("additional_info", JSON.stringify({
      weight: formData.additional_info.weight || "",
      dimension: formData.additional_info.dimension || "",
    }));
    fd.append("specs", JSON.stringify(formData.specifications || {}));

    if (!productId) {
      if (!(formData.images?.[0] instanceof File)) {
        toast.error("Please upload an image before creating the product.");
        return;
      }
      fd.append("image", formData.images[0]);
    } else {
      if (formData.images?.[0] instanceof File) {
        fd.append("image", formData.images[0]);
      } else if (typeof formData.images?.[0] === "string") {
        try {
          const imageUrl = formData.images[0];
          const filename = imageUrl.split("/").pop().split("?")[0] || "image";
          const file = await urlToFile(imageUrl, filename, token);
          fd.append("image", file);
        } catch (err) {
          console.warn("Could not fetch remote image to attach - user may need to re-upload.", err);
        }
      }
    }

    for (let pair of fd.entries()) {
      console.log("FormData:", pair[0], pair[1]);
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const url = productId
      ? `http://178.248.112.16:8002/api/products/${productId}/`
      : `http://178.248.112.16:8002/api/products/create/`;

    if (productId) {
      await axios.put(url, fd, config); 
    } else {
      await axios.post(url, fd, config);
    }

    toast.success(`Product ${productId ? "updated" : "added"} successfully!`);
    setTimeout(() => navigate("/addproduct"), 1000);
  } catch (error) {
    console.error("Error saving product:", error);
    if (error?.response) {
      console.error("Response data:", error.response.data);
      toast.error(`Save failed: ${JSON.stringify(error.response.data)}`);
    } else {
      toast.error("Failed to save product. Please check your input.");
    }
  }
};


  return (
   <Layout>
     <AddContainer as="form" onSubmit={handleSubmit}>
      <TopBar>
        <button
          type="button"
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: 0,
            display: "flex",
            alignItems: "center",
          }}
          onClick={() => navigate("/addproduct")}
        >
          <IoMdArrowRoundBack size={28} color="#fff" />
        </button>

        <Header>{productId ? "Edit Product" : "Add Product"}</Header>
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
                value={formData.cores}
                onChange={(e) => updateFormData("cores", e.target.value)}
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
        <CancelButton
          type="button"
          onClick={() => {
            navigate("/addproduct");
          }}
        >
          Cancel
        </CancelButton>
        <AddButton type="submit">Save</AddButton>
      </ButtonContainer>
    </AddContainer>
   </Layout>
  );
};

export default AddForm;
