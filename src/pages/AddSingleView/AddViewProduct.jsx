// src/pages/AddViewProduct.jsx
import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { IoMdArrowRoundBack } from "react-icons/io";
import productImg from "../../assets/Comparison/chip.svg";
import AddProductNavBar from "../../components/Addproduct/AddProductNavbar";
import AddProductDescriptionCard from "../../components/Addproduct/DescriptionDetails/DescriptionSection";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductAdmin } from "../../redux/productSlice";

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
  const [activeTab, setActiveTab] = useState("Description");
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { productDetailAdmin, loading } = useSelector((state) => state.product);
  useEffect(() => {
    if (productId) {
      dispatch(fetchProductAdmin(productId));
    }
  }, [dispatch, productId]);
  const descriptionDataFromApi =
    productDetailAdmin?.descriptionData ||
    productDetailAdmin?.specifications ||
    productDetailAdmin?.specs ||
    productDetailAdmin?.details ||
    [];
  const normalizeDescription = (raw) => {
    if (!raw) return [];
    if (Array.isArray(raw) && raw.length && raw[0].header) return raw;

    if (typeof raw === "object" && !Array.isArray(raw)) {
      return Object.entries(raw).map(([header, itemsObj]) => {
        if (Array.isArray(itemsObj)) {
          return { header, items: itemsObj };
        }
        const items = Object.entries(itemsObj || {}).map(([label, value]) => ({
          label,
          value,
        }));
        return { header, items };
      });
    }

    if (typeof raw === "string") {
      const lines = raw
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean);
      return [
        {
          header: "Description",
          items: lines.map((line, i) => ({
            label: `Line ${i + 1}`,
            value: line,
          })),
        },
      ];
    }

    return [];
  };

  const descriptionDataFromApiNormalized = normalizeDescription(
    descriptionDataFromApi
  );

  return (
    <AddContainer>
      <TopBar>
        <IoMdArrowRoundBack size={28} color="#fff" />
        <Header>{productId ? "Edit product" : "Add product"}</Header>
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
          <ImageContainer
            src={productDetailAdmin?.image || productImg}
            alt={productDetailAdmin?.name || "Product preview"}
          />
        </ImageWrapper>

        <FormBlock>
          <HeadingBox>Base details</HeadingBox>

          <FormArea>
            <TwoCols>
              <Input
                placeholder="Enter product name"
                defaultValue={productDetailAdmin?.name || ""}
              />
              <Input
                placeholder="Ram"
                defaultValue={productDetailAdmin?.ram || ""}
              />
            </TwoCols>
            <TwoCols>
              <Input
                placeholder="Core"
                defaultValue={productDetailAdmin?.cores || ""}
              />
              <Input
                placeholder="Storage"
                defaultValue={productDetailAdmin?.storage || ""}
              />
            </TwoCols>
            <FullWidth>
              <TextArea
                placeholder="Add description"
                defaultValue={productDetailAdmin?.description || ""}
              />
            </FullWidth>
          </FormArea>
        </FormBlock>
      </ImageRow>

      <NavbarContainer>
        <AddProductNavBar activeTab={activeTab} setActiveTab={setActiveTab} />
      </NavbarContainer>

      {activeTab === "Description" && (
        <div style={{ marginTop: "2rem" }}>
          {loading ? (
            <div>Loading...</div>
          ) : descriptionDataFromApiNormalized.length ? (
            <AddProductDescriptionCard
              allData={descriptionDataFromApiNormalized}
            />
          ) : (
            <div>No description data available.</div>
          )}
        </div>
      )}
{activeTab === "Additional Information" && (
  <DescriptionSection background="#ffffff1a">
    {productDetailAdmin?.additional_info
      ? Object.entries(productDetailAdmin.additional_info).map(
          ([key, value], idx) => (
            <AddetionalInformationCard
              key={idx}
              data={{ label: key, value }}
            />
          )
        )
      : <div>No additional info</div>}
  </DescriptionSection>
)}

    </AddContainer>
  );
};

export default AddViewProduct;
