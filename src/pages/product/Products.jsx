import {
  AllProductContainer,
  ProductCardContainer,
  ProductHeader,
} from "./product.style";
import CustomPagination from "../../Components/CustomPagination";

const Products = () => {
  return (
    <AllProductContainer>
      <ProductHeader>Products</ProductHeader>
      <ProductCardContainer>d</ProductCardContainer>
      <CustomPagination
        total={50}
        pageSize={5}
        defaultPage={1}
        onChange={(page) => console.log("Current Page:", page)}
      />
    </AllProductContainer>
  );
};

export default Products;
