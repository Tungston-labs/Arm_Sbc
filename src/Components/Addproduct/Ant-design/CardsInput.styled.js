import { Collapse } from "antd";
import styled from "styled-components";

const { Panel } = Collapse;

export const StyledCollapse = styled(Collapse)`
  flex: 1;
  width: 100%;
  background: transparent;
  border: none;
  margin-top: 40px;

  .ant-collapse-item {
    border-radius: 12px;
    margin-bottom: 24px;
    overflow: hidden;

    border-bottom: none;
  }

  .ant-collapse-header {
    color: #4caf50;
    background: #333;
    font-weight: 600;
    font-size: 18px;
    padding: 16px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .ant-collapse-arrow {
      margin-right: 0;
      transform: scale(1.1);
    }
  }

  .ant-collapse-content {
    background: #030206;
    padding: 20px;
  }

  .ant-input {
    background: #2B2534;
    border: 1px solid #2B2534;
    color: #fff;
    padding: 10px 14px;
    border-radius: 6px;
    width: 100%;
  }
`;

export const StyledPanel = styled(Panel)``;
