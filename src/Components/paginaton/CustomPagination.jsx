import { Pagination } from "antd";
import { PaginationStyles } from "./customPagination.style";

const CustomPagination = ({
  current,
  total,
  pageSize ,
  onChange,
  align = "center",
}) => {

  return (
    <>
      <PaginationStyles />
      <Pagination
        total={total}
        pageSize={pageSize}
        current={current}
        onChange={onChange}
        showSizeChanger={false}
        align={align}
      />
    </>
  );
};

export default CustomPagination;
