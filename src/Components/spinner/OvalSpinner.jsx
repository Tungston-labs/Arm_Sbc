import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const OvalSpinner = ({ size = "large", color = "#8A38F5" }) => {
  const indicator = <LoadingOutlined style={{ fontSize: 24, color }} spin />;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "500px",
        width: "100%",
      }}
    >
      <Spin indicator={indicator} size={size} />
    </div>
  );
};

export default OvalSpinner;
