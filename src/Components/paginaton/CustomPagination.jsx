import { Pagination } from "antd";
import { PaginationStyles } from "./customPagination.style";

const CustomPagination = ({
  current,
  total,
  pageSize,
  onChange,
  align = "center",
}) => {
  
  return (
    <>
      <PaginationStyles />
      <div style={{ display: "flex", justifyContent: align }}>
        <Pagination
          total={total}
          pageSize={pageSize}
          current={current}
          onChange={(page, size) => {
            onChange(page, size); 
          }}
          showSizeChanger={false}
        />
      </div>
    </>
  );
};

export default CustomPagination;
