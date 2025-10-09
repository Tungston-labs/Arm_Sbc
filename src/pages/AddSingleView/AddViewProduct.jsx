import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import productImg from "../../assets/Comparison/chip.svg";
import AddProductNavBar from "../../Components/Addproduct/AddProductNavbar";
import AddProductDescriptionCard from "../../Components/Addproduct/DescriptionDetails/DescriptionSection";

import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  fetchProductAdmin,
  deleteExistingProduct,
} from "../../redux/productSlice";

import Swal from "sweetalert2";

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
import Layout from "../../Layout/Layout";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { formatHeader, sortSectionsByHeader } from "../../utils/formatHeader";

const AddViewProduct = () => {
  const [activeTab, setActiveTab] = useState("Description");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productId } = useParams();
  const { productDetailAdmin, loading } = useSelector((state) => state.product);
  const location = useLocation();

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductAdmin(productId));
    }
  }, [dispatch, productId]);

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won’t be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteExistingProduct(productId))
          .unwrap()
          .then(() => {
            Swal.fire("Deleted!", "Product has been deleted.", "success").then(
              () => {
                const stateFromPage = location.state?.fromPage;
                const queryParams = new URLSearchParams(location.search);
                const queryPage = queryParams.get("page");
                const targetPage = stateFromPage || queryPage;
                if (targetPage) navigate(`/addproduct?page=${targetPage}`);
                else navigate("/addproduct");
              }
            );
          })
          .catch((error) => {
            if (error?.response?.status === 404) {
              Swal.fire(
                "Deleted!",
                "Product was already removed.",
                "success"
              ).then(() => {
                navigate("/addproduct");
              });
            } else {
              Swal.fire(
                "Error",
                error?.response?.data?.detail ||
                  error?.message ||
                  "Failed to delete product",
                "error"
              );
            }
          });
      }
    });
  };

  const descriptionDataFromApi =
    productDetailAdmin?.descriptionData ||
    productDetailAdmin?.specifications ||
    productDetailAdmin?.specs ||
    productDetailAdmin?.details ||
    [];

  const normalizeDescription = (raw) => {
    if (!raw) return [];
    if (Array.isArray(raw) && raw.length && raw[0].header) {
      return raw.map((section) => ({
        ...section,
        header: formatHeader(section.header),
      }));
    }

    if (typeof raw === "object" && !Array.isArray(raw)) {
      return Object.entries(raw).map(([header, itemsObj]) => {
        const headerLabel = formatHeader(header);

        if (Array.isArray(itemsObj)) {
          return { header: headerLabel, items: itemsObj };
        }

        const items = Object.entries(itemsObj || {}).map(([label, value]) => ({
          label,
          value,
        }));
        return { header: headerLabel, items };
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

  const descriptionDataFromApiNormalized = sortSectionsByHeader(
    normalizeDescription(descriptionDataFromApi)
  );


  const params = new URLSearchParams(location.search);
  const queryPage = params.get("page");
  const statePage = location.state?.fromPage;
  const currentFromPage = statePage || queryPage || null;

  const handleNavigate = () => {
    const pageQuery = currentFromPage ? `?page=${currentFromPage}` : "";
    navigate(`/addform/${productId}${pageQuery}`, {
      state: { fromPage: currentFromPage },
    });
  };

  const handleBack = () => {
    if (currentFromPage) {
      navigate(`/addproduct?page=${currentFromPage}`);
      return;
    }

    if (window.history && window.history.length > 1) {
      navigate(-1);
      return;
    }

    navigate("/addproduct");
  };

  const UNITS = {
    weight: "kg",
    dimension: "cm",
  };

  function formatAdditionalLabel(key) {
    if (!key && key !== 0) return "";
    return formatHeader(key);
  }

  function formatAdditionalValue(key, value) {
    if (value === null || value === undefined) return "";
    const normalizedKey = String(key).trim().toLowerCase();
    const unit = UNITS[normalizedKey];

    const hasAlpha = /[a-zA-Z]/.test(String(value));
    const numericCheck = String(value).replace(/[^0-9.\-]/g, "");
    if (
      !hasAlpha &&
      unit &&
      numericCheck !== "" &&
      !isNaN(Number(numericCheck))
    ) {
      return `${value} ${unit}`;
    }
    return value;
  }

  return (
    <Layout>
      <AddContainer>
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
            onClick={handleBack}
            aria-label="Go back"
          >
            <IoMdArrowRoundBack size={28} color="#fff" />
          </button>
          <Header>{productId ? "Edit product" : "Add product"}</Header>
          <ActionBar>
            <EditButton type="primary" onClick={handleNavigate}>
              <FaEdit style={{ marginRight: "12px" }} />
              Edit
            </EditButton>{" "}
            <DeleteButton danger onClick={handleDelete}>
              <RiDeleteBin6Line style={{ marginRight: "12px" }} />
              Delete
            </DeleteButton>
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
                  readOnly
                />
                <Input
                  placeholder="Ram"
                  defaultValue={productDetailAdmin?.ram || ""}
                  readOnly
                />
              </TwoCols>
              <TwoCols>
                <Input
                  placeholder="Core"
                  defaultValue={productDetailAdmin?.cores || ""}
                  readOnly
                />
                <Input
                  placeholder="Storage"
                  defaultValue={productDetailAdmin?.storage || ""}
                  readOnly
                />
              </TwoCols>
              <FullWidth>
                <TextArea
                  placeholder="Add description"
                  defaultValue={productDetailAdmin?.description || ""}
                  readOnly
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
            {productDetailAdmin?.additional_info ? (
              Object.entries(productDetailAdmin.additional_info).map(
                ([key, value], idx) => {
                  const label = formatAdditionalLabel(key);
                  const displayValue = formatAdditionalValue(key, value);
                  return (
                    <AddetionalInformationCard
                      key={idx}
                      data={{ label, value: displayValue }}
                    />
                  );
                }
              )
            ) : (
              <div>No additional info</div>
            )}
          </DescriptionSection>
        )}
      </AddContainer>
    </Layout>
  );
};

export default AddViewProduct;
